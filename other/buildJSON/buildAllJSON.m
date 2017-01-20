function buildAllJSON

% Change this to the current semester
nameListFilename = 'Name_List_Spring_2017.xlsx';
buildTAJson(nameListFilename);

% Get this file from TSquare!
gradeFileName = 'grades.csv';
buildClassJson(gradeFileName);

end