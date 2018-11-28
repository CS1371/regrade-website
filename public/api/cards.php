<?php
// api returns json
header("Content-Type: application/json; charset=UTF-8");

require_once './constants.php';
require_once './login.php';

// check http request type
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $output = getCards($isLocalhost ? "teststudent" : getUsername());
        break;
    case 'POST':
        // get posted data
        $data = json_decode(file_get_contents("php://input"));
        $output = addCard($data);
        break;
}

exit(json_encode($output));


function getCards($username) {
    $output = (Object) array();
    if (empty($username)) {
        $output->username = [];
        $output->cards = [];
        return $output;
    }
    // return dummy json for now
    $output->username = $username;
    $output->cards = array(
        array("homework" => "Homework 3 - Original", "description" => "I did it correctly, I know because it worked on my computer, autograder must have messed up!", "timestamp" => "10/4/18", "status" => "Pending", "comment" => []),
        array("homework" => "Homework 2 - Resubmission", "description" => "I don't know what happened, but my code was passing the test cases...", "timestamp" => "09/23/18", "status" => "Denied", "comment" => "This regrade request was denied because your code is incorrect", "commentor" => "Baran"),
        array("homework" => "Homework 1 - Resubmission", "description" => "I'm sure I did this right, I tested with the grading test cases too", "timestamp" => "09/02/18", "status" => "Accepted", "comment" => "Sorry, that was our bad. Fixed your grade on Canvas", "commentor" => "Alex")
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
