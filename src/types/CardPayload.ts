import Card from "./Card";

export default interface CardPayload {
    username?: string;
    cards?: Card[];
}