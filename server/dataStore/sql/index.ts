import sqlite3 from 'sqlite3'
import { open as sqliteOpen, Database } from 'sqlite'
import path from 'path'

import { DataStore } from "..";
import { User, Post, Comment, Like, Login } from "../../types";
import { updateUser } from '../dao/UserDao'



export class SqlDataStore implements DataStore {

    private db!: Database<sqlite3.Database, sqlite3.Statement>;//: Database<sqlite3.Database, sqlite3.Statement>;

    public async openDb() {
        // open the database
        this.db = await sqliteOpen({
            filename: path.join(__dirname, 'coderNews.sqlite'),
            driver: sqlite3.Database
        })
        this.db.run('PRAGMA foreign_keys = ON')
        this.db.migrate({
            migrationsPath: path.join(__dirname, 'migrations')
        })
        return this;
    }


    async createUser(user: User): Promise<void> {
        await this.db.run('INSERT INTO users (id, email, firstName , lastName ,userName ,password) VALUES (?,?,?,?,?,?)',
            user.id,
            user.email,
            user.firstName,
            user.lastName,
            user.userName,
            user.password
        )
    }



    async getUserByEmail(email: string): Promise<User | undefined> {
        return await this.db.get<User>('select * from users where email = ? ', email)
    }
    async getUserByUserName(userName: string): Promise<User | undefined> {
        return await this.db.get<User>('select * from users where username = ? ', userName)
    }
    async updateCurrentUser(user: updateUser): Promise<void> {
        await this.db.run('UPDATE users SET   firstName= ? , lastName= ? ,userName= ? ,password= ? WHERE id = ?',
            [user.firstName, user.lastName, user.userName, user.password, user.id]
        );
    }
    async getUserById(id: string): Promise<User | undefined> {
        return await this.db.get<User>('select * from users where id = ? ', id)
    }

    async deleteUser(id: string): Promise<void> {
        await this.db.run('DELETE FROM users  WHERE id = ?',
            [id]
        );
    }




    async listPosts(): Promise<Post[]> {
        return await this.db.all<Post[]>('SELECT * FROM POSTS');
    }
    async createPost(post: Post): Promise<void> {
        await this.db.run('INSERT INTO posts (id, title, url ,userId, postedAt) VALUES (?,?,?,?,?)',
            post.id,
            post.title,
            post.url,
            post.userId,
            post.postedAt
        )
    }
    async getPost(id: String): Promise<Post | undefined> {
        let post: Post | undefined;
        post = await this.db.get<Post>('select * from Posts where id = ? ',
            id
        )
        return post;
    }
    async deletePost(id: String): Promise<void> {
        await this.db.run('DELETE FROM posts WHERE id=?', id);
    }





    async createComment(comment: Comment): Promise<void> {
        await this.db.run('INSERT INTO comments (id, userId, PostId ,comment, postedAt) VALUES (?,?,?,?,?)',
            comment.id,
            comment.userId,
            comment.postId,
            comment.comment,
            comment.postedAt
        )
    }
    async listComment(postId: String): Promise<Comment[]> {
        return await this.db.all<Comment[]>('SELECT * FROM Comments where PostId= ? ', postId);
    }
    async deleteComment(commentId: String): Promise<void> {
        await this.db.run('DELETE FROM comments WHERE id=?', commentId);
    }



    async createLike(like: Like): Promise<void> {
        await this.db.run('Insert INTO LIKES (postId,  userId)   VALUES (? ,? ) ', [
            like.postId,
            like.userId
        ]);
    }
    async listLike(postId: String): Promise<Like[]> {
        return await this.db.all<Like[]>('SELECT * FROM likes WHERE postId= ? ',
            postId,
        );
    }
    async deleteLike(userId: string, postId: string): Promise<void> {
        await this.db.run('DELETE from  likes where userId = ? and  postId =? ', userId, postId);
    }
    async userPostLike(userId: string, postId: string): Promise<Like | undefined> {
        return await this.db.get<Like>('SELECT * FROM likes WHERE postId= ?  and userId = ? ',
            postId,
            userId
        );
    }


    async getUserExpired(id: string): Promise<number> {
        const time = await this.db.get<Login>('SELECT * FROM Login WHERE id= ? ', id);
        if (time) return time.expired;
        else {
            const yy = Date.now() - 100000;
            return yy;
        }
    }
    async removeUserLogin(id: string): Promise<void> {
        await this.db.run('delete from login where id =  ? ', id);
    }


    async addUserLogin(userLogin: Login): Promise<void> {
        await this.db.run('insert into  Login (id,  expired)   VALUES (? ,? )', userLogin.id, userLogin.expired);
    }



}