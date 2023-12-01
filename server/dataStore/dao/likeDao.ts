import { Like } from "../../types";

export interface LikeDao {
    createLike(like: Like): Promise<void>;
    listLike(postId: string): Promise<Like[]>
    userPostLike(userId: string, postId: string): Promise<Like | undefined>;
    deleteLike(userId: string, postId: string): Promise<void>;
}