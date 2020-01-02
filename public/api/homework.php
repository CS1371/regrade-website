<?php
require_once "./constants.php";
require_once "./login.php";

$out = null;
if (isset($_GET['num'])) {
    $num = (int) $_GET['num'];
    if ($num > 0) {
        $out = getHomework((int) $_GET['num']);
    }
} else {
    $out = getHomeworks();
}

exit(json_encode($out));
function getHomeworks() {
    // Look in homeworks folder. Each JSON file will be named 'homework##<_Resub>.json'.
    // Output format:
    /*
    {
        number: number,
        hasResubmission: boolean,
    }
    */
    // Everyone will have an original (i.e., no dangling resubs!)
    $files = glob('rubrics/hw??Rubric.json');
    $out = array();
    foreach ($files as $pName) {
        // get the number
        $num = (int) substr($pName, 10, 2);
        // look for resub
        $hasResub = count(glob(sprintf('rubrics/hw%02dRubric_resub.json', $num))) === 1;
        $out[] = array(
            "number" => $num,
            "hasResubmission" => $hasResub,
        );
    }
    return $out;
}

function getHomework($num) {
    // This is for a single homework
    // Output Format:
    /*
    {
        number: number,
        hasResubmission: boolean,
        problems: {
            name: string,
            testCases: {
                inputs: string[],
                outputs: string[],
            }[],
        }[],
    }
    */
    // look for this number
    $files = glob(sprintf('rubrics/hw%02dRubric*.json', $num));
    if (count($files) === 0) {
        return null;
    }
    // read in the file
    $json = json_decode(file_get_contents(sprintf('rubrics/hw%02dRubric.json', $num)), true);
    // correctly populate data
    $out = array(
        "number" => $num,
        "hasResubmission" => count($files) === 2,
        "problems" => [],
    );
    foreach ($json as $problem) {
        $p = array(
            "name" => $problem['name'],
            "testCases" => [],
        );
        foreach ($problem['testCases'] as $t) {
            $p['testCases'][] = array(
                "inputs" => $t['inputs'],
                "outputs" => $t['outputs'],
            );
        }
        $out['problems'][] = $p;
    }
    return $out;
}
?>