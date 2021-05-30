import { IUser } from "../User";

export interface IProduct {
    id?: number;
    email: string;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    user?: IUser
}