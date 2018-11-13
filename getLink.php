<?php

// For testing purposes only
getLink("jpetrillo3", "Homework 11 - Original");

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

// STEP 1: EXPORT INFORMATION FROM CANVAS

//  Initiate curl
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Get Users
    $url_users = "https://gatech.instructure.com/api/v1/courses/26266/users?&per_page=5000&access_token=2096~9RXlwVUP3OIkybSXxvCMEiPAoGymux2IxRd3hifZEuREmJEa8x1MjmvNXeCLaCHB";
    curl_setopt($ch, CURLOPT_URL, $url_users);
    $users = json_decode(curl_exec($ch), true);

// Get assignments
    $url_assignments = "https://gatech.instructure.com/api/v1/courses/26266/assignments?&per_page=5000&access_token=2096~9RXlwVUP3OIkybSXxvCMEiPAoGymux2IxRd3hifZEuREmJEa8x1MjmvNXeCLaCHB";
    curl_setopt($ch, CURLOPT_URL, $url_assignments);
    $assignments = json_decode(curl_exec($ch), true);

// For testing purposes only
    echo json_encode($users);
    echo json_encode($assignments);

// STEP 2: ITERATRE THROUGH STUDENTS LOOKING FOR $STUDENT

    // get student's first initial and last name from gt username
    $name = strtok($student, "1234567890");
    echo($name);
    $first = substr($name, 0, 1);
    $last = substr($name, 1);
    echo($first);
    echo($last);


    foreach($users as $user)
    {
        /* if first initial and last name match, get student's login id and see
         * if it matches gt username. If it matches get students id number and break.
         *
         * /api/v1/users/:user_id/profile
         */

        $curName = $user['name'];
        $curFirst = strtok($curName, " ");
        $curLast = strtok($curFirst, " ");
        if (substr($curFirst, 0, 1) == $first && $curLast == $last)
        {
            $id = $user['id'];
            $profile_url = "https://gatech.instructure.com/api/v1/users/$id/profile?access_token=2096~9RXlwVUP3OIkybSXxvCMEiPAoGymux2IxRd3hifZEuREmJEa8x1MjmvNXeCLaCHB";
            curl_setopt($ch, CURLOPT_URL, $profile_url);
            $profile = json_decode(curl_exec($ch), true);
            echo(json_encode($profile));
        }
    }

    foreach($assignments as $assignment) {
        /* Match assignment number and either original or resubmission, get
         * assignment id
         *
         * /api/v1/users/:user_id/profile
         */
    }

    // construct link
    // https://gatech.instructure.com/courses/26266/assignments/:assignmentID/submissions/:studentID

    // return link
}


 ?>