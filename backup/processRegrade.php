<?php
if(!empty($_POST["myData"]))
{
    $to_email       = "rwilliams306@gatech.edu"; //Recipient email, Replace with own email here
    $from_email 	= "rwilliams306@gatech.edu"; //From email address (eg: no-reply@YOUR-DOMAIN.com)

    //check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
        $output = json_encode(array(
            'type'=>'error',
            'text' => 'Sorry Request must be Ajax POST'
        ));
        die($output);
    }

    $obj = $_POST['myData'];

    $student_name = filter_var($obj["student_name"], FILTER_SANITIZE_STRING);

    $homework_num = filter_var($obj["homework_num"],FILTER_SANITIZE_STRING);

    $homework_type = filter_var($obj["homework_type"],FILTER_SANITIZE_STRING);

    $student_username = filter_var($obj["student_username"],FILTER_SANITIZE_STRING);

    $folder_name = filter_var($obj["folder_name"],FILTER_SANITIZE_STRING);

    $regrade_problems = ($obj["regrade_problems"]);

    if(strcmp($homework_type,"Resubmission")==0){
        $path_to_student_folder = '../homework_files/Homework' . $homework_num[0] . '_resub/' . $folder_name . '*';
    }else{
        $path_to_student_folder = '../homework_files/Homework' . $homework_num[0] . '/' . $folder_name . '*';
    }

    $filelist = glob($path_to_student_folder,GLOB_ONLYDIR);

    if($filelist === FALSE){
        $output = json_encode(array('type'=>'error', 'text' => 'The homework you selected is not available for regrades. If the homework was just released, please wait a few days for our system to be updated. Otherwise, please contact your TA.'));
        die($output);
    }

    $allFiles = array();
    $solnFiles = array();

    $regradeProblemStr = '';
    foreach($regrade_problems as $problem) {
        $problem_name = $problem['problem_name'];
        $problem_justification = $problem['justification'];
        $problem_testCases = $problem['test_cases'];

        $regradeProblemStr .= '<tr><td style="text-align: center;padding:10px;"><center><table style="border-collapse:collapse;width:60%;border-radius:3px;border: 1px solid #aaaaaa;" cellpadding="20"<tr><td style="border-bottom:1px solid #444444;white-space:nowrap;background-color: #2488B5;color:#ffffff;"><strong>Problem Name:</strong></td><td style="border-bottom:1px solid #444444;background-color: #2488B5;color:#ffffff;"><strong>' . $problem_name . "</strong></td></tr>";
        $regradeProblemStr .= '<tr style="background-color:#ffffff;"><td style="border-bottom:1px solid #444444;">Test Cases:</td><td style="border-bottom:1px solid #444444;">' . $problem_testCases . "</td></tr>";
        $regradeProblemStr .= '<tr style="background-color:#ffffff;"><td style="border-bottom:1px solid #444444;">Justification:</td><td style="border-bottom:1px solid #444444;word-break:break-all;">' . $problem_justification . "</td></tr></table></center></td></tr>";

        $path_to_file = $filelist[0].'/Submission attachment(s)/' . $problem_name . '.m';

        $hw_file_contents = file_get_contents($path_to_file);

        if($hw_file_contents === FALSE){
            $output = json_encode(array('type'=>'error', 'text' => 'We could not find one of the files you submitted a regrade for. If you did not submit the files on TSquare, we cannot regrade your assignment. If the homework was just released, please wait a few days for our system to be updated. Otherwise, please contact your TA.'));
            die($output);
        }

        $encoded_content = chunk_split(base64_encode($hw_file_contents));
        $allFiles[$problem_name] = $encoded_content;

        $path_to_soln = './solutions/Homework'.$homework_num[0].'/'.$problem_name.'_soln.p';
        $soln_file_conents = file_get_contents($path_to_soln);
        $encoded_soln_content = chunk_split(base64_encode($soln_file_conents));

        if(strlen($encoded_soln_content)<5){
            //$output = json_encode(array('type'=>'error', 'text' => $encoded_soln_content));
            //die($output);
            $solnFiles[$problem_name.'_soln.p'] = FALSE;
        }else{
            //$output = json_encode(array('type'=>'error', 'text' => strlen($encoded_soln_content)));
            //die($output);
            $solnFiles[$problem_name.'_soln.p'] = $encoded_soln_content;
        }

    }

    $path_to_grade_file = $filelist[0].'/Feedback Attachment(s)/grade.txt';
    $grade_file_contents = file_get_contents($path_to_grade_file);
    $grade_file = chunk_split(base64_encode($grade_file_contents));

    if(strcmp($homework_type,"Resubmission")==0){
        $path_to_supporting_files = './solutions/Homework'.$homework_num[0].'/Supporting Files Resub.zip';
    }else{
        $path_to_supporting_files = './solutions/Homework'.$homework_num[0].'/Supporting Files.zip';
    }

    $supporting_files_exist = file_exists($path_to_supporting_files);
    if($supporting_files_exist){
        $supporting_file_contents = file_get_contents($path_to_supporting_files);
        $supporting_files = chunk_split(base64_encode($supporting_file_contents));
    }
    
    $path_to_pdf_file = './solutions/Homework'.$homework_num[0].'/Homework'.sprintf("%02d", $homework_num[0]).'_DrillProblems.pdf';
    $pdf_file_exists = file_exists($path_to_pdf_file);
    if($pdf_file_exists){
        $pdf_file_contents = file_get_contents($path_to_pdf_file);
        $pdf_file = chunk_split(base64_encode($pdf_file_contents));
    }
    
    
    $TA_Arr = ($obj["TAs"]);

    $TANames = "";
    $TAEmails = "";
    foreach($TA_Arr as $TA){
        $TAName_split = explode(" ",$TA['name']);
        $TANames .= $TAName_split[0] . ", ";
        $TAEmails .= $TA['email'] . ",";
    }
    $TANames = substr_replace($TANames, "!", -2);

    //Sanitize input data using PHP filter_var().
    /*$user_name      = filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
    $user_email     = filter_var($_POST["user_email"], FILTER_SANITIZE_EMAIL);
    $country_code   = filter_var($_POST["country_code"], FILTER_SANITIZE_NUMBER_INT);
    $phone_number   = filter_var($_POST["phone_number"], FILTER_SANITIZE_NUMBER_INT);
    $subject        = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
    $message        = filter_var($_POST["msg"], FILTER_SANITIZE_STRING);

    //additional php validation
    if(strlen($user_name)<4){ // If length is less than 4 it will output JSON error.
        $output = json_encode(array('type'=>'error', 'text' => 'Name is too short or empty!'));
        die($output);
    }
    if(!filter_var($user_email, FILTER_VALIDATE_EMAIL)){ //email validation
        $output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
        die($output);
    }
    if(!filter_var($country_code, FILTER_VALIDATE_INT)){ //check for valid numbers in country code field
        $output = json_encode(array('type'=>'error', 'text' => 'Enter only digits in country code'));
        die($output);
    }
    if(!filter_var($phone_number, FILTER_SANITIZE_NUMBER_FLOAT)){ //check for valid numbers in phone number field
        $output = json_encode(array('type'=>'error', 'text' => 'Enter only digits in phone number'));
        die($output);
    }
    if(strlen($subject)<3){ //check emtpy subject
        $output = json_encode(array('type'=>'error', 'text' => 'Subject is required'));
        die($output);
    }
    if(strlen($message)<3){ //check emtpy message
        $output = json_encode(array('type'=>'error', 'text' => 'Too short message! Please enter something.'));
        die($output);
    }*/
    $message_body = "<html><body style='font-family:sans-serif;'><table width='100%' border='0' cellspacing='0' cellpadding='0' style='font-family:sans-serif;border:1px solid #000000;background-color:#ededed;max-width:600px;'><tr style='background-color:#445;color:#ffffff;'><td style='text-align: center;padding:10px;font-size:24px;'>CS 1371 Regrade Request</td></tr><tr><td style='text-align: center;padding:10px;'>";
    $message_body .= "<h3>Hey " . $TANames . "</h3>";
    $message_body .= "<h4>You got a regrade request!</h4>";
    $message_body .= "<center><table style='border-collapse:collapse;' cellpadding='10'><tr style='background-color:#cccccc;'><td style='border-bottom: 1px solid #444444;font-weight:italic;'><em>Student Name:</em></td><td style='border-bottom: 1px solid #444444;'>" . $student_name . "</td></tr>";
    $message_body .= "<tr style='background-color:#ffffff;'><td style='border-bottom: 1px solid #444444;'><em>Student Username:</em></td><td style='border-bottom: 1px solid #444444;'>" . $student_username . "</td></tr>";
    $message_body .= "<tr style='background-color:#cccccc;'><td style='border-bottom: 1px solid #444444;'><em>Homework Number:</em></td><td style='border-bottom: 1px solid #444444;'>" . $homework_num . "</td></tr>";
    $message_body .= "<tr style='background-color:#ffffff;'><td style='border-bottom: 1px solid #444444;'><em>Type:</em></td><td style='border-bottom: 1px solid #444444;'>" . $homework_type . "</td></tr>";
    $message_body .= "<tr style='background-color:#cccccc;'><td style='border-bottom: 1px solid #444444;'><em>Total Problems:</em></td><td style='border-bottom: 1px solid #444444;'>" . sizeof($regrade_problems) . "</td></tr></table></center></td></tr>";
    $message_body .= $regradeProblemStr;

    
    $accepted_email = "Hi " . $student_name . ",%0A%0AYour regrade request has been accepted!%0A%0AOld score:%0ANew Score:%0A%0AYour score should now be updated on TSquare.";
    
    $denied_email = "Hi " . $student_name . ",%0A%0AYour regrade request was denied. Please see the details below:";
    
    $message_body .= "<tr style='padding:10px 0;'><td><center><table style='border-collapse:collapse;' cellpadding='10'><tr><td style='background-color:#4caf50;color:#fff;border:1px solid #000;'>Accept Regrade: </td><td style='border:1px solid #000;'><a href='mailto:" . $student_username . "@gatech.edu?subject=[CS 1371] Homework " . $homework_num . " Regrade Request Accepted&body=" . $accepted_email . "' target='_blank'>Desktop</a></td><td style='border:1px solid #000;'><a href='https://mail.google.com/mail/?view=cm&fs=1&to=" . $student_username . "@gatech.edu&su=[CS 1371] Homework " . $homework_num . " Regrade Request Accepted&body=". $accepted_email . "' target='_blank'>Gmail</a></td><td style='border:1px solid #000;'><a href='http://mail.live.com/default.aspx?page=Compose&to=" . $student_username . "@gatech.edu&subject=[CS 1371] Homework " . $homework_num . " Regrade Request Accepted&body=". str_replace("%0A","<br>",$accepted_email) . "' target='_blank'>Outlook 365</a></td></tr><tr><td style='background-color:#d62828;color:#fff;border:1px solid #000;'>Deny Regrade:</td><td style='border:1px solid #000;'><a href='mailto:" . $student_username . "@gatech.edu?subject=[CS 1371] Homework " . $homework_num . " Regrade Request Denied&body=" . $denied_email . "' target='_blank'>Desktop</a></td><td style='border:1px solid #000;'><a href='https://mail.google.com/mail/?view=cm&fs=1&to=" . $student_username . "@gatech.edu&su=[CS 1371] Homework " . $homework_num . " Regrade Request Denied&body=". $denied_email . "' target='_blank'>Gmail</a></td><td style='border:1px solid #000;'><a href='http://mail.live.com/default.aspx?page=Compose&to=" . $student_username . "@gatech.edu&subject=[CS 1371] Homework " . $homework_num . " Regrade Request Denied&body=". str_replace("%0A","<br>",$denied_email) . "' target='_blank'>Outlook 365</a></td></tr></table></center></td></tr>";

    $message_body .= "</table></body></html>";

    $boundary = md5("sanwebe"); 

    //header
    $headers = "MIME-Version: 1.0\n"; 
    $headers .= "From:".$from_email."\n"; 
    $headers .= "Reply-To: ".$from_email."" . "\n";
    $headers .= 'Bcc: rwilliams306@gatech.edu' . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary = $boundary\n\n"; 

    //plain text 
    $body = "--$boundary\n";
    $body .= "Content-Type: text/html; charset=ISO-8859-1\n";
    $body .= "Content-Transfer-Encoding: base64\n\n"; 
    $body .= chunk_split(base64_encode($message_body)); 

    //attachment
    foreach($allFiles as $problemName => $file_contents){
        $body .= "--$boundary\n";
        $body .="Content-Type: text/html; name=\"". $problemName .".m\"\n";
        $body .="Content-Disposition: attachment; filename=\"". $problemName .".m\"\n";
        $body .="Content-Transfer-Encoding: base64\n";
        $body .="X-Attachment-Id: ".rand(1000,99999)."\n\n"; 
        $body .= $file_contents;

        //HERE, it's attaching multiple copies of the same file
        $soln_name = $problemName.'_soln.p';
        if($solnFiles[$soln_name]){
            $body .= "--$boundary\n";
            $body .="Content-Type: text/html; name=\"". $soln_name ."\"\n";
            $body .="Content-Disposition: attachment; filename=\"". $soln_name ."\"\n";
            $body .="Content-Transfer-Encoding: base64\n";
            $body .="X-Attachment-Id: ".rand(1000,99999)."\n\n"; 
            $body .= $solnFiles[$soln_name];
        }
    }

    $body .= "--$boundary\n";
    $body .="Content-Type: text/html; name=\"grade.txt\"\n";
    $body .="Content-Disposition: attachment; filename=\"grade.txt\"\n";
    $body .="Content-Transfer-Encoding: base64\n";
    $body .="X-Attachment-Id: ".rand(1000,99999)."\n\n"; 
    $body .= $grade_file;

    if($supporting_files_exist){
        $body .= "--$boundary\n";
        $body .="Content-Type: text/html; name=\"Supporting Files.zip\"\n";
        $body .="Content-Disposition: attachment; filename=\"Supporting Files.zip\"\n";
        $body .="Content-Transfer-Encoding: base64\n";
        $body .="X-Attachment-Id: ".rand(1000,99999)."\n\n"; 
        $body .= $supporting_files;
    }
    
    if($pdf_file_exists){
        $body .= "--$boundary\n";
        $body .="Content-Type: text/html; name=\"Homework".sprintf("%02d", $homework_num[0])."_DrillProblems.pdf\"\n";
        $body .="Content-Disposition: attachment; filename=\"Homework".sprintf("%02d", $homework_num[0])."_DrillProblems.pdf\"\n";
        $body .="Content-Transfer-Encoding: base64\n";
        $body .="X-Attachment-Id: ".rand(1000,99999)."\n\n"; 
        $body .= $pdf_file;
    }

    $subject = "[CS 1371] Regrade Request";

    //$send_mail = mail($TAEmails, $subject, $body, $headers);
    $send_mail = mail("rwilliams306@gatech.edu", $subject, $body, $headers);

    if(!$send_mail)
    {
        $output = json_encode(array('type'=>'error', 'text' => 'Something went wrong while submitting your regrade request. Please try submitting again or send an email to rwilliams306@gatech.edu and include the information you submitted on the form. Sorry for the inconvienence!'));
        die($output);
    }else{
        $output = json_encode(array('type'=>'success', 'text' => 'Hi Thank you for your email'));
        die($output);
    }
}else{
    $output = json_encode(array('type'=>'error', 'text' => 'Something went wrong while submitting your regrade request. Please try submitting again or send an email to rwilliams306@gatech.edu and include the information you submitted on the form. Sorry for the inconvienence!'));
    die($output);
}
?>