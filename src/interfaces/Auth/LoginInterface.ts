import { IUser } from "../User/User";

export interface ILogin {
    access_token: string;
    user: IUser;
}