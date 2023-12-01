import { User } from "../../types";

export type updateUser = Pick<User, 'password' | 'firstName' | 'id' | 'lastName' | 'userName'>;


export interface UserDao {

    createUser(user: User): Promise<void>;
    getUserByEmail(email: String): Promise<User | undefined>;
    getUserByUserName(userName: String): Promise<User | undefined>;
    getUserById(id: string): Promise<User | undefined>;
    updateCurrentUser(user: updateUser): Promise<void>;
    deleteUser(id: string): Promise<void>;

} 