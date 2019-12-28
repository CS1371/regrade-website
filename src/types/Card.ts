import Comment from "./Comment";

export default interface Card {
    name: string;
    dateCreated: string;
    status: "New"|"Under Review"|"Accepted"|"Denied";
    desc: string;
    comments: Comment[];
}