function buildAllJSON

% Change this to the current semester
nameListFilename = 'Name_List_Spring_18.xlsx';
buildTAJson(nameListFilename);

% Get this file from Canvas (and format like grades.csv from t-square)!
gradeFileName = 'grades.xlsx';
buildClassJson(gradeFileName);

end