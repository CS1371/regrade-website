<!DOCTYPE HTML>

<html>
    <head>
        <title>CS 1371 Regrade Request</title>
        <link rel="shortcut icon" href="images/site_Icon.ico">
        <meta charset="utf-8" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700,700italic,100,400italic' rel='stylesheet' type='text/css'>        
        <link href='https://fonts.googleapis.com/css?family=Qwigley' rel='stylesheet' type='text/css'> 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script src="./js/didYouMean_beta.js"></script>

    </head>

    <body>

        <div id="header">
            <a href="." id="logoWrap">
                <div id="siteLogo"></div>
                <div id="siteTitle" class="">CS 1371 Regrade Requests</div>
            </a>
            <a href="./feedback.html" target="_blank" id="feedbackLink">Feedback?</a>
            <div id="headerPageTitle" class="pageTitle">Please select a homework</div>
        </div>
        <div id="pushHeader"></div>

        <div id="pageErrors">
            <div id="pageErrorTitle">Oops! There are some errors on this page</div>
            <div id="pageErrorSubtitle">Please fix the following errors before continuing:</div>
            <ul id="errorsList"></ul>
        </div>
        <div id="mainPageTitle" class="pageTitle activeTitle">Please select a homework</div>

        <div id="pageWrap">
            <div id="firstPageWrap" class="innerPageWrap">
                <div id="hiddenRowWrap"></div>
                <div id="hwRowWrap">
                    <div class="hwRow">
                        <div class="hwNum">1</div>
                        <div class="hwName">Basics</div>
                        <div class="loadingGif"></div>
                    </div>
                    <div class="hwRow">
                        <div class="hwNum">2</div>
                        <div class="hwName">Functions</div>
                        <div class="loadingGif"></div>
                    </div>
                    <div class="hwRow">
                        <div class="hwNum">3</div>
                        <div class="hwName">Vectors / Strings</div>
                        <div class="loadingGif"></div>
                    </div>
                    <div class="hwRow">
                        <div class="hwNum">4</div>
                        <div class="hwName">Logicals</div>
                        <div class="loadingGif"></div>
                    </div>
                    <div class="hwRow">
                        <div class="hwNum">5</div>
                        <div class="hwName">Arrays / Masks</div>
                        <div class="loadingGif"></div>
                    </div>
                    <div class="hwRow">
                        <div class="hwNum">6</div>
                        <div class="hwName">Conditionals</div>
                        <div class="loadingGif"></div>
                    </div>
                    <div class="hwRow">
                        <div class="hwNum">7</div>
                        <div class="hwName">Iteration</div>
                        <div class="loadingGif"></div>
                    </div>
                    <div class="hwRow">
                        <div class="hwNum">8</div>
                        <div class="hwName">Low Level File I/O</div>
                        <div class="loadingGif"></div>
                    </div>
                    <div class="hwRow">
                        <div class="hwNum">9</div>
                        <div class="hwName">High Level File I/O</div>
                        <div class="loadingGif"></div>
                    </div>
                    <div class="hwRow">
                        <div class="hwNum">10</div>
                        <div class="hwName">Structures</div>
                        <div class="loadingGif"></div>
                    </div>
                    <div class="hwRow">
                        <div class="hwNum">11</div>
                        <div class="hwName">Numerical Methods</div>
                        <div class="loadingGif"></div>
                    </div>
                    <div class="hwRow">
                        <div class="hwNum">12</div>
                        <div class="hwName">Recursion</div>
                        <div class="loadingGif"></div>
                    </div>
                    <div class="hwRow">
                        <div class="hwNum">13</div>
                        <div class="hwName">Images</div>
                        <div class="loadingGif"></div>
                    </div>
                    <div class="hwRow">
                        <div class="hwNum">14</div>
                        <div class="hwName">Project</div>
                        <div class="loadingGif"></div>
                    </div>
                </div>
                <div id="formWrap" class="hideForm">
                    <div id="hwTypeWrap">
                        <div class="hwTypeButton selectedHWType" id="ogSub">Original Submission</div>
                        <div class="hwTypeButton notSelectedHWType" id="resub">Resubmission</div>
                    </div>
                    <div id="hwProblemsWrap">
                    </div>
                    <div id="hwProblemDetailsWrap">
                    </div>
                    <div id="actionButtons">
                        <div class="actionButton" id="cancelButton">Cancel</div>
                        <div class="actionButton" id="submitButton">Next</div>
                    </div>
                </div>
            </div>
            <div id="secondPageWrap" class="innerPageWrap">
                <div id="nameFormWrap">
                    <div class="nameFormTitle">Full Name</div>
                    <div class="inputWrap">
                        <input type="text" class="nameFormInput" name="fullName"/>
                        <div class="inputStatus acceptedInput"></div>
                        <div class="inputStatus rejectInput"></div>
                    </div>
                    <div class="nameFormTitle">GT Username</div>
                    <div class="inputWrap">
                        <input type="text" class="nameFormInput" name="gtusername"/>
                        <div class="inputStatus acceptedInput"></div>
                        <div class="inputStatus rejectInput"></div>
                        <div class="showResults" id="searchNames">
                            <div id="resultTitle">Please select your name:</div>
                        </div>
                    </div>
                    <div class="nameFormTitle hasHelpText">Assigned Section</div>
                    <div class="nameFormHelpText">Don't know your section? Check out the <a id="TAIndexLink" target="_blank" href="http://www.cs1371.gatech.edu/TAIndex/">TA Index</a></div>
                    <div class="inputWrap">
                        <input type="text" class="nameFormInput" name="section"/>
                        <div class="inputStatus acceptedInput"></div>
                        <div class="inputStatus rejectInput"></div>
                        <div class="showResults" id="TANames">
                            <div class="TAName"></div>
                            <div class="TAName"></div>
                        </div>
                    </div>
                    <div id="nameActionButtons">
                        <div class="actionButton" id="nameCancelButton">Back</div>
                        <div class="actionButton" id="nameSubmitButton">Next</div>
                    </div>
                </div>
            </div>
            <div id='thirdPageWrap' class="innerPageWrap">
                <div class="certifySection clearfix">
                    <div class="squaredFour">
                        <input type="checkbox" value="None" id="squaredFour" name="check1" />
                        <label for="squaredFour"></label>
                    </div>
                    <div class="certifyLabel">I understand that my entire assignment may be regraded</div>
                </div>
                <div class="certifySection clearfix">
                    <div class="squaredFour">
                        <input type="checkbox" value="None" id="squaredFour2" name="check2" />
                        <label for="squaredFour2"></label>
                    </div>
                    <div class="certifyLabel">I certify that I have gone through all necessary steps, including downloading the feedback.html file and checking my outputs against the outputs of the solution code, to ensure I am submitting a valid regrade.</div>
                </div>
                <div class="certifySection clearfix">
                    <div class="squaredFour">
                        <input type="checkbox" value="None" id="squaredFour3" name="check3" />
                        <label for="squaredFour3"></label>
                    </div>
                    <div class="certifyLabel">I understand regrades submitted after the regrade period will be rejected.</div>
                </div>
                <div class="certifySection clearfix">
                    <div class="squaredFour">
                        <input type="checkbox" value="None" id="squaredFour4" name="check4" />
                        <label for="squaredFour4"></label>
                    </div>
                    <div class="certifyLabel">I did not violate the Georgia Tech Honor Code.</div>
                </div>
                <div id="digitalSignatureWrap">
                    <div id="digitalSignatureLabel">
                        Please sign below (Enter your full name)
                    </div>
                    <input type="text" id="digitalSignature"/>
                </div>
                <div id="certifyActionButtons">
                    <div class="actionButton" id="certifyCancelButton">Back</div>
                    <div class="actionButton" id="certifySubmitButton">Review</div>
                </div>
            </div>
            <div id='fourthPageWrap' class="innerPageWrap">
                <div class="reviewSection">
                    <div class="reviewSectionTitle">Personal Info</div>
                    <div class="reviewSectionData">
                        <div class="reviewSectionPair">
                            <div class="reviewSectionKey">Name:</div>
                            <div class="reviewSectionValue" id="reviewName"></div>
                        </div>
                        <div class="reviewSectionPair">
                            <div class="reviewSectionKey">GT Username:</div>
                            <div class="reviewSectionValue" id="reviewUsername"></div>
                        </div>
                        <div class="reviewSectionPair">
                            <div class="reviewSectionKey">Section:</div>
                            <div class="reviewSectionValue" id="reviewSection"></div>
                        </div>
                        <div class="reviewSectionPair">
                            <div class="reviewSectionKey">TAs:</div>
                            <div class="reviewSectionValue" id="reviewTAs"></div>
                        </div>
                    </div>
                </div>
                <div class="reviewSection" id="problemReviewSection">
                    <div class="reviewSectionTitle">Regrade Info</div>
                    <div class="reviewSectionData">
                        <div class="reviewSectionPair">
                            <div class="reviewSectionKey">Homework:</div>
                            <div class="reviewSectionValue" id="reviewHomework"></div>
                        </div>
                        <div class="reviewSectionPair">
                            <div class="reviewSectionKey">Type:</div>
                            <div class="reviewSectionValue" id="reviewHomeworkType"></div>
                        </div>
                    </div>
                </div>
                <div id="certifyActionButtons">
                    <div class="actionButton" id="reviewCancelButton">Back</div>
                    <div class="actionButton" id="reviewSubmitButton">Submit</div>
                </div>
            </div>
            <div id="errorPageWrap">
                <div id='errorPageTitle'>Oops! Looks like there has been an error.</div>
                <div class='statusPageDetails' id="errorPageDetails"></div>
                <div class="messagePageActionButtons">
                    <div class="reloadbutton">Go Back</div>
                </div>
            </div>
            <div id="successPageWrap">
                <div id="successPageTitle">Thank You!</div>
                <div class='statusPageDetails' id="successPageDetails">Your regrade request was successfully submitted. Your TA will follow-up with you once they have processed it. If you do not hear back from your TA within two weeks, please contact them individually. Please do not submit another request on this form for the same homework unless instructed to do so by your TA.</div>
                <div class='statusPageDetails' id="successPageDetailsEmail">A confirmation email will be sent to <span id="successStudentEmail"></span> shortly. Please retain that email for your records until your regrade request has been fully processed. If you do not receive this email within a few hours, please contact Ryan Williams at <a href="mailto:rwilliams306@gatech.edu" id="emailToLink">rwilliams306@gatech.edu</a>.</div>
                <div class="messagePageActionButtons">
                    <div class="reloadbutton">Start Over</div>
                    <a href="./feedback.html" class="waldoButton">Where's Waldo?</a>
                </div>
            </div>
        </div>
        <!--<div id="footer">

