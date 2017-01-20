function buildClassJson(gradeFileName)

[~,~,raw2] = xlsread(gradeFileName);
firstNames = cellfun(@strtrim,raw2(4:end,4),'UniformOutput',false);
lastNames = raw2(4:end,3);
usernames = raw2(4:end,1);
names = cellfun(@(x,y) [x ' ' y],firstNames,lastNames,'UniformOutput',false);

names = cellfun(@(x) ['\n\t"' x '"'],names,'UniformOutput',false);
usernames = cellfun(@(x) ['"username": "' x '"'],usernames,'UniformOutput',false);
folderNames = cellfun(@(x,y) ['"folder": "' y ', ' x '"'],firstNames,lastNames,'UniformOutput',false);

combined = cellfun(@(x,y,z) [x ' : {\n\t\t' y ',\n\t\t' z '\n\t}'],names,usernames,folderNames,'UniformOutput',false);
allNames = strjoin(combined,',');

allNames = ['{' allNames '\n}'];
fh = fopen('names.json','w');
fprintf(fh,allNames);
fclose(fh);
end