import { PostDao } from "./dao/PostDao";
import { UserDao } from "./dao/UserDao";
import { CommentDao } from "./dao/commentDao";
import { LikeDao } from "./dao/likeDao";
import { LoginDao } from "./dao/login";
import { SqlDataStore } from "./sql";

export interface DataStore extends UserDao, PostDao, CommentDao, LikeDao, LoginDao { }


export let db: DataStore;
export async function initDb() {
    db = await new SqlDataStore().openDb();
} 