% DO NOT CHANGE THIS LINE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function [A, B, C, D, E, F, G, H, I, J, K] = ABCs_moreFunctions(DNE)
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Answer the following statements by setting the variables immediately
% following the questions with either the words 'true' or 'false' (without
% the single quotes). Note that MATLAB understands the meaning of these
% particular key words by default. This will be important later in the
% semester.

% Example.  Professor HB teaches CS 1371.
% example = true;

%--------------------------------------------------------------------------
% Part I. Function Headers. For the following function headers, answer
% true if they are valid, false otherwise.

% function myFunc = [in1 in2]
A = NaN;

% function out = myFunc
B = NaN;

% function [out two three] = myFunc(in)
C = NaN;

% function myFunc
D = NaN;

% function (out, two) = myFunc[in]
E = NaN;

%--------------------------------------------------------------------------
% Part II. Function Tracing
%   For this part, trace through the given code and figure out what values the
%   variables will have after the given commands are run. While you could copy
%   and paste the code in to the Command Window to run it, these are the exact
%   types of tracing questions asked on tests and you will not have the luxury
%   of running the code during a test!

%   Consider the following function and its helper function.

%   1   function pace = marathonRunner(miles,time)
%   2   pace = miles./time;
%   3   left = 1 - (mod(miles,26)/26);
%   4   speedUp(pace,5);
%   5   end
%   6
%   7   function speedUp(pace,amount)
%   8   pace = pace + amount;
%   9   end

%   The following code is written in the Command Window and runs without error:

%   >> mySpeed = marathonRunner(39,10);

%   Immediately after line 4 is run, identify the value of the following variables
%   in the marathonRunner function Workspace. Write DNE if a variable does not
%   exist in the marathonRunner Workspace.

% The value stored in 'pace' is:
F = NaN;

% The value stored in 'left' is:
G = NaN;

% The value stored in 'amount' is:
H = NaN;


%   Consider the following function and its helper function. 
% 
%   1   function E = superFun(in1)
%   2   E = helper(in1);
%   3   end
%   4
%   5   function out3 = helper(in)
%   6   out3 = mod(in,2);
%   7   end

%   The following code is written in the Command Window and runs without error:

%   >> E = 5;
%   >> F = superFun(E*2);

%   Identify the value of the variable E in each of the following Workspaces.
%   Write DNE if E is not defined in a particular Workspace.

% The value of E in the Command Window workspace is:
I = NaN;

% The value of E in the superFun function Workspace is:
J = NaN;

% The value of E in the helper function Workspace is:
K = NaN;

%-----------------------------------------------------------------------------------
end