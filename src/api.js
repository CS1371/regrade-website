export function getCards(username) {
    // Should get regrade cards from Trello
    // For now, using dummy data

    //return {"cards":[]};
    return {"cards":[
        {"homework": "Homework 3 - Original", "description": "I did it correctly, I know because it worked on my computer, autograder must have messed up!", "timestamp": "2018-10-4 6:28AM", "status": "Pending", "comment": []},
        {"homework": "Homework 2 - Resubmission", "description": "I don't know what happened, but my code was passing the test cases...", "timestamp": "2018-09-23 3:14PM", "status": "Denied", "comment": "This regrade request was denied because your code is incorrect"},
        {"homework": "Homework 1 - Resubmission", "description": "I'm sure I did this right, I tested with the grading test cases too", "timestamp": "2018-09-02 3:14PM", "status": "Accepted", "comment": "Sorry, that was our bad. Fixed your grade on Canvas"}
    ]};
}

export function createCard(data) {}
