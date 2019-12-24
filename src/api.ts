import CardPayload from "./types/CardPayload";
import RegradePayload from './types/RegradePayload';

export async function createCard(data: RegradePayload): Promise<void> {
    return fetch('./api/cards.php', {
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

export async function getCards(): Promise<CardPayload> {
    // Make GET request to get regrade request cards
    return fetch('./api/cards.php')
        .then(response => response.json() as Promise<CardPayload>)
        .catch(err => {
            console.error(err);
            return {};
        });
}

export function login(): void {
    // Redirect user to login API, with GET query to get redirected back
    window.location.href = './api/login.php?returnTo=' + window.location.href;
}
