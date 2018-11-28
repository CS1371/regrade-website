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
	// initializes empty array
	$output = [];

	// checks to see if valid username used as input 
	if (empty($username)) {
		return $output;
	}

	// creates URL for TrelloAPI card
	$url = 'https://api.trello.com/1/boards/5bcfba81f88b4e87e676a435/cards/?limit=100&fields=name&customFieldItems=true&key=a55cc0fef6b52b8a4bf527e2ee767fc8&token='.rawurlencode($trelloToken);
    //$output = (Object) array();

    // calls API
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

	// All cards is the JSON found from API call
	$allCards = curl_exec($curl);

	// Decode JSON into PHP Array 
	$allCardsData = json_decode($allCards, true);

	// Find cards with correct Username and store in output Array
	foreach ($allCardsData as $cardData) {

		// Checks to see if field is set
		if (isset($cardData['customFieldItems'][0]['value']['text'])) {

			// Checks to see if correct Username
			if ($cardData['customFieldItems'][0]['value']['text'] == $username) {
				array_push($output, $cardData);
			}
		}
	}
	return $output;
}

function addCard($data) {
	$data = json_decode($data, true);
	$cardName = "Code Test";
	$taName1 = "Prithvi Rathaur";
	$taName2 = "Baran Usluel";
	$regradeReason = "See if it works";
	foreach ($data as $field) {
		if (isset($field)) {
			if ($field == "Homework Submission") {
				$cardName = $field[0];
			} elseif ($field == "TAS") {
				$taName1 = $field[0];
				$taName2 = $field[1];
			} elseif ($field == "Reason for Regrade") {
				$regradeReason = $field[0];
			}
		}
	}
	//if (!isset($cardName) || !isset($regradeReason) || (!isset(taName1) && !isset(taName2))) {

	//} else {
		$urlGetMembers = 'https://api.trello.com/1/boards/5bcfba81f88b4e87e676a435/members?key=a55cc0fef6b52b8a4bf527e2ee767fc8&token='.rawurlencode($trelloToken);
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, $urlGetMembers);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		$allMembers = curl_exec($curl);
		$allMembersData = json_decode($allMembers, true);
		$taID1;
		$taID2;
		if (is_array($allMembersData)) {
			foreach ($allMembersData as $member) {
				if ($member['fullName'] == $taName1) {
					$taID1 = $member['id'];
				} elseif ($member['fullName'] == $taName2) {
					$taID2 = $member['id'];
				}
			}
		}
		$memberIDs = $taID1.','.$taID2;
		$urlMakeCard = "https://api.trello.com/1/cards?name=".rawurlencode($cardName)."&desc=".rawurlencode($regradeReason)."&idList=5beb72c2c45e3520c8c3a7ca&idMembers=".rawurlencode($memberIDs)."&keepFromSource=all&key=a55cc0fef6b52b8a4bf527e2ee767fc8&token=".rawurlencode($trelloToken);
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, $urlMakeCard);
		curl_setopt($curl, CURLOPT_POST, 1);
		//curl_setopt($curl, CURLOPT_POSTFIELDS, $memberIDs);
		$newCard = curl_exec($curl);
	//}
	   // assume new card is added to Trello
	   // return confirmation output
	   //$output = $data;
	   //$output->time = time();
	   //return $output;
	return $newCard; 
}
?>
