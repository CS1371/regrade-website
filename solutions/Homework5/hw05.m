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
%	ABCs_arrays.m
%	ABCs_masking.m
%	GSquare.m
%	arrReplace.m
%	decodeASCII.m
%	hw05.m
%	matCraft.m
%	sieve.m
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
% Part of this homework are m-files called "ABCs_arrays.m" and "ABCs_masking.m".
% Open these files in MATLAB and complete them
% according to the directions contained within. You can test your answers with
% the test file listed below.
%
% Files to Complete: 
%	ABCs_arrays.m
%	ABCs_masking.m
%
% ABCs File Testing:
%	ABCs_hw05_pretest.p
%
%==========================================================================
%% PART 2. Drill Problems
%--------------------------------------------------------------------------
%
% Included with this homework is a file entitled "HW05_DrillProblems.pdf",
% containing instructions for 5 drill problems that cover the
% following topic:
%
%	Arrays and Masking
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
%% Function Name: arrReplace
%
% Test Cases:
% [result1] = arrReplace([4, 0, 4; 0, 4, 0; 4, 0, 4], magic(3), 4)
% 	result1 =>  
%      8     0     6
%      0     5     0
%      4     0     2
% 
% [result2] = arrReplace([12 3 7 1; 1 12 7 1; 1 3 12 1; 1 3 7 12], [1 2 4 6; 8 3 9 0; 4 5 7 2; 0 3 1 1], 12)
% 	result2 =>  
%      1     3     7     1
%      1     3     7     1
%      1     3     7     1
%      1     3     7     1
% 
% [result3] = arrReplace([1 9 2 3 5; 8 13 9 9 55; 89 9 233 9 9], [100 1 53 19 70; 8 96 21 34 1678; 722 144 41 377 610], 9)
% 	result3 =>  
%      1     1     2     3     5
%      8    13    21    34    55
%     89   144   233   377   610
%
%--------------------------------------------------------------------------------
%% Function Name: decodeASCII
%
% Setup:
%	load studentCasesASCII.mat
%
% Test Cases:
% [out1] = decodeASCII(in1, 2, 2, '@', 3)
% 	out1 => Value too large to display. Value should match that of the solution function.
% 
% [out2] = decodeASCII(in2, .5, 1.5, '*', 1)
% 	out2 => Value too large to display. Value should match that of the solution function.
% 
% [out3] = decodeASCII(in3, .75, 2, 'X', 2)
% 	out3 => Value too large to display. Value should match that of the solution function.
%
%--------------------------------------------------------------------------------
%% Function Name: GSquare
%
% Setup:
%	load GSquareStudentCases.mat
%
% Test Cases:
% [finalGrade1] = GSquare(grades1, comments1, gradeMode1)
% 	finalGrade1 =>                       78.6
% 
% [finalGrade2] = GSquare(grades2, comments2, gradeMode2)
% 	finalGrade2 =>                       44.8
% 
% [finalGrade3] = GSquare(grades3, comments3, gradeMode3)
% 	finalGrade3 =>                       36.7
%
%--------------------------------------------------------------------------------
%% Function Name: matCraft
%
% Setup:
%	load matCraft_studentCases.mat
%
% Test Cases:
% [scores1, dist1] = matCraft(in1, in2, in3)
% 	scores1 =>                        -19                     2.616
% 	dist1 =>      0
% 
% [scores2, dist2] = matCraft(in4, in5, in6)
% 	scores2 =>                        454                      5.12
% 	dist2 =>                      1.414
% 
% [scores3, dist3] = matCraft(in7, in8, in9)
% 	scores3 =>                       9695                     4.298
% 	dist3 =>      1
%
%--------------------------------------------------------------------------------
%% Function Name: sieve
%
% Test Cases:
% [out1] = sieve(10)
% 	out1 =>      2     3     5     7
% 
% [out2] = sieve(4)
% 	out2 =>      2     3
% 
% [out3] = sieve(100)
% 	out3 =>  
%   Columns 1 through 13                                                        
%      2     3     5     7    11    13    17    19    23    29    31    37    41
%   Columns 14 through 25                                                       
%     43    47    53    59    61    67    71    73    79    83    89    97      
% 
% [out4] = sieve(10609)
% 	out4 => Value too large to display. Value should match that of the solution function.
%
