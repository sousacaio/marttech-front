import { IUser } from "../User";

export interface IProduct {
    id?: number;    
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    user?: IUser
}