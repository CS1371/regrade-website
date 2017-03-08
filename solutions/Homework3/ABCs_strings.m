% DO NOT CHANGE THIS LINE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function [A, B, C, D, E, F, G, H, I, J, K, L] = ABCs_strings(str1, str2, vec1, alph1, var1, double1, str3, str4)
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% ABCs of Strings
%
% Directions:
% Write the code to satisify the following directions. For each part, store
% your answer in the variable that is specified within the parantheses. 
%   Ex. Add 1 + 1. (GT)
% That means store the value of 1 + 1 in the variable GT. 
%
% Given Input Variables:
%   1. str1 - A vector of characters (string)
%   2. str2 - A vector of characters (string)
%   3. vec1 - A vector of numbers
%   4. alph1 - A character that is a letter other than 'z' or 'Z'
%   5. var1 - A variable whose class is unknown
%   6. double1 - An integer 
%   7. str3 - A vector of characters that represents a number (string)
%   8. str4 - A vector of characters (string) that contains words separated
%      by commas

% 1. ASCII Values & Character Mapping. What are the ascii values of str1?
%    (A)
A = NaN;

% 2. Casting to strings. Cast vec1 to a character array (string). (B)
B = NaN;

% 3. Slicing and Concatenation. Make a new string which is the
%    concatenation of all of str2, then a space, and then all of str1. (C)
C = NaN;

% 4. Arithmetic Operations. Find the letter following alph1. Your
%    answer should be in the same case as alph1. (D)
D = NaN;

% 5. sprintf. Use sprintf to create the string:
%
%    'alph1 is the letter <alph1>' 
%
%    where <alph1> is replaced with the character value of the input
%    variable alph1. For instance, if alph1 equaled b, the string would
%    be:
%
%       'alph1 is the letter b'
%    (E)
E = NaN;

% 6. class(). What is the class of var1? (F)
F = NaN;

% 7. num2str().  double1 is variable representing a number.  Convert
%     double1 to a string representing that number. For example, if double1
%     is the number 5683968, you would convert it to the string '5683968'. 
%     (G)
G = NaN;

% 8. str2num(). str3 is a string that represents a number.  Convert str3 
%     to that number using str2num. For example, if str3 is the string
%     '711', you would convert it to the number 711. (H)
H = NaN;

% 9. strtok().  str4 is a string with words seperated by commas, like so:
%     'word1,word2,word3'
%     Use strtok to find the first word in the string and store it in (I); 
%     store the rest of the string in (J).
I = NaN;
J = NaN;

% 10. strtok(). Store the second word in str4 as (K) and 
%     store the rest of the string in (L).
%     (Hint: you should use the variable (J) and indexing is not
%     necessary)
K = NaN;
L = NaN;

end