<?php
require_once './constants.php';
header("Content-Type: application/json; charset=UTF-8");

// Get the TAs... have to hardcode for now... kind of.
// Format of the JSON: an array of:
/*
Format:
    name: string,
    gtUsername: string,
    trelloUsername: string,
    section: {
        name: string,
        location: string,
        time: string,
    },
*/
// We have their trello usernames and GT usernames. Ask Trello for board members, and match up
global $teacherPath;
$init = json_decode(file_get_contents($teacherPath), true);
// Ask trello
$trello = getTrelloMembers();
// Ask Canvas
$canvas = getCanvasMembers();
$tas = array();

foreach ($init as $i) {
    $ta = array();
    $ta['name'] = $i['name'];
    $ta['gtUsername'] = $i['gtUsername'];
    $ta['section'] = $i['section']['name'];

    $tmp = array_values(array_filter($trello, function ($t) use ($i) {
        return isset($i['trelloUsername']) && ($t['username'] === $i['trelloUsername']);
    }));
    if (count($tmp) === 0) {
        $ta['trelloId'] = '';
    } else {
        $ta['trelloId'] = $tmp[0]['id'];
    }
    $tmp = array_values(array_filter($canvas, function ($c) use ($i) {
        return isset($c['login_id']) && $c['login_id'] === $i['gtUsername'];
    }));
    if (count($tmp) === 0) {
        $ta['canvasId'] = '';
    } else {
        $ta['canvasId'] = $tmp[0]['id'];
    }
    if (!isset($i['title']) || $i['title'] !== 'Instructor') {
        $tas[] = $ta;
    }
}

exit(json_encode($tas));

function getCanvasMembers() {
    global $canvasToken;
    global $courseID;

    // STEP 1: EXPORT INFORMATION FROM CANVAS

    //  Initiate curl
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Get headers for users
    $fid = fopen('tmp.txt', 'w');
    curl_setopt($ch, CURLOPT_WRITEHEADER, $fid);

    // Get first page of users
    $page = 1;
    $url_users = "https://gatech.instructure.com/api/v1/courses/$courseID/users?&page=$page&per_page=50&access_token=$canvasToken&enrollment_type[]=teacher&enrollment_type[]=ta";
    curl_setopt($ch, CURLOPT_URL, $url_users);


    $users = [];
    $tmp = json_decode(curl_exec($ch), true);
    foreach ($tmp as $u) {
        $users[] = $u;
    }
    fclose($fid);


    // Find number of pages
    $headers = fopen("tmp.txt", "r");
    $found = false;
    while(!feof($headers) && !$found)
    {
        $line = fgets($headers);
        $found = strpos($line, "link:") !== false || strpos($line, "Link:") !== false;
    }
    $foundLast = false;
    $current = strtok($line, ',');
    while (!$foundLast)
    {
        $pos = strpos($current, 'last');
        if ($pos !== false)
        {
            $foundLast = true;
            $pos = strpos($current, 'page=');
            $lastPage = substr($current, $pos + 5, 1);
        }
        $current = strtok(',');
    }
    fclose($headers);

    while ($page < $lastPage)
    {
        //Get next page
        $page = $page + 1;
        $url_users = "https://gatech.instructure.com/api/v1/courses/$courseID/users?&page=$page&per_page=50&access_token=$canvasToken";
        curl_setopt($ch, CURLOPT_URL, $url_users);
        $tmp = json_decode(curl_exec($ch), true);
        foreach ($tmp as $u) {
            $users[] = $u;
        }
    }
    curl_close($ch);

    /* We will need this if we ever need login info (right now it's given for free!)
    $users = array_map(function ($u) {
        global $canvasToken;
        $ch = curl_init();
        $id = $u['id'];
        $profile_url = "https://gatech.instructure.com/api/v1/users/$id/profile?access_token=$canvasToken";
        curl_setopt($ch, CURLOPT_URL, $profile_url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $profile = json_decode(curl_exec($ch), true);
        curl_close($ch);
        $u['profile_info'] = $profile;
        return $u;
    }, $users);
    */
    return $users;
}

function getTrelloMembers() {
    global $trelloKey;
    global $trelloToken;
    global $trelloBoard;
    $urlGetMembers = 'https://api.trello.com/1/boards/'.rawurlencode($trelloBoard).'/members?key='.rawurlencode($trelloKey).'&token='.rawurlencode($trelloToken);
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $urlGetMembers);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $allMembers = json_decode(curl_exec($curl), true);
    return $allMembers;
}
?>