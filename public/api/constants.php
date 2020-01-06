<?php
#################################################################
# WARNING - READ ME                                             #
# -----------------                                             #
# Before you make any changes to this file,                     #
# run the following command (only needs                         #
# to be done once for the local repository):                    #
#                                                               #
#   git update-index --skip-worktree public/api/constants.php   #
#                                                               #
# This will prevent git from pushing your                       #
# local changes, containing any secret keys,                    #
# to our remote repository.                                     #
#################################################################

// Comment this for the live server
$isLocalhost = true;
// Uncomment this for the live server
//$isLocalhost = false;

$canvasToken = <TOKEN HERE>;
$trelloToken = <TOKEN HERE>;
$trelloKey = <KEY HERE>;
$trelloBoard = <BOARD ID>;
$courseID = <COURSE ID AS NUMBER>;
$teacherPath = "/httpdocs/TAIndex/teachers.json";


?>
