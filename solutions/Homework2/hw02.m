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
%	ABCs_moreFunctions.m
%	applesAndOranges.m
%	clockHands.m
%	gravity.m
%	hw02.m
%	lawOfCosines.m
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
% Part of this homework is an m-file called "ABCs_moreFunctions.m".
% Open this file in MATLAB and complete it
% according to the directions contained within. You can test your answers with
% the test file listed below.
%
% Files to Complete: 
%	ABCs_moreFunctions.m

%
% ABCs File Testing:
%	ABCs_hw02_pretest.p
%
%==========================================================================
%% PART 2. Drill Problems
%--------------------------------------------------------------------------
%
% Included with this homework is a file entitled "HW02_DrillProblems.pdf",
% containing instructions for 4 drill problems that cover the
% following topic:
%
%	Functions
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
%% Function Name: applesAndOranges
%
% Test Cases:
% [app1, ora1] = applesAndOranges(10, 10, 8, 8)
% 	app1 =>     10
% 	ora1 =>     10
% 
% [app2, ora2] = applesAndOranges(20, 30, 20, 22)
% 	app2 =>      0
% 	ora2 =>     16
% 
% [app3, ora3] = applesAndOranges(41, 10, 10, 10)
% 	app3 =>                      60.78
% 	ora3 =>      0
%
%--------------------------------------------------------------------------------
%% Function Name: lawOfCosines
%
% Test Cases:
% c1 = lawOfCosines(10, 20, 30)
% 	c1 =>                      12.39
% 
% c2 = lawOfCosines(10, 20, 80)
% 	c2 =>                      20.75
% 
% c3 = lawOfCosines(2, 50, 170)
% 	c3 =>                      51.97
%
%--------------------------------------------------------------------------------
%% Function Name: gravity
%
% Test Cases:
% [a1] = gravity(5e10, 4e12, 9)
% 	a1 =>                       3.29
% 
% [a2] = gravity(3e12, 4e14, 50)
% 	a2 =>                      10.67
% 
% [a3] = gravity(70, 5.972e24, 6.371e6)
% 	a3 =>                       9.81
%
%--------------------------------------------------------------------------------
%% Function Name: clockHands
%
% Test Cases:
% [hr1, min1] = clockHands(6, 45, 10);
% 	hr1 =>      6
% 	min1 =>     55
% 
% [hr2, min2] = clockHands(4, 45, -30);
% 	hr2 =>      4
% 	min2 =>     15
% 
% [hr3, min3] = clockHands(1, 10, -134);
% 	hr3 =>     10
% 	min3 =>     56
%