</div>-->

        <script>
            // Disable cacheing for all ajax calls
            // Right now the only ajax we calls we make are for the rubric and for processing the regrade
            // So nothing needs to be cached
            // Might need to be changed in the future
            $(document).ready(function() {
                $.ajaxSetup({ cache: false });
            });

            var json;
            var homeworkProblems = new Map();
            var resubHomeworkProblems = new Map();
            var topVal;
            var sections;
            var sectionList;
            var nameMap;
            //var allNames = [];
            var usernames;
            var rubricProcessed = false;
            var selectedHomework;
            var folderName;

            function parseTAs(){
                return $.getJSON('./json/sections.json',function(jsonResp){
                    sections = jsonResp;
                    sectionList = Object.keys(jsonResp);
                });
            }

            function parseNames(){
                return $.getJSON('./json/names.json',function(jsonResp){
                    nameMap = jsonResp;
                    usernames = Object.keys(nameMap);
                    /*for(var i = 0;i<usernames.length;i++){
                        allNames.push(nameMap[usernames[i]].name);
                    }*/
                });
            }

            function parseRubric(hwNum){
                var response = $.getJSON('./rubrics/hw' + hwNum + 'Rubric.json',function(jsonResp){
                    json = jsonResp;
                });

                var resub_respones = $.getJSON('./rubrics/hw' + hwNum + 'Rubric_resub.json',function(resp){
                    for(rubricFunction in resp){
                        var filename = json[rubricFunction].funcName;
                        var testCaseStr = buildTestCaseHTMLString(json[rubricFunction].tests);
                        resubHomeworkProblems[filename] = testCaseStr;
                    }
                });

                resub_respones.fail(function(e){
                    $("#resub").html("Resubmission Currently Unavailable").addClass("resubInactive");
                });

                var passed = true;

                response.fail(function(e){
                    console.log("failed");
                    console.log(e);
                    passed = false;
                    showErrorPage("Regrades for that assignment are not available. If the assignment was just released please wait a few days for our system to be updated. Otherwise, please contact your TA.");
                });

                response.always(function(json){
                    rubricProcessed = true;
                    if(passed) {
                        for(rubricFunction in json){
                            var filename = json[rubricFunction].funcName;
                            var testCaseStr = buildTestCaseHTMLString(json[rubricFunction].tests);
                            homeworkProblems[filename] = testCaseStr;
                            $('#hwProblemsWrap').append('<div class="hwProblem">' + filename + '</div>');
                        }
                        processSelectedHomework();
                    }
                });
            }

            function buildTestCaseHTMLString(testCases){
                if(typeof testCases == 'undefined'){
                    return;
                }
                if(!(testCases.constructor === Array)){
                    testCases = [testCases];
                }
                var testCaseStr = '';
                for(var i = 0;i<testCases.length; i++){
                    if(testCases[i].indexOf('load')>-1){
                        testCases[i] = testCases[i].substr(testCases[i].indexOf(';')+1).trim();
                    }
                    testCaseStr += '<div class="testCase">' +
                        '<div class="testCaseText">' + testCases[i] + '</div>' + 
                        '<div class="testCaseStatus testCaseSelected"></div>' + 
                        '<div class="testCaseStatusHover testCaseSelected"></div>' +
                        '</div>';
                }
                return testCaseStr;
            }

            function changePageTitle(newTitle,delay){
                if(delay===undefined){
                    delay = 700;
                }
                $('.pageTitle').animate({'opacity':'0'},400,function(e){
                    $(this).html(newTitle);
                    $(".activeTitle").animate({'opacity':'1'},delay);
                });
            }

            function processSelectedHomework(){

                $('#formWrap').removeClass('hideForm');
                changePageTitle('Please select problems for regrade',750);

                var d1 = $('.hwRow:first-child').offset().top;
                var d2 = $(selectedHomework).offset().top;

                $('.hwRow:odd').not(selectedHomework).css({'right':'-100vw'});
                $('.hwRow:even').not(selectedHomework).css({'left':'-100vw'});

                var newTop = d1;
                $(selectedHomework).css({'top':(d1-d2).toString() + 'px'});

                d1 = $(document).width() / 2;
                d2 = $(selectedHomework).width() / 2;
                d3 = $(selectedHomework).offset().left;
                if($(selectedHomework).is(':nth-child(odd)')){
                    $(selectedHomework).css({'left':((d1-d2)-d3).toString() + 'px'});
                }else{
                    $(selectedHomework).css({'right':(((d1-d2)-d3)*-1).toString() + 'px'});
                }

                $('#hiddenRowWrap').html($(selectedHomework).clone().removeAttr( 'style' ));

                d1 = $('#formWrap').offset().top;
                d2 = $('#hwRowWrap').position().top;
                $('#formWrap').animate({'top':'-' + (d1 - newTop - 64).toString() + 'px'},700);
                setTimeout(function(){
                    $('#hwRowWrap').hide().remove();
                    $('#hiddenRowWrap').show();
                    $('#formWrap').removeAttr( 'style' );
                }, 750);
                setTimeout(function(){
                    $(".loadingGif").removeClass('showLoadingGif');
                }, 850);
            }

            $('.hwRow').on('click',function(e){

                $(this).children('.loadingGif').addClass('showLoadingGif');

                $(".hwRow").addClass('hwRowNoSelect');

                var hwNum = $(this).children('.hwNum').html().toString();
                hwNum = hwNum.length == 1 ? '0' + hwNum : hwNum;
                parseRubric(hwNum);
                selectedHomework = this;
            });

            $('.hwTypeButton').on('click',function(e){
                if($(this).hasClass('notSelectedHWType')){
                    $(this).removeClass('notSelectedHWType').addClass('selectedHWType');
                    $('.hwTypeButton').not($(this)).addClass('notSelectedHWType').removeClass('selectedHWType');
                }
                if($(this).is("#resub")){

                }else{

                }
            });

            $("#hwProblemsWrap").on('click','.hwProblem',function(e){
                if($(this).hasClass('selectedHWProblem')){
                    $(this).removeClass('selectedHWProblem');
                    var problemName = $(this).html();
                    $('.hwProblemRegrade').each(function(index,value){
                        if(problemName === $(value).children('.hwProblemName').html()){
                            $(value).hide('slow', function(){ $(value).remove(); });
                        }
                    });
                }else{
                    $(this).addClass('selectedHWProblem');
                    buildRegradeSection($(this).html());
                }
            });

            function buildRegradeSection(hwName){
                var html = '<div class="hwProblemRegrade">' +
                    '<div class="removeProblemButton">&#x2718;</div>' + 
                    '<div class="hwProblemName">' + hwName + '</div>' + 
                    '<div class="inputTitle">Which test cases should be regraded?</div>' + 
                    '<div class="testCaseWrap">' + 
                    '<div class="testCaseSelect selectedTestCaseChoice">All Test Cases</div>' + 
                    '<div class="testCaseSelect">Specific Test Cases</div>' + 
                    '<div class="specificTestCasesWrap">' + 
                    homeworkProblems[hwName] +
                    '</div>' + 
                    '</div>' + 
                    '<div class="hwRegradeInput">' + 
                    '<div class="inputTitle">Justification / Explanation for Regrade</div>' + 
                    '<div class="textAreaWrap"><div class="lengthError">Max characters: 750</div><textarea class="justification"></textarea></div>' + 
                    '</div>' + 
                    '</div>';
                var elem = $.parseHTML(html)
                $(elem).appendTo($('#hwProblemDetailsWrap')).show('slow');
                //$('#hwProblemDetailsWrap').append(html).show('slow');
            }

            $('#hwProblemDetailsWrap').on('click','.testCaseSelect',function(e){
                if(!$(this).hasClass('selectedTestCaseChoice')){
                    $(this).toggleClass('selectedTestCaseChoice');
                    $(this).siblings('.testCaseSelect').toggleClass('selectedTestCaseChoice');
                    if($(this).html()==="All Test Cases"){
                        $(this).siblings('.specificTestCasesWrap').removeClass('showTestCases');
                    }else{
                        $(this).siblings('.specificTestCasesWrap').addClass('showTestCases');
                    }
                }
            });

            function hideErrors(){
                $('#pageErrors').hide().removeClass('showPageErrors')
                setTimeout(function(){
                    $('#pageErrors').show();
                },800);
                $('#errorsList').html('');
            }

            function showErrors(errorStr,pageWrap){
                if(!$('#pageErrors').hasClass('showPageErrors')){
                    $('#pageErrors').addClass('showPageErrors');
                    $('#errorsList').append(errorStr);
                    $(pageWrap).animate({top: '+=' + $('#pageErrors').get(0).scrollHeight + 'px'},'fast',function(){
                        if($(this).offset().top + $(this).height()>window.innerHeight){
                            $('#pageWrap').height($('#pageWrap').height() + ($(this).offset().top + $(this).height()-window.innerHeight));
                        }
                    });
                } else {
                    $('#errorsList').html('');
                    $('#errorsList').append(errorStr);
                }
                $("html, body").animate({ scrollTop: 0 }, "fast");
            }

            function validateProblems(){
                errorStr = '';
                if($('.selectedHWProblem').length == 0){
                    errorStr += ('<li>Please select at least one homework problem to regrade</li>');
                }else{
                    $('.hwProblemRegrade').each(function(i,val){
                        console.log($(this).find('.testCaseSelect:contains("Specify Test Cases")'));
                        if($(this).find('.testCaseSelect:contains("Specific Test Cases")').hasClass('selectedTestCaseChoice')){
                            if($(this).find('.showTestCaseStatus').length == 0){
                                errorStr += ('<li>Please select at least one test case for ' + $(this).children('.hwProblemName').html() + '</li>');
                            }
                        }

                        if($(this).find('.justification').val().length < 20){
                            errorStr += ('<li>Please provide more justification for ' + $(this).children('.hwProblemName').html() + '</li>');
                        }
                    });
                }

                if(errorStr.length > 0){
                    showErrors(errorStr,"#notAnId");
                }
                return errorStr.length==0;
            }

            $('#submitButton').on('click',function(e){

                var valid = validateProblems();

                if(valid){

                    //window.history.pushState('forward', null, './#personalInfo');

                    hideErrors();

                    $("html, body").animate({ scrollTop: 0 }, "slow");

                    changePageTitle('Please enter your personal info below',700);

                    topVal = $('#firstPageWrap')[0].offsetTop.toString() + 'px';

                    $('#secondPageWrap').show().css('top',topVal);
                    $('#firstPageWrap').animate({'right':'100vw'},1000,function(){
                        $(this).hide();
                    });

                    $("#secondPageWrap").animate({
                        right: $("#secondPageWrap").parent().width() / 2 - $("#secondPageWrap").width() / 2
                    }, 1000);
                }


            });

            $('#cancelButton').on('click',function(e){
                location.reload();
            });

            $('#nameCancelButton').on('click',function(e){
                hideErrors();
                $("html, body").animate({ scrollTop: 0 }, "slow");
                $('#pageWrap').height('auto');

                changePageTitle('Please select problems for regrade',700);

                $('#firstPageWrap').show().animate({'right':'0px'},1000);
                $("#secondPageWrap").animate({
                    right: '-100vw'
                }, 1000,function(){
                    $(this).hide();
                });
            });

            function validatePersonalInfo(){
                errorStr = '';

                $('.acceptedInput').each(function(i,val){
                    if(!$(this).hasClass('showInputStatus')){
                        if(i==0){
                            errorStr += "<li>Invalid name entered. Please select a name from the list.</li>";
                        }else if(i==1){
                            errorStr += "<li>Invalid GT username entered</li>";
                        }else if(i==2){
                            errorStr += "<li>Invalid section entered</li>";
                        }
                    }
                });

                if(errorStr.length > 0){
                    showErrors(errorStr,"#secondPageWrap");
                }
                return errorStr.length==0;
            }

            $('#nameSubmitButton').on('click',function(e){

                var valid = validatePersonalInfo();

                if(valid){

                    //window.history.pushState('forward', null, './#certify');

                    hideErrors();
                    $("html, body").animate({ scrollTop: 0 }, "slow");

                    changePageTitle('Please acknowledge all sections',700);

                    $('#thirdPageWrap').show().css('top',topVal);
                    $('#secondPageWrap').animate({'right':'100vw'},1000,function(){
                        $(this).hide();
                    });

                    $("#thirdPageWrap").animate({
                        right: $("#thirdPageWrap").parent().width() / 2 - $("#thirdPageWrap").width() / 2
                    }, 1000);
                }
            });

            $('#certifyCancelButton').on('click',function(e){
                hideErrors();
                $("html, body").animate({ scrollTop: 0 }, "slow");

                changePageTitle('Please enter your personal info below',700);

                $('#secondPageWrap').show().css('top',topVal);

                $("#secondPageWrap").show().animate({
                    right: $("#secondPageWrap").parent().width() / 2 - $("#secondPageWrap").width() / 2
                }, 1000);

                $("#thirdPageWrap").animate({
                    right: '-100vw'
                }, 1000, function(){
                    $(this).hide();
                });
            });

            function validateCertification(){
                errorStr = '';

                $('input[type="checkbox"]').trigger('change');

                $('input[type="checkbox"]').each(function(i,val){
                    if(!$(this).is(":checked")){
                        errorStr += '<li>You must acknowledge all statements to continue';
                        return false;
                    }
                });

                if($('#digitalSignature').val().length < 5){
                    errorStr += "<li>Please sign the line at the bottom to continue</li>";
                }

                if(errorStr.length > 0){
                    showErrors(errorStr,"#thirdPageWrap");
                }
                return errorStr.length==0;
            }

            function buildReviewProblemSection(problem,testCaseStr,justification){
                var html = '<div class="reviewSectionData problemReview">' + 
                    '<div class="reviewSectionPair">' + 
                    '<div class="reviewSectionKey">Problem:</div>' + 
                    '<div class="reviewSectionValue regradeProblemName">' + problem + '</div>' + 
                    '</div>' + 
                    '<div class="reviewSectionPair">' + 
                    ' <div class="reviewSectionKey">Test Cases:</div>' + 
                    '<div class="reviewSectionValue regradeTestCases">' + testCaseStr + '</div>' + 
                    '</div>' + 
                    '<div class="reviewSectionPair">' + 
                    '<div class="reviewSectionKey">Justification:</div>' + 
                    '<div class="reviewSectionValue regradeJustification">' + justification + '</div>' + 
                    '</div>' + 
                    '</div>';
                return html;
            }

            function fillReviewData(){
                $('#reviewName').html($('input[name="fullName"]').val());
                $('#reviewUsername').html($('input[name="gtusername"]').val());
                $('#reviewSection').html($('input[name="section"]').val());
                $('#reviewTAs').html(sections[$('input[name="section"]').val().toUpperCase()].names.join(', '));

                $('#reviewHomework').html($('#hiddenRowWrap').find('.hwNum').html() + ' - ' +           
                                          $('#hiddenRowWrap').find('.hwName').html());

                $("#reviewHomeworkType").html(($("#ogSub").hasClass('selectedHWType')?"Original Submission":"Resubmission"));

                $('.problemReview').remove();

                $('.hwProblemRegrade').each(function(i,val){
                    var problemName = $(this).children('.hwProblemName').html();
                    var testCaseStr = '';
                    if($(this).find('.testCaseSelect:contains("Specific Test Cases")').hasClass('selectedTestCaseChoice')){
                        $(this).find('.testCase').each(function(i,val){
                            if($(this).hasClass('testCaseSelectedBackground')){
                                testCaseStr += ', ' + (i+1);
                            }
                        });
                        testCaseStr = testCaseStr.substr(1);
                    } else {
                        testCaseStr = 'All Test Cases';
                    }
                    var justification = $(this).find('.justification').val();

                    html = buildReviewProblemSection(problemName,testCaseStr,justification);

                    $('#problemReviewSection').append(html);


                });
            }

            $('#certifySubmitButton').on('click',function(e){

                var valid = validateCertification();

                if(valid){

                    //window.history.pushState('forward', null, './#review');

                    hideErrors();
                    $("html, body").animate({ scrollTop: 0 }, "slow");

                    changePageTitle('Please review all sections before submitting',700);

                    fillReviewData();

                    $('#fourthPageWrap').show().css('top',topVal);

                    if($('#fourthPageWrap').offset().top + $('#fourthPageWrap').height()>window.innerHeight){
                        $('#pageWrap').height($('#pageWrap').height() + ($('#fourthPageWrap').offset().top + $('#fourthPageWrap').height()-window.innerHeight));
                    }

                    $('#thirdPageWrap').animate({'right':'100vw'},1000,function(){
                        $(this).hide();
                    });

                    $("#fourthPageWrap").animate({
                        right: $("#fourthPageWrap").parent().width() / 2 - $("#fourthPageWrap").width() / 2
                    }, 1000);
                }
            });

            $('#reviewCancelButton').on('click',function(e){
                hideErrors();
                $("html, body").animate({ scrollTop: 0 }, "slow");

                changePageTitle('Please acknowledge all sections to continue',700);

                $('#thirdPageWrap').show().css('top',topVal);

                $("#thirdPageWrap").show().animate({
                    right: $("#thirdPageWrap").parent().width() / 2 - $("#thirdPageWrap").width() / 2
                }, 1000);

                $("#fourthPageWrap").animate({
                    right: '-100vw'
                }, 1000, function(){
                    $(this).hide();
                });
            });

            function buildTAJson(){
                var TANames = sections[$('input[name="section"]').val().toUpperCase()].names;
                var TAEmails = sections[$('input[name="section"]').val().toUpperCase()].emails;
                var TAJson = [];
                for(var i = 0;i<TANames.length;i++){
                    var TABlock = {
                        "name" : TANames[i],
                        "email" : TAEmails[i]
                    };
                    TAJson.push(TABlock);
                }
                return TAJson;
            }

            function buildRegradeJson(){
                var regradeJson = [];
                $('.problemReview').each(function(ind,val){
                    var regradeBlock = {
                        "problem_name" : $(this).find('.regradeProblemName').html(),
                        "test_cases" : $(this).find('.regradeTestCases').html(),
                        "justification" : $(this).find('.regradeJustification').html(),
                    }
                    regradeJson.push(regradeBlock);
                });
                return regradeJson;
            }

            $('#reviewSubmitButton').on('click',function(e){

                //TODO: VALIDATE

                var valid = true;

                if(valid){

                    $(this).html('').addClass('showLoadingButton');
                    var regradeData = {
                        "student_name":$('#reviewName').html(),
                        "student_username":$('#reviewUsername').html(),
                        "student_section":$('#reviewSection').html(),
                        "folder_name":folderName,
                        "TAs": buildTAJson(),
                        "homework_num":$("#reviewHomework").html(),
                        "homework_type":$("#reviewHomeworkType").html(),
                        "regrade_problems":buildRegradeJson()
                    };

                    regradeData = {myData:regradeData};

                    $.ajax({
                        url: './php/processRegrade.php',
                        data: regradeData,
                        type: 'POST',
                        dataType:'json',
                        success: function(response){  
                            console.log(response);
                            if(response.type=="error"){
                                showErrorPage(response.text);
                            }else if(response.type=="success"){
                                showSuccessPage();
                            }
                        },
                        error: function(response){
                            showErrorPage("Something went wrong while submitting your regrade request. Please try submitting again or send an email to rwilliams306@gatech.edu and include the information you submitted on the form. Sorry for the inconvienence!");
                            console.log(response);
                        }
                    });


                }
            });

            function displayInputStatus(elem, valid){
                if(valid){
                    if(!$(elem).siblings('.acceptedInput').hasClass('showInputStatus')){
                        $(elem).siblings('.acceptedInput').addClass('showInputStatus')
                        $(elem).siblings('.rejectInput').removeClass('showInputStatus')
                    }
                }else{
                    if($(elem).val().length==0){
                        $(elem).siblings().removeClass('showInputStatus');
                    }else{
                        if(!$(elem).siblings('.rejectInput').hasClass('showInputStatus')){
                            $(elem).siblings('.rejectInput').addClass('showInputStatus')
                            $(elem).siblings('.acceptedInput').removeClass('showInputStatus')
                        } 
                    }
                }
            }

            $('#searchNames').on('click','.result',function(e){
                $('.selectedResult').removeClass('selectedResult');
                $(this).addClass('selectedResult');
                displayInputStatus($('input[name="gtusername"]'),true);
                $('input[name="gtusername"]').val($(this).html());
                //$('input[name="gtusername"]').val(nameMap[$(this).html()]['username']);
                //$('input[name="gtusername"]').trigger('input');
                folderName = nameMap[$(this).html()]['folder'];
            });

            $('input[name="fullName"]').on('input',function(e){
                var enteredText = $(this).val();
                if(enteredText.length > 4 && enteredText.indexOf(' ') != -1){
                    displayInputStatus(this,true);
                }else{
                    displayInputStatus(this,false);
                }
                
                /*var enteredText = $(this).val();
                displayInputStatus(this,false);
                $('.selectedResult').removeClass('selectedResult');
                if(enteredText.length > 5 && enteredText.length < 50 && enteredText.indexOf(' ') != -1){
                    var serachResults = didYouMean(enteredText,allNames);
                    $('#searchNames').addClass('showTANames');
                    $(".result").remove();
                    for(var i = 0;i<serachResults.length;i++){
                        $('#searchNames').append('<div class="result">' + serachResults[i] + '</div>');
                    }
                }else{
                    $('#searchNames').removeClass('showTANames');
                }*/
            });

            $('input[name="gtusername"]').on('input',function(e){
                var enteredText = $(this).val();
                displayInputStatus(this,false);
                $('.selectedResult').removeClass('selectedResult');
                if(enteredText.length > 2 && enteredText.length < 50){
                    var serachResults = didYouMean(enteredText,usernames);
                    $('#searchNames').addClass('showTANames');
                    $(".result").remove();
                    for(var i = 0;i<serachResults.length;i++){
                        $('#searchNames').append('<div class="result">' + serachResults[i] + '</div>');
                    }
                }else{
                    $('#searchNames').removeClass('showTANames');
                }
                
                
                /*var enteredText = $(this).val();
                var matching = /^[A-Za-z]+[0-9]+$/;
                if(matching.test(enteredText) && enteredText.length >= 4){
                    displayInputStatus(this,true);
                }else{
                    displayInputStatus(this,false);
                }*/
            });

            $('input[name="section"]').on('input',function(e){
                var enteredText = $(this).val();
                //var matching = /^[Aa]{1}0[1-6]{1}$|[BCbc]{1}0[1-6]{1}$|[Dd]{1}0[1-6]{1}$|HP|hp|1171/g;
                //if(matching.test(enteredText)){
                if($.inArray(enteredText,sectionList) >= 0){
                    displayInputStatus(this,true);

                    var TADivs = $('.TAName');

                    $(TADivs[0]).html(sections[enteredText.toUpperCase()].names[0]);
                    $(TADivs[1]).html(sections[enteredText.toUpperCase()].names[1]);

                    $('#TANames').addClass('showTANames');
                }else{
                    displayInputStatus(this,false);
                    $('#TANames').removeClass('showTANames');
                }
            });

            $('input[type="checkbox"]').on('change',function(e){
                if($(this).is(":checked")){
                    $(this).parent().siblings('.certifyLabel').addClass('greenText');
                }else{
                    $(this).parent().siblings('.certifyLabel').removeClass('greenText');
                }

            });

            $('#hwProblemDetailsWrap').on('click','.removeProblemButton',function(e){
                var homeworkName = $(this).siblings('.hwProblemName').html();
                $('.hwProblem:contains(' + homeworkName + ')').removeClass('selectedHWProblem');
                $(this).parent().hide('slow', function(){ $(this).remove(); });
            });

            $('#hwProblemDetailsWrap').on('input','.justification',function(e){
                if($(this).val().length > 750){
                    var lengthErrorDiv = $(this).siblings('.lengthError');
                    $(this).val($(this).val().substr(0,750));
                    $(lengthErrorDiv).finish();
                    jQuery.dequeue( this );
                    $(lengthErrorDiv).queue("fx", function() {
                        $(this).css('color','red');
                        jQuery.dequeue( this );
                    });
                    for(var i = 0;i<3;i++){
                        $(lengthErrorDiv).show().animate({'opacity':'0'},100,'linear').animate({'opacity':'1'},100,'linear');
                    }
                    $(lengthErrorDiv).queue("fx", function() {
                        $(this).css('color','black');
                        jQuery.dequeue( this );
                    });
                } else {
                    $(this).siblings('.lengthError').hide();
                }
            });

            $('#hwProblemDetailsWrap').on('click','.testCase',function(e){
                $(this).children('.testCaseStatus').toggleClass('showTestCaseStatus');
                $(this).children('.testCaseText').toggleClass('testCaseSelectedText');
                $(this).toggleClass('testCaseSelectedBackground');
            });

            function showErrorPage(errorDetails){
                hideErrors();
                $("html, body").animate({ scrollTop: 0 }, "slow");

                $("#errorPageDetails").html(errorDetails);

                $(".pageTitle").animate({
                    left: "-100vw"
                },1000);

                $('#errorPageWrap').show().css('top',topVal);

                if($('#errorPageWrap').offset().top + $('#errorPageWrap').height()>window.innerHeight){
                    $('#pageWrap').height($('#pageWrap').height() + ($('#errorPageWrap').offset().top + $('#errorPageWrap').height()-window.innerHeight));
                }

                $('.innerPageWrap').each(function(e){
                    $(this).animate({'right':'100vw'},1000,function(){
                        $(this).hide();
                    });
                });

                $("#errorPageWrap").animate({
                    right: $("#errorPageWrap").parent().width() / 2 - $("#errorPageWrap").width() / 2
                }, 1000);
            }

            function showSuccessPage(){
                hideErrors();
                $("html, body").animate({ scrollTop: 0 }, "slow");

                $(".pageTitle").animate({
                    left: "-100vw"
                },1000);

                $("#successStudentEmail").html($('#reviewUsername').html() + "@gatech.edu");

                $('#successPageWrap').show().css('top',topVal);

                if($('#successPageWrap').offset().top + $('#successPageWrap').height()>window.innerHeight){
                    $('#pageWrap').height($('#pageWrap').height() + ($('#successPageWrap').offset().top + $('#successPageWrap').height()-window.innerHeight));
                }

                $('.innerPageWrap').each(function(e){
                    $(this).animate({'right':'100vw'},1000,function(){
                        $(this).hide();
                    });
                });

                $("#successPageWrap").animate({
                    right: $("#successPageWrap").parent().width() / 2 - $("#successPageWrap").width() / 2
                }, 1000);
            }

            $(".reloadbutton").on('click',function(e){
                location.reload();
            });

            //$("#reviewSubmitButton").on('click',function(){
            //    $(this).addClass('loadingButton');
            //    $(this).html("<img style='width:80%;height:80%;position:absolute;top:0;right:0;' src='loading.gif'></img>");
            //});

            /*jQuery(document).ready(function($) {

                if (window.history && window.history.pushState) {

                    window.history.pushState('forward', null, './#selectHomework');

                    $(window).on('popstate', function() {
                        var state = window.location.href.substr(window.location.href.indexOf("#") + 1);
                        if(state==="selectHomework"){
                            location.reload();
                        }else if(state==="selectProblems"){
                            $('#nameCancelButton').click();
                        }else if(state==="personalInfo"){
                            $('#certifyCancelButton').click();
                        }else if(state==="certify"){
                            $('#reviewCancelButton').click();
                        }
                    });

                }
            });*/

            $(window).scroll(function(e){
                var headerTitle = $('#headerPageTitle').offset().top;
                var pageTitle = $("#mainPageTitle").offset().top;

                $(".pageTitle").stop(false,true);

                if(pageTitle < headerTitle && $("#mainPageTitle").hasClass('activeTitle')){
                    $("#mainPageTitle").removeClass('activeTitle').css({opacity:0});
                    $('#headerPageTitle').addClass('activeTitle').css({opacity:1});
                    $('#siteTitle').addClass('sitTitleHide');
                }else if(pageTitle > headerTitle && $('#headerPageTitle').hasClass('activeTitle')){
                    $("#mainPageTitle").addClass('activeTitle').css({opacity:1});
                    $('#headerPageTitle').removeClass('activeTitle').css({opacity:0});
                    $('#siteTitle').removeClass('sitTitleHide');
                }

                if(pageTitle < headerTitle+50 && !$('#siteTitle').hasClass('sitTitleHide')){
                    $('#siteTitle').addClass('sitTitleHide');
                }else if(pageTitle > headerTitle+50 && $('#siteTitle').hasClass('sitTitleHide')){
                    $('#siteTitle').removeClass('sitTitleHide');
                }
            });

            parseTAs();

            didYouMean.threshold = null;

            parseNames();
            
            <?php 
            
                if ("POST" == $_SERVER['REQUEST_METHOD'] && array_key_exists("hwNum",$_REQUEST)) {
                    $hw_num = intval($_REQUEST["hwNum"]);
                }else{
                    $hw_num = -1;
                }
            
            ?>
            
            var post_hw_num = <?php echo $hw_num;?>;
            if(post_hw_num > 0){
                $(".hwRow")[post_hw_num-1].click();
            }

        </script>
    </body>

</html>