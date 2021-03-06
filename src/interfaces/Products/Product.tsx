import { IUser } from "../User/User";


export interface IProduct {
    id?: number;    
    name: string;
    price: number;
    quantity?:number
    createdAt: Date;
    updatedAt: Date;
    user?: IUser
}