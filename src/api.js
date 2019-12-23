export function createCard(data) {
    fetch('./api/cards.php', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(txt => {
        console.log(txt.text()); })
    .catch(err => console.log(err));
}

export function getCards() {
    // Make GET request to get regrade request cards
    return fetch('./api/cards.php')
        .then(response => response.json())
        .catch(err => console.log(err));
}

export function login() {
    // Redirect user to login API, with GET query to get redirected back
    window.location.href = './api/login.php?returnTo=' + window.location.href;
}
