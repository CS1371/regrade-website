<?php
// api returns json
header("Content-Type: application/json; charset=UTF-8");

require_once './constants.php';
require_once './login.php';
require_once './getLink.php';

// check http request type
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $output = getCards(getUsername($isLocalhost), $trelloToken, $trelloKey);
        break;
    case 'POST':
		// get posted data
		//file_put_contents('tmp3.txt', file_get_contents("php://input"));
		$data = file_get_contents("php://input");
        $output = addCard($data, $trelloToken, $trelloKey);
		break;
	default:
		$output = array();
		break;
}

exit(json_encode($output));


function getCards($username, $trelloToken, $trelloKey) {
	// initializes empty array
	$output = [];

	// checks to see if valid username used as input 
	if (empty($username)) {
        // return nothing if user wasn't authenticated
		return $output;
	}
    // add username to output
    $output["username"] = $username;

	// creates URL for TrelloAPI card
    $url = 'https://api.trello.com/1/boards/5bcfba81f88b4e87e676a435/cards?limit=1000&fields=name,desc,id,date&customFieldItems=true&key='.rawurlencode($trelloKey).'&token='.rawurlencode($trelloToken);
    $actionsUrl = 'https://api.trello.com/1/cards/%s/actions?limit=1000&fields=data,type,date&filter=all&member=false&memberCreator=true&memberCreator_fields=fullName,avatarHash&key='.rawurlencode($trelloKey).'&token='.rawurlencode($trelloToken);

    // calls API
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

	// All cards is the JSON found from API call
	$allCards = curl_exec($curl);
	// Decode JSON into PHP Array 
	$allCardsData = json_decode($allCards, true);

    if (empty($allCards))
        return [];

    $cardsOutput = [];
	// Find cards with correct Username and store in output Array
	foreach ($allCardsData as $cardData) {
		// Checks to see if field is set
		if (isset($cardData['customFieldItems'][0]['value']['text'])) {
			// Checks to see if correct Username
			if ($cardData['customFieldItems'][0]['value']['text'] === $username) {
                // Get all the actions (activity feed) for that card
                curl_setopt($curl, CURLOPT_URL, sprintf($actionsUrl, $cardData['id']));
                $allActions = curl_exec($curl);
                $allActionsData = json_decode($allActions, true);
                $commentsOutput = [];
                // Iterating over actions in reverse order (most recent
                // becomes last) so that we get the last list/status value
                $actionIndex = count($allActionsData);
                $cardData['status'] = 'New';
                while ($actionIndex) {
                    $actionsData = $allActionsData[--$actionIndex];
                    if ($actionsData['type'] === 'commentCard') {
                        array_push($commentsOutput, $actionsData);
                    } else if ($actionsData['type'] === 'updateCard'
                        && isset($actionsData['data']['listBefore'])
                        && isset($actionsData['data']['listAfter'])) {
                        $cardData['status'] = $actionsData['data']['listAfter']['name'];
                    } else if ($actionsData['type'] === 'createCard') {
                        $cardData['dateCreated'] = $actionsData['date'];
                    }
                }
                $cardData['comments'] = $commentsOutput;
				array_push($cardsOutput, $cardData);
			}
		}
    }
    // Sort cards (regrades) by date created -- default sorting depends on lists
    usort($cardsOutput, function($a, $b) {
        return strtotime($b['dateCreated']) - strtotime($a['dateCreated']);
    });
    $output["cards"] = $cardsOutput;
	return $output;
}

function addCard($data, $trelloToken, $trelloKey) {
	/*
	Payload Format:
	{
		problems: {
			name: string,
			testCases: (string|number)[],
			description: string,
		}[],
		homeworkName: string,
		homeworkNumber: number,
		submissionType: "Original"|"Resubmission",
		section: {
			name: string,
			tas: {
				name: string,
				gtUsername: string,
				canvasId: string,
				trelloId: string,
				section: string,
			}[],
		},
	}
	*/
	file_put_contents('data.txt', $data);

	$data = json_decode($data, true);
	$cardName = 'Homework ' . $data['homeworkNumber'] . ' Regrade';
	$regradeReason = '';
	$regradeReasons = array();
	foreach	($data['problems'] as $problem) {
		$regradeReasons[] = $problem['name']."\n\nTest Cases: ".implode(", ", $problem['testCases'])."\n\nJustification: ".$problem['description'];
	}
	$regradeReason = implode("\n", $regradeReasons);
	/* Should not need this, now that we have Trello ID
	$urlGetMembers = 'https://api.trello.com/1/boards/5bcfba81f88b4e87e676a435/members?key='.rawurlencode($trelloKey).'&token='.rawurlencode($trelloToken);
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $urlGetMembers);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	$allMembers = curl_exec($curl);
	$allMembersData = json_decode($allMembers, true);
	$taID1 = '';
	$taID2 = '';
	if (is_array($allMembersData)) {
		foreach ($allMembersData as $member) {
			if ($member['fullName'] == $taName1) {
				$taID1 = $member['id'];
			} elseif ($member['fullName'] == $taName2) {
				$taID2 = $member['id'];
			}
		}
	}
	*/
	$taIds = [];
	foreach ($data['section']['tas'] as $ta) {
		if (isset($ta['trelloId']) && strlen($ta['trelloId']) > 0) {
			$taIds[] = $ta['trelloId'];
		}
	}
	$memberIDs = implode(',', $taIds);
	$urlMakeCard = "https://api.trello.com/1/cards?name=".rawurlencode($cardName)."&desc=".rawurlencode($regradeReason)."&idList=5beb72c2c45e3520c8c3a7ca&idMembers=".rawurlencode($memberIDs)."&keepFromSource=all&key=".rawurlencode($trelloKey)."&token=".rawurlencode($trelloToken);
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $urlMakeCard);
	curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	$newCard = json_decode(curl_exec($curl), true);
	curl_close($curl);

	// add gt Username
	$urlAddUsername = "https://api.trello.com/1/card/".rawurlencode($newCard['id']).'/customField/5beb7358a3bc5f3324a0561d/item?key='.rawurlencode($trelloKey).'&token='.rawurlencode($trelloToken);
	$payload = json_encode(array(
		'value' => array('text' => getUsername($isLocalhost)),
	));

	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $urlAddUsername);
	curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'PUT');
	curl_setopt($curl, CURLOPT_HTTPHEADER, array("Accept: */*", "Content-Type: application/json", "Content-Length: ".strlen($payload)));
	curl_setopt($curl, CURLOPT_POSTFIELDS, $payload);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

	curl_exec($curl);
	curl_close($curl);

	$urlAddAttachment = 'https://api.trello.com/1/cards/'.rawurlencode($newCard['id']).'/attachments';
	$payload = 'url='.getLink(getUsername($isLocalhost), $data['homeworkNumber'].' - '.$data['submissionType']).'&key='.$trelloKey.'&token='.$trelloToken;
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
	curl_setopt($curl, CURLOPT_POSTFIELDS, $payload);
	curl_setopt($curl, CURLOPT_URL, $urlAddAttachment);
	curl_exec($curl);
	curl_close($curl);
	return $newCard; 
}
?>