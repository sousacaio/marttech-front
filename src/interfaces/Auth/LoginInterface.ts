import { IUser } from "../User";

export interface ILogin {
    access_token: string;
    user: IUser;
}