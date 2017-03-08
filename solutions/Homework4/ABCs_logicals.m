% DO NOT CHANGE THIS LINE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function [A B C D E F G H] = ABCs_logicals(num, vec1, vec2, str1, str2)
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Directions:
% Write the code to satisify the following directions. For each part, store
% your answer in the variable that is specified within the parentheses. 
%   Ex. Add 1 + 1. (GT)
% That means store the value of 1 + 1 in the variable GT, like so:
%   Ex. GT = 1 + 1;

% Given Input Variables:
%   1. (double)     num - A positive integer. 
%   2. (double)     vec1 - A vector of some arbitrary length.
%   3. (logical)    vec2 - Another vector of a different length, that will be logical data. 
%   4. (char)       str1 - A string of some arbitrary length.
%   5. (char)       str2 - A different string of some arbitrary length.


% 1. Logical operators: Logical operators are things such as a greater than
% symbol, and can be used to compare two numbers and return a single
% logical true/false for whether the expression is true or not. The
% possible operators are: == "called double equals", which checks that two
% numbers are the same; > and <, which check if one number is greater or
% less than another number; >= and <=, which check for
% greater-than-or-equal-to and less-than-or-equal-to respectively; and
% finally there is ~=, which stands for "not equal to". Use this knowledge
% to check if your input variable, num, is a positive number (i.e. greater
% than zero). (A)
A = NaN;

% 2. & and |. The "and" and "or" operators are simplistic, but very
% powerful when used well. &, or "and", simply compares two logical values
% and returns a single true if both of the logicals it was comparing are
% true. |, or "or" (which is shift + the key right above Enter), simply
% compares two logical values and returns a true if either of its compared
% values are true. Use this knowledge to find if num is both a positive
% number and not equal to 1. (B)
B = NaN;

% 3. any() and all(). any() and all() are two built-in functions in matlab
% that can be used on vectors of logical data. As their names imply, any()
% will return a true if there are any true values in the vector of
% logicals, and all() will return a true if every value in a vector of
% logicals is true. any() is to the "or" operator as all() is to the "and"
% operator. Use this knowledge to find if all the logical values in vec2
% are true. (C)
C = NaN;

% 4. is_____. Matlab has many built-in functions starting with "is", and
% these are usually referred to as the "is functions". A few "is" functions
% that apply to you with what you currently know are isequal(), 
% isnumeric(), and islogical(). isnumeric() and islogical() simply check 
% the data class of a single input: isnumeric() checks if its input is a 
% numerical class of data, and returns a single true if so. islogical() 
% checks if its input is logical data, and returns a single true if so. 
% isequal() has two inputs and simply checks to see if they are equal. It 
% is convenient because it will work with inputs of differing lengths, 
% unlike the double equals operator ("=="). Use this knowledge to check if 
% vec1 is equal to vec2. (D)
D = NaN;

% 5. Checking for even or odd numbers. Something for which there is no
% built-in function, but that you will actually need to do quite a lot of,
% is checking if a number is even or odd. The usual way of going about this
% is by using the mod() function, and comparing a number's mod with 2 to
% either 0 or 1. For example, you can check if a number is even by writing
% out a line of code: "isEvenOrNot = mod(num,2) == 0;". Because if a number
% is divisible by 2, then its mod with 2 with just be 0. Use this and your
% knowledge of mod() to check if the input variable, num, is odd. (E)
E = NaN;

% 6. "Not" operator. As you may have seen from the "not-equals" operation
% in number 1, a tilda may be used as part of a logical operator. A tilda
% is also its own logical operator, and may be used in front of a logical
% value or logical vector to invert it. For example, "~[true false true]"
% will return "[false true false]". Use this knowledge along with your code
% from letter D to check if vec1 is not equal to vec2. (F)
F = NaN;

% 7. Comparing strings. It is common in MATLAB that you will need to
% compare two strings that are not necessarily the same length, to check if
% one string matches the other. There is a function designed specifically 
% to compare strings: strcmp(). There is also the function, strcmpi(), 
% thats compares strings but ignores case. Use this knowledge (along with 
% everything else in this file) to determine if str1 and str2 are NOT the 
% same string (G), but ARE the same string if you ignore case (H).
G = NaN;
H = NaN;

end