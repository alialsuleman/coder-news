import { Comment } from "../../types";



export interface CommentDao {
    createComment(comment: Comment): Promise<void>;
    listComment(postId: String): Promise<Comment[]>;
    deleteComment(commentId: String): Promise<void>;
}