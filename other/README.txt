================================================================
How to get the regrade website up and running for a new semester
================================================================

1. Make the name_list for the new semester
    - Examples available on the TA CM drive and repo
2. Go to regrade website repo -> other -> buildJSON
3. Download name list xlsx to this folder
4. Download grades.csv to this folder (delete old one)
    - TSquare -> assignments -> In/Old -> Download all -> Grade file -> Submit
5. Open buildAllJSON.m
6. Update the two variables 
    - (name list needs to be updated, grades.csv can probably say the same)
7. Run buildAllJSON.m
    - Creates "sections.json" and "names.json"
8. Copy sections.json and names.json into regrade website repo -> json
9. Transfer files over to server

Also a good idea to check the json files and make sure they are formatted correctly
Common problems:
1. NaN sections - needs to be deleted / or code fixed
2. Students have space at beginning of name in json 


