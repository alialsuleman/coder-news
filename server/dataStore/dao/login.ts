import { Login } from "../../types";

export interface LoginDao {
    getUserExpired(id: string): Promise<number>;
    removeUserLogin(id: string): Promise<void>;
    addUserLogin(userLogin: Login): Promise<void>;
}