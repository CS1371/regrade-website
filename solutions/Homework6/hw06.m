%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Name         : <your name>
% T-square ID  : <your t-square ID. Example: gburdell3>
% GT Email     : <your GT email address>
% Homework     : <homework assignment number/original or resubmission>
% Course       : CS1371
% Section      : <Your Section>
% Collaboration: <place here one of the following:
%                 "I worked on the homework assignment alone, using
%                  only course materials."
%                 OR
%                 "I worked on this homework with <give the names of the
%                  people you worked with>, used solutions or partial
%                  solutions provided by <name the people or other
%                  sources>, and referred to <cite any texts, web sites, or
%                  other materials not provided as course materials for CS
%                  1371.>"
%
% Files to submit:
%	ABCs_conditionals.m
%	findDateLocation.m
%	hw06.m
%	loveMeTinder.m
%	poker.m
%	starCrossed.m
%
% Instructions:
%   1) Follow the directions for each problem very carefully or you will
%   lose points.
%   2) Make sure you name functions exactly as described in the problems or
%   you will not receive credit.
%   3) Read the announcements! Any clarifications and/or updates will be
%   announced on T-Square. Check the T-Square announcements at least once
%   a day.
%   4) You should not use any of the following functions in any file that 
%   you submit to T-Square:
%       a) clear
%       b) clc
%       c) solve
%       d) input
%       e) disp
%       f) close all
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%==========================================================================
%% PART 1.  ABC Problems
%--------------------------------------------------------------------------
%
% Part of this homework is an m-file called "ABCs_conditionals.m".
% Open this file in MATLAB and complete it
% according to the directions contained within. You can test your answers with
% the test file listed below.
%
% Files to Complete: 
%	ABCs_conditionals.m

%
% ABCs File Testing:
%	ABCs_hw06_pretest.p
%
%==========================================================================
%% PART 2. Drill Problems
%--------------------------------------------------------------------------
%
% Included with this homework is a file entitled "HW06_DrillProblems.pdf",
% containing instructions for 4 drill problems that cover the
% following topic:
%
%	Conditionals
%
% Follow the directions carefully to write code to complete the drill
% problems as described. Make sure file names as well as function headers
% are written exactly as described in the problem text. If your function
% headers are not written as specified, you will recieve an automatic
% zero for that problem.
%
%==========================================================================
%% PART 3. Testing Your Code
%--------------------------------------------------------------------------
%
% You may use the following test cases for each problem to test your code.
% The function call with the test-inputs is shown in the first line of each
% test case, and the correct outputs are displayed in subsequent lines.
%
%% Function Name: findDateLocation
%
% Test Cases:
% [loc1] = findDateLocation('Wendy''s', 'McDonald''s', [1 2.5 4; 8.5 7.5 9], ['-';'+'], [10; 9.5])
% 	loc1 => McDonald's
% 
% [loc2] = findDateLocation('Georgia Aquarium', 'World of Coca-Cola', [10 8 0 9 0 9.2; 8 8 8 8.5 8 8.2], ['+';'+'], [8; 9])
% 	loc2 => Georgia Aquarium
% 
% [loc3] = findDateLocation('Paris', 'Rome', [10 10 10 0 9.2 0 1 3 0 7.1 7.2 0 0 0 7.2 10; 9.2 10 9.87 0 9.2 1.6 0 0 0 7.8 8.2 0 0 1.4 6.5 10], ['-';'-'], [9.8; 9.9])
% 	loc3 => Rome
%
%--------------------------------------------------------------------------------
%% Function Name: loveMeTinder
%
% Test Cases:
% [swipe1] = loveMeTinder([22,3], 'Harrison,21,16,UCLA,family picture,Cats are better than dogs')
% 	swipe1 => Swipe left on Harrison's picture
% 
% [swipe2] = loveMeTinder([25,15], 'Samantha,20,7,Brandeis,no picture,"If you want something done, ask a woman"')
% 	swipe2 => Swipe right on Samantha's picture
% 
% [swipe3] = loveMeTinder([30,2], 'Daniel,32,5,UAB,selfie,CS1371 is the best class ever')
% 	swipe3 => Swipe left on Daniel's picture
% 
% [swipe4] = loveMeTinder([19,20], 'Adam,23,15,Georgia Tech,selfie,"Professional MATLAB"')
% 	swipe4 => Super Like Adam's picture
%
%--------------------------------------------------------------------------------
%% Function Name: starCrossed
%
% Setup:
%	load student.mat
%
% Test Cases:
% [out1] = starCrossed(bday1, bday2, log)
% 	out1 => Your stars are crossed...a Aquarius and a Pisces can never be together.
% 
% [out2] = starCrossed(bday3, bday4, log)
% 	out2 => Your stars are crossed...a Libra and a Capricorn can never be together.
% 
% [out3] = starCrossed(bday5, bday6, log)
% 	out3 => A Virgo and a Gemini? Your stars are aligned! You are destined to be together.
%
%--------------------------------------------------------------------------------
%% Function Name: poker
%
% Setup:
%	load pokerCases.mat
%
% Test Cases:
% [winner1] = poker(cards1)
% 	winner1 => Player 3 won with a Three of a Kind.
% 
% [winner2] = poker(cards2)
% 	winner2 => Player 5 won with a Straight.
% 
% [winner3] = poker(cards3)
% 	winner3 => Thank you for your donation to Hope and Zell Miller.
%
