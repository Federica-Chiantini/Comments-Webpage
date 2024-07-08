export interface DataComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

//DTO: Data Transfer Object
export class NewFormContentDTO {
    constructor(public name : string , public email : string, public body : string ){}
}