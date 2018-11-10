export function getCards() {
    // Make GET request to get regrade request cards
    return fetch('./api/cards.php')
        .then(response => { return response.json(); })
        .catch(err => console.log(err));
}

export function login() {
    // Redirect user to login API, with GET query to get redirected back
    window.location.href = './api/login.php?returnTo=' + window.location.href;
}

export function createCard(data) {}
