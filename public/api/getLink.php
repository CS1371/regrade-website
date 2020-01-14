<?php

require_once 'constants.php';

/*
 * Function to generate the url to a particular student's submission.
 *
 * COURSE ID: 26266
 *
 * inputs: an assignment name and a student's GT username
 * outputs: the url that would lead to that student's submission of that
 * assignment.
 *
 * First gets all students and all assignments in the course. Then searches
 * through all students for the input student. Then searches through all
 * assignments for the input assignment. Generates link in format:
 *
 * https://gatech.instructure.com/courses/26266/assignments/:assignmentID/submissions/:studentID
 */

function getLink($student, $assignment) {
    global $canvasToken;
    global $courseID;

// STEP 1: EXPORT INFORMATION FROM CANVAS

    //  Initiate curl
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $url_assignments = "https://gatech.instructure.com/api/v1/courses/$courseID/assignments?&per_page=100&access_token=$canvasToken";
    curl_setopt($ch, CURLOPT_URL, $url_assignments);
    $assignments = json_decode(curl_exec($ch), true);

    // Get headers for users
    $lastPage = '';
    $headerHandler = function ($ch2, $header) use ($lastPage) {
        $found = strpos($header, "Link:") !== false || strpos($header, "link:") !== false;
        if ($found) {
            $current = strtok($header, ',');
            while (true)
            {
                $pos = strpos($current, 'last');
                if ($pos !== false)
                {
                    $pos = strpos($current, 'page=');
                    $lastPage = substr($current, $pos + 5, 1);
                    return;
                }
                $current = strtok(',');
            }
        }
    };
    curl_setopt($ch, CURLOPT_HEADERFUNCTION, $headerHandler);

    // Get first page of users
    $page = 1;
    $url_users = "https://gatech.instructure.com/api/v1/courses/$courseID/users?&page=$page&per_page=5000&access_token=$canvasToken";
    curl_setopt($ch, CURLOPT_URL, $url_users);
    $users = json_decode(curl_exec($ch), true);

    // Get assignments

// STEP 2: ITERATRE THROUGH STUDENTS LOOKING FOR $STUDENT

    // Get student's first initial and last name from gt username
    $name = strtok($student, "1234567890");
    $first = substr($name, 0, 1);
    $last = ucfirst(substr($name, 1));

    $found = false;
    $studentID = '';
    while (!$found && $page <= $lastPage)
    {
        foreach($users as $user)
        {
        /* If the name of the current student contains the last name of the
         * the student we are searching for, get that student's profile and
         * see if the gt usernames match
         *
         * /api/v1/users/:user_id/profile
         */

            $curName = $user['name'];
            if (strpos($curName, $last) !== false)
            {
                $id = $user['id'];
                $profile_url = "https://gatech.instructure.com/api/v1/users/$id/profile?access_token=$canvasToken";
                curl_setopt($ch, CURLOPT_URL, $profile_url);
                $profile = json_decode(curl_exec($ch), true);
                $curID = $profile['login_id'];
                if (strcasecmp($student, $curID) == 0)
                {
                    $studentID = $profile['id'];
                    $found = true;
                    break 1;
                }
            }
        }

        //Get next page
        if (!$found)
        {
            $page = $page + 1;
            $url_users = "https://gatech.instructure.com/api/v1/courses/$courseID/users?&page=$page&per_page=5000&access_token=$canvasToken";
            curl_setopt($ch, CURLOPT_URL, $url_users);
            $users = json_decode(curl_exec($ch), true);
        }
    }

// STEP 3: ITERATRE THROUGH ASSIGNMENTS LOOKING FOR $ASSIGNMENT

    // Get assignment number from input
    $alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -";
    $assignmentNum = strtok($assignment, $alphabet);
    $assignmentID = '';
    foreach($assignments as $curAssignment)
    {
        /* If the assignment numbers match, check to see if neither $assignment
         * nor the current assignment contain 'Resubmission'. Otherwise, check to
         * see if they both do.
         *
         */

        $assignmentName = $curAssignment['name'];
        $curAssignmentNum = strtok($assignmentName, $alphabet);
        if ((int)$curAssignmentNum === (int)$assignmentNum)
        {
            if (strpos($assignment, 'Resubmission') == false && strpos($assignmentName, 'Resubmission') == false)
            {
                $assignmentID = $curAssignment['id'];
                break 1;
            } else if (strpos($assignment, 'Resubmission') != false && strpos($assignmentName, 'Resubmission') != false) {
                $assignmentID = $curAssignment['id'];
                break 1;
            }
        }
    }

    curl_close($ch);

// STEP 4: CONSTRUCT LINK

    $link = "https://gatech.instructure.com/courses/$courseID/assignments/$assignmentID/submissions/$studentID";

    return $link;
}


 ?>