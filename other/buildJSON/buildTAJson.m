function buildTAJson(nameListFileName)

[~,~,raw] = xlsread(nameListFileName);
names = raw(2:end,1);
sections = raw(2:end,2);
emails = raw(2:end,10);

sections = cellfun(@num2str, sections, 'UniformOutput', false);
[sections,ndx] = sort(sections);
names = cellfun(@(x) ['"' x '"'],names(ndx),'UniformOutput',false);
emails = cellfun(@(x) ['"' x '"'],emails(ndx),'UniformOutput',false);

allSectionsStr = '{\n';
uniqueSections = unique(sections);
uniqueSections = uniqueSections(~strcmpi(uniqueSections,'NaN'));
for i = 1:length(uniqueSections)
    section = uniqueSections{i};
    namesStr = sprintf('\t\t"names": [%s],\n',strjoin(names(strcmp(sections,section)),','));
    emailsStr = sprintf('\t\t"emails": [%s]\n',strjoin(emails(strcmp(sections,section)),','));
    sectionStr = sprintf('\t"%s": {\n%s%s\t},\n',section,namesStr,emailsStr);
    allSectionsStr = [allSectionsStr sectionStr];
end
allSectionsStr = [allSectionsStr(1:end-2) '\n}'];
fh = fopen('sections.json','w');
fprintf(fh,allSectionsStr);
fclose(fh);
end