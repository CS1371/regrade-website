<?php
// api returns json
header("Content-Type: application/json; charset=UTF-8");

// check http request type
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if (isset($_GET['name']))
            $output = getCards($_GET['name']);
        else
            $output = getCards('');
        break;
    case 'POST':
        // get posted data
        $data = json_decode(file_get_contents("php://input"));
        $output = addCard($data);
        break;
}

exit(json_encode($output));


function getCards($student_name) {
    $output = (Object) array();
    if (empty($student_name)) {
        $output->cards = [];
        return $output;
    }
    // return dummy json for now
    $output->cards = array(
        array("id" => 1, "name" => "HW 1 Original - " . $student_name, "student" => $student_name, "ta" => "Baran"),
        array("id" => 2, "name" => "HW 3 Resubmission - " . $student_name, "student" => $student_name, "ta" => "Some TA"),
    );
    return $output;
}

function addCard($data) {
    // assume new card is added to Trello
    // return confirmation output
    $output = $data;
    $output->time = time();
    return $output;
}
?>
