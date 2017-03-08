% DO NOT CHANGE THIS LINE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function [A, B, C, D, E, F, G, H, I, J] = ABCs_lowLevelFileIO(file1, file2, file3)
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% ABCs: Lower-Level File I/O
%
% Directions:
% Write the code to satisfy the following directions. For each part, store
% your answer in the variable that is specified within the parentheses. 
%   Ex. Add 1 + 1. (GT)
% That means store the value of 1 + 1 in the variable GT. 
%
% Given Input Variables:
% Part I & II:
%   1. file1 - A file name (including the extension .txt) of a given text 
%              file (char)
%   2. file2 - A file name (including the extension .txt) of a text file 
%              that should be written (char)
% Part III:
%   1. file3 - A file name (including the extension .txt) of a give text 
%              file (char)

%% Part I: Short Coding & Conceptual
% 1. fopen(). Open file1 for read access and store the file handle in (fh1)


% 2. fgets(). Read in the first line of file1 using fgets(). (A)
A = NaN;

% 3. fgetl(). Read in the second line of file1 using fgetl(). (B)
B = NaN;

% 4. fprintf(). Write the second line from file1 to a new file with a file 
%    name specified by the variable file2. You will first need to open the 
%    file with write access.


% 5. fclose(). Use fclose() to close file1 and file2. Do NOT use fclose all
%    or fclose('all').



% 6. What is the new line character in MatLab? Express your answer as a 
%    string. (C)
C = NaN;

% 7. true or false. When applicable, fgets() will return the new line
%    character at the end of the string whereas fgetl() will NOT return the
%    new line character. Answer should be the class logical. (D)
D = NaN;

% 8. What is the data type of a file handle, fh, after the following code
%    is run? Assume file exists in the current directory. Express your 
%    answer as a string. (E)
%    >> fh = fopen(file)
E = NaN;

% 9. If the end of the current file has been reached after calling
%    F = fgetl(fh) OR F = fgets(fh), what would be the value of F?
%    Express your answer exactly how F would appear in your code. (F)
F = NaN;

%% Part II: Tracing
% The following script is run.

% 1     string = 'hello,world,hello,universe';
% 2     [word, rest] = strtok(string, ',');
% 3     wordCount = 1;
% 4     go = true
% 4         while ~isempty(word) & go
% 5             [word, rest] = strtok(rest, ',');
% 6             wordCount = wordCount + 1;
% 7             if word == 'world'
% 8                 go = false
% 9             end
% 10        end

% 1. true or false. This code will ERROR on line 7. (G)
G = NaN;

% 2. Whether or not this code produces an ERROR, line 6 should be changed
%    for better coding practice. What could it be changed to? (H)
%    Assign variable H to the character of your selection.
%
% A. word == true
% B. strcmp(word,'world')
% C. 'world' == word
% D. any(word == 'world')
H = NaN;

% 3. If the script above works as intended, what would be the value of
%    wordCount in the workspace after it has been run? (I)
I = NaN;

%% Part III: Long Coding

% Directions: 
% Open and read through the file "ABCs_lowLevelFileIOPractice.pdf". The 
% file contains an example drill problem, which we are going to solve 
% together. Follow the directions and write your code to satisfy the 
% instructions.

% function [J] = secretMessage(file3)
% 1. Start by opening file3 and storing the file handle in (fh).


% 2. Get the first two lines of the file using fgetl() and store them in 
%    (line1 and line2)



% 3. Write an if statement for when the first line of the file is
%    'CS1371'. If this condition is met, set the output (J) to 
%    'Can''t chat, learning MATLAB!'. (Do not end your if statement yet).
if ?
    J = NaN;

% 4. Write an else condition for when the first line is anything else.
%    Inside this else statement, obtain the third line of the file and
%    store it in (line). Also, initialize (J) by setting it equal to [].
else

    J = NaN;
    
% 5. Then, write a while loop for when "line" is of type char. 
%    Inside the while loop, concatenate the first letter of "line" 
%    to the growing string stored in (J) and then get the next "line" of 
%    the file.
%    Remember to end your while loop and if statement.
    while ?
        J = NaN;

    end
end

% 6. Close file3.


% end

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
end
