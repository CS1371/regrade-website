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
9. Transfer files over to server (httpdocs -> regrades -> json)

Also a good idea to check the json files and make sure they are formatted correctly
Common problems:
1. NaN sections - needs to be deleted / or code fixed
2. Students have space at beginning of name in json 


================================================================
How to keep the regrade website running week to week
================================================================
1. Upload rubrics to server (httpdocs -> regrades -> rubrics)
    1a. Upload rubrica as "hwXXRubric.json" ("hw01" NOT "hw1")
    1b. Upload rubricb as "hwXXRubric_resub.json"
2. Upload solutions to server (httpdocs -> regrades -> solutions)
    2a. Create new folder named "HomeworkX" ("Homework1" NOT "Homework01")
    2b. Dump all p files into this folder
    2c. Take all supporting files, zip them into a folder called "Supporting Files.zip", and place zip in this folder
    2d. Take all resub supporting files, zip them into a folder called "Supporting Files Resub.zip", and place them in this folder
3. Upload the homework flies (httpdocs -> homework files)
    3a. Create a new folder named "homeworkXX"
    3b. Create a new folder named "homeworkXX_resub"
    3c. Dump all student folders from bulk_download into these folders
        - Make sure this is done AFTER grading
        - Student folders should include feedback files
        - Include everything as is, don't delete any files
    
