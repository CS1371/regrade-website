import CardPayload from "./types/CardPayload";
import RegradePayload from './types/RegradePayload';
import TA from './types/TA';
import { ShallowHomework, Homework } from "./types/Homework";
import TestCase from './types/TestCase';

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
    const exampleResp: TA[] = [
        {
            name: "Alex Rao",
            gtUsername: "arao81",
            canvasId: "22556",
            trelloId: "asfdsrewqfdsy6564543214fafdsaf",
            section: "A04",
        },
        {
            name: "Angela Ho",
            gtUsername: "aho31",
            canvasId: "224433",
            trelloId: "fdsafdsafdsasdfd8978967",
            section: "A04",
        },
        {
            name: "Julie Petrillo",
            gtUsername: "jpetrillo3",
            canvasId: "4324234",
            trelloId: "dafsyfuiodsayjklfdsa33q321",
            section: "A03",
        },
    ]
    return Promise.resolve(exampleResp);
}

export async function getHomeworks(): Promise<ShallowHomework[]> {
    const exampleResp: ShallowHomework[] = [
        {
            number: 1,
            hasResubmission: true,
        },
        {
            number: 2,
            hasResubmission: true,
        },
        {
            number: 3,
            hasResubmission: true,
        },
        {
            number: 4,
            hasResubmission: true,
        },
    ];
    return Promise.resolve(exampleResp);
};

export async function getHomework(num: number): Promise<Homework> {
    const tests: TestCase[] = [
        {
            inputs: [ 'in1', 'in2' ],
            outputs: [ 'out1', 'out2' ],
        },
        {
            inputs: [ 'in3', 'in4' ],
            outputs: [ 'out3', 'out4' ],
        },
        {
            inputs: [ 'in5', 'in6' ],
            outputs: [ 'out5', 'out6' ],
        },
    ];
    const exampleResp: Homework[] = [
        {
            number: 1,
            hasResubmission: true,
            problems: [
                {
                    name: 'hello1',
                    testCases: [...tests],
                },
                {
                    name: 'hello2',
                    testCases: [...tests],
                },
            ],
        },
        {
            number: 2,
            hasResubmission: true,
            problems: [
                {
                    name: 'funs',
                    testCases: [...tests],
                },
            ],
        },
        {
            number: 3,
            hasResubmission: true,
            problems: [
                {
                    name: 'logs',
                    testCases: [...tests],
                },
            ],
        },
        {
            number: 4,
            hasResubmission: true,
            problems: [
                {
                    name: 'strs',
                    testCases: [...tests],
                },
            ],
        },
    ];
    return Promise.resolve(exampleResp[num - 1]);
}

export function login(): void {
    // Redirect user to login API, with GET query to get redirected back
    window.location.href = './api/login.php?returnTo=' + window.location.href;
}
