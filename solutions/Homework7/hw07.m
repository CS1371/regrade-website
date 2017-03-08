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
%	ABCs_iteration.m
%	checkers.m
%	conway.m
%	gcdLCM.m
%	gorillaCase.m
%	hw07.m
%	pkmnBattle.m
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
% Part of this homework is an m-file called "ABCs_iteration.m".
% Open this file in MATLAB and complete it
% according to the directions contained within. You can test your answers with
% the test file listed below.
%
% Files to Complete: 
%	ABCs_iteration.m

%
% ABCs File Testing:
%	ABCs_hw07_pretest.p
%
%==========================================================================
%% PART 2. Drill Problems
%--------------------------------------------------------------------------
%
% Included with this homework is a file entitled "HW07_DrillProblems.pdf",
% containing instructions for 5 drill problems that cover the
% following topic:
%
%	Iteration
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
%% Function Name: gcdLCM
%
% Test Cases:
% [g1, l1] = gcdLCM(12, 15)
% 	g1 =>      3
% 	l1 =>     60
% 
% [g2, l2] = gcdLCM(11, 29)
% 	g2 =>      1
% 	l2 =>    319
% 
% [g3, l3] = gcdLCM(6498, 228)
% 	g3 =>    114
% 	l3 =>        12996
%
%--------------------------------------------------------------------------------
%% Function Name: gorillaCase
%
% Test Cases:
% [gorillaStr1] = gorillaCase('The Cincinnati Zoo leads the US in western lowland gorilla births.')
% 	gorillaStr1 => ThE cincinnati ZoO LeAdS ThE us in WeStErN LoWlAnD GoRiLlA births
% 
% [gorillaStr2] = gorillaCase(' In tropical forests,  gorillas are hunted  to provide meat for the Bushmeat Trade.  Logging also destroys Gorilla habitats. ')
% 	gorillaStr2 => Value too large to display. Value should match that of the solution function.
% 
% [gorillaStr3] = gorillaCase('-  -  23we98 w8ill   ne678vEr for%32get0../300,$$ha2R3aMb%e    has*h3ta$$g#swag     ')
% 	gorillaStr3 =>     we will   NeVeR FoRgEtHaRaMbE    HaShTaGsWaG     
%
%--------------------------------------------------------------------------------
%% Function Name: checkers
%
% Setup:
%	load boards.mat
%
% Test Cases:
% [jumps1] = checkers(board1)
% 	jumps1 =>      6
% 
% [jumps2] = checkers(board2)
% 	jumps2 =>      2
% 
% [jumps3] = checkers(board3)
% 	jumps3 =>     14
% 
% [jumps4] = checkers(board4)
% 	jumps4 =>      4
%
%--------------------------------------------------------------------------------
%% Function Name: pkmnBattle
%
% Setup:
%	load pkmnBattle_studentCases.mat
%
% Test Cases:
% [out1] = pkmnBattle(myPKMN1, enemyPKMN1, myMove1, enemyMove1)
% 	out1 => You lost the battle and blacked out! The enemy had 96 HP remaining.
% 
% [out2] = pkmnBattle(myPKMN2, enemyPKMN2, myMove2, enemyMove2)
% 	out2 => Congratulations, Champion of the Pokemon League! Your Pokemon survived with 45 HP.
% 
% [out3] = pkmnBattle(myPKMN3, enemyPKMN3, myMove3, enemyMove3)
% 	out3 => Congratulations, Champion of the Pokemon League! Your Pokemon survived with 792 HP.
%
%--------------------------------------------------------------------------------
%% Function Name: conway
%
% Setup:
%	load testBoards.mat
%
% Test Cases:
% [newBoard1] = conway(smallBoard)
% 	newBoard1 =>  
%    0   1   1   0   0
%    0   0   0   0   0
%    0   1   1   0   0
%    1   0   0   1   0
%    1   0   0   1   0
% 
% [newBoard2] = conway(mediumBoard)
% 	newBoard2 =>  
%    0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   1   1   0
%    0   0   0   0   0   0   0   1   1   0
%    0   0   0   0   0   0   0   0   0   0
% 
% [newBoard3] = conway(largeBoard)
% 	newBoard3 =>  
%    0   0   0   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
%    0   1   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
%    1   0   0   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
%    0   1   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   1   1   0   0   0   1   1   0   0   0   0   0   0   0   0
%    0   0   0   0   1   0   0   1   0   0   1   1   0   0   0   0   0   0   0   0
%    0   0   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   0
%    0   0   0   0   0   0   1   0   1   0   0   0   0   0   1   1   0   0   0   0
%    0   0   0   0   0   1   0   0   1   0   0   0   0   0   1   1   0   0   0   0
% 
% [newBoard4] = conway(reallyBigBoard)
% 	newBoard4 => Value too large to display. Value should match that of the solution function.
%
