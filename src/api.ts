import CardPayload from "./types/CardPayload";
import RegradePayload from './types/RegradePayload';
import TA from './types/TA';
import { ShallowHomework, Homework } from "./types/Homework";

export async function createCard(data: RegradePayload): Promise<Response> {
    return fetch('./api/cards.php', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
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

export async function getTAs(): Promise<TA[]> {
    return fetch('./api/tas.php')
        .then(resp => resp.json() as Promise<TA[]>);
}

export async function getHomeworks(): Promise<ShallowHomework[]> {
    return fetch('./api/homework.php')
        .then(resp => resp.json() as Promise<ShallowHomework[]>);
};

export async function getHomework(num: number): Promise<Homework> {
    return fetch(`./api/homework.php?num=${num}`)
        .then(resp => resp.json() as Promise<Homework>);
}

export function login(): void {
    // Redirect user to login API, with GET query to get redirected back
    window.location.href = './api/login.php?returnTo=' + window.location.href;
}
