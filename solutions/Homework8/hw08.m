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
%	ABCs_lowLevelFileIO.m
%	arr2text.m
%	asciiBurger.m
%	hw08.m
%	nationalTreasure.m
%	nationalTreasure_hard.m
%	tankTrials.m
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
% Part of this homework is an m-file called "ABCs_lowLevelFileIO.m".
% Open this file in MATLAB and complete it
% according to the directions contained within. You can test your answers with
% the test file listed below.
%
% Files to Complete: 
%	ABCs_lowLevelFileIO.m

%
% ABCs File Testing:
%	ABCs_hw08_pretest.p
%
%==========================================================================
%% PART 2. Drill Problems
%--------------------------------------------------------------------------
%
% Included with this homework is a file entitled "HW08_DrillProblems.pdf",
% containing instructions for 5 drill problems that cover the
% following topic:
%
%	Low Level File I/O
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
%% Function Name: nationalTreasure
%
% Test Cases:
% [str1] = nationalTreasure('cipher1.txt', 'text.txt')
% 	str1 => hello world
% 
% [str2] = nationalTreasure('cipher2.txt', 'declaration.txt')
% 	str2 => Nicolas Cage is the best
% 
% [str3] = nationalTreasure('cipher3.txt', 'declaration.txt')
% 	str3 => Leo has nothing
%
%--------------------------------------------------------------------------------
%% Function Name: tankTrials
%
% Test Cases:
% tankTrials('existingVehicles.txt', 'testVehicles1.txt')
% 		Output text file(s) should be identical to that produced by the solution file
% 
% tankTrials('existingVehicles.txt', 'testVehicles2.txt')
% 		Output text file(s) should be identical to that produced by the solution file
% 
% tankTrials('existingVehicles.txt', 'testVehicles3.txt')
% 		Output text file(s) should be identical to that produced by the solution file
% 
% tankTrials('existingVehicles.txt', 'testVehicles4.txt')
% 		Output text file(s) should be identical to that produced by the solution file
%
%--------------------------------------------------------------------------------
%% Function Name: arr2text
%
% Test Cases:
% arr2text([4, 2, 8; 5, 2, 1], 'test1.txt')
% 		Output text file(s) should be identical to that produced by the solution file
% 
% arr2text(7, 'test2.txt')
% 		Output text file(s) should be identical to that produced by the solution file
% 
% arr2text(magic(100), 'test3.txt')
% 		Output text file(s) should be identical to that produced by the solution file
% 
% arr2text([923451, 567, 18934; 4, 2, 8; 347899, 23, 1324789234], 'test4.txt')
% 		Output text file(s) should be identical to that produced by the solution file
%
%--------------------------------------------------------------------------------
%% Function Name: asciiBurger
%
% Test Cases:
% asciiBurger('me')
% 		Output text file(s) should be identical to that produced by the solution file
% 
% asciiBurger('sally,lettuce,tomato,kale')
% 		Output text file(s) should be identical to that produced by the solution file
% 
% asciiBurger('joe,bun,pickles,onions,pickles,burger')
% 		Output text file(s) should be identical to that produced by the solution file
% 
% asciiBurger('bob,bun,tomato,lettuce,pickles,onions,bacon,cheese,burger,cheese,burger,cheese,burger')
% 		Output text file(s) should be identical to that produced by the solution file
%
%--------------------------------------------------------------------------------
%% Function Name: nationalTreasure_hard
%
% Test Cases:
% [str1] = nationalTreasure_hard(fopen('cipher1.txt'), fopen('text.txt'))
% 	str1 => hello world
% 
% [str2] = nationalTreasure_hard(fopen('cipher2.txt'), fopen('declaration.txt'))
% 	str2 => Nicolas Cage is the best
% 
% [str3] = nationalTreasure_hard(fopen('cipher3.txt'), fopen('declaration.txt'))
% 	str3 => Leo has nothing
%
