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
%	ABCs_strings.m
%	ABCs_vectors.m
%	compareContour.m
%	hw03.m
%	letterWeave.m
%	teachersPet.m
%	weeklyCalendar.m
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
% Part of this homework are m-files called "ABCs_vectors.m" and "ABCs_strings.m".
% Open these files in MATLAB and complete them
% according to the directions contained within. You can test your answers with
% the test file listed below.
%
% Files to Complete: 
%	ABCs_vectors.m
%	ABCs_strings.m
%
% ABCs File Testing:
%	ABCs_hw03_pretest.p
%
%==========================================================================
%% PART 2. Drill Problems
%--------------------------------------------------------------------------
%
% Included with this homework is a file entitled "HW03_DrillProblems.pdf",
% containing instructions for 4 drill problems that cover the
% following topic:
%
%	Vectors and Strings
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
%% Function Name: teachersPet
%
% Test Cases:
% [sort1] = teachersPet([75 84 72 71 87 91 54], 'OTEITLG', 'LGTTIEO')
% 	sort1 => LE TI TG OL ET IT GO
% 
% [sort2] = teachersPet([66 70 64 89 65 99 100], 'ILCHBND', 'TDKOATO')
% 	sort2 => DO NT HO LD IT BA CK
% 
% [sort3] = teachersPet([88 77 100], 'YRA', 'MEN')
% 	sort3 => AN YM RE
%
%--------------------------------------------------------------------------------
%% Function Name: letterWeave
%
% Test Cases:
% [decoded1] = letterWeave('Ti sasnec', 'hsi  etne', 'tset')
% 	decoded1 => This is atest sentence
% 
% [decoded2] = letterWeave('Tecwjme h on', 'h o uprtemo!', 'vo de')
% 	decoded2 => The cow jumped over the moon!
% 
% [decoded3] = letterWeave('TeQikBonFOe h ayDg', 'h uc rw ovrteLz o.', ' spmuJ x')
% 	decoded3 => The Quick Brown Fox Jumps Over the Lazy Dog.
%
%--------------------------------------------------------------------------------
%% Function Name: compareContour
%
% Test Cases:
% [isSame1] = compareContour([1, 2, 3], [2, 3, 4])
% 	isSame1 =>      1
% 
% [isSame2] = compareContour([-3, 0, -10], [0, 2, 3])
% 	isSame2 =>      0
% 
% [isSame3] = compareContour([3, 0, 3], [10, -10, 10])
% 	isSame3 =>      1
% 
% [isSame4] = compareContour([3, 0, 0], [10, -10, -10])
% 	isSame4 =>      1
%
%--------------------------------------------------------------------------------
%% Function Name: weeklyCalendar
%
% Test Cases:
% [newDays1, newDates1] = weeklyCalendar('M T W R F S N', [3 4 5 6 7 8 9], 3)
% 	newDays1 => R F S N M T W
% 	newDates1 =>      6     7     8     9    10    11    12
% 
% [newDays2, newDates2] = weeklyCalendar('N M T W R F S', [26 27 28 29 30 1 2], -5)
% 	newDays2 => T W R F S N M
% 	newDates2 =>     21    22    23    24    25    26    27
% 
% [newDays3, newDates3] = weeklyCalendar('T W R F S N M', [11 12 13 14 15 16 17], 365)
% 	newDays3 => W R F S N M T
% 	newDates3 =>     16    17    18    19    20    21    22
%
