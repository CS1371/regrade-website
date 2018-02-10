function buildClassJson(gradeFileName)

[~,~,raw2] = xlsread(gradeFileName);
firstNames = cellfun(@strtrim,raw2(4:end,4),'UniformOutput',false);
lastNames = raw2(4:end,3);
usernames = raw2(4:end,1);
ids = cellfun(@num2str,raw2(4:end,2),'UniformOutput',false);
names = cellfun(@(x,y) [x ' ' y],firstNames,lastNames,'UniformOutput',false);

usernames = cellfun(@(x) ['\n\t"' x '"'],usernames,'UniformOutput',false);
names = cellfun(@(x) ['"name": "' x '"'],names,'UniformOutput',false);
folderNames = cellfun(@(x,y,z) ['"folder": "' y ', ' x '(' z ')"'],firstNames,lastNames,ids,'UniformOutput',false);

combined = cellfun(@(x,y,z) [x ' : {\n\t\t' y ',\n\t\t' z '\n\t}'],usernames,names,folderNames,'UniformOutput',false);
allNames = strjoin(combined,',');

allNames = ['{' allNames '\n}'];
fh = fopen('names.json','w');
fprintf(fh,allNames);
fclose(fh);
end