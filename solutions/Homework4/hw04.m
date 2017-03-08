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
%	ABCs_logicals.m
%	caesarShift.m
%	criminalMinds.m
%	fivePrime.m
%	giraffeCase.m
%	hw04.m
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
% Part of this homework is an m-file called "ABCs_logicals.m".
% Open this file in MATLAB and complete it
% according to the directions contained within. You can test your answers with
% the test file listed below.
%
% Files to Complete: 
%	ABCs_logicals.m

%
% ABCs File Testing:
%	ABCs_hw04_pretest.p
%
%==========================================================================
%% PART 2. Drill Problems
%--------------------------------------------------------------------------
%
% Included with this homework is a file entitled "HW04_DrillProblems.pdf",
% containing instructions for 4 drill problems that cover the
% following topic:
%
%	Logicals
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
%% Function Name: fivePrime
%
% Test Cases:
% [newVec1] = fivePrime([4 5 6])
% 	newVec1 =>      4   NaN     6
% 
% [newVec2] = fivePrime([7 5 7 9 10 7 15])
% 	newVec2 =>      7     5     7   NaN    10     7    15
% 
% [newVec3] = fivePrime([2 12 7 8 7 2 15 9])
% 	newVec3 =>      2    12   NaN     8   NaN     2    15     9
%
%--------------------------------------------------------------------------------
%% Function Name: giraffeCase
%
% Test Cases:
% [out1] = giraffeCase('I want to be a giraffe someday!')
% 	out1 => IwanTtObEAGIRAFFEsomedaY
% 
% [out2] = giraffeCase('They''re my favorite exhibit at the zoo.')
% 	out2 => theyrEmYfavoritEexhibiTaTthEzoO
% 
% [out3] = giraffeCase('Giraffes live in    the African Savannah. Not the  city in Georgia.')
% 	out3 => GIRAFFESlivEiNthEafricaNsavannaHnoTthEcitYiNgeorgiA
%
%--------------------------------------------------------------------------------
%% Function Name: caesarShift
%
% Test Cases:
% [out1] = caesarShift('i love matlab', 0)
% 	out1 => I LOVE MATLAB6
% 
% [out1] = caesarShift('Alea Jacta Est', 10)
% 	out1 => QVVQ TQSDQ VID11
% 
% [out1] = caesarShift('Inter arma enim silent leges', -100)
% 	out1 => ERXAV WVIW AREI OEPARX PACAO12
%
%--------------------------------------------------------------------------------
%% Function Name: criminalMinds
%
% Test Cases:
% [suspectNumber1] = criminalMinds([true true false true], [true false false true], [true true false true], [true true false true])
% 	suspectNumber1 => Suspect #2 is lying.
% 
% [suspectNumber2] = criminalMinds([true false false], [true false true], [true false true], [true false true])
% 	suspectNumber2 => Suspect #1 is lying.
% 
% [suspectNumber3] = criminalMinds([false false false false false], [false false false false false], [false false false false false], [false true false false false])
% 	suspectNumber3 => Suspect #4 is lying.
% 
% [suspectNumber4] = criminalMinds([true true], [false false], [true true], [true true])
% 	suspectNumber4 => Suspect #2 is lying.
%
