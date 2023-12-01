
import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { initDb, db } from './dataStore';
import { PostController } from './controllers/post.controllers';
import { asyncWrapper } from './middlewares/asyncWrapper';
import { AppError } from './utils/appError'
import { SUCCESS, FAIL, ERROR } from './utils/httpstatusText'
import { addcommentValidation, addorremovelikeValidation, createPostValidation, loginValidation, registerValidation } from './middlewares/validationSchema';
import { checkBodyValidation } from './middlewares/checkBodyValidation';
import { PayloadObj, createSign } from './auth/JWT/createSign';
import { verify1 } from './auth/JWT/Verify';
import { verfiyToken } from './middlewares/verfiyToken';
import { UserController } from './controllers/user.controllers';


(async () => {

    await initDb();
    const postController = PostController.getPostController(db);
    const userController = UserController.getUserController(db);

    const app = express();

    app.use(express.json());








    // user 
    app.post('/login'
        , loginValidation()
        , checkBodyValidation
        , asyncWrapper(userController.login));
    app.post('/register'
        , registerValidation()
        , checkBodyValidation
        , asyncWrapper(userController.createAcount));


    // post 
    app.use(verfiyToken, userController.isLogin);
    app.get('/post/all', asyncWrapper(postController.listPosts));
    app.get('/post/getpost/:id', asyncWrapper(postController.getPost));

    app.post('/post/create'
        , createPostValidation()
        , checkBodyValidation
        , asyncWrapper(postController.createPost));

    app.get('/post/delete/:id', asyncWrapper(postController.deletePost));




    // like 
    app.post('/post/addorremovelike'
        , addorremovelikeValidation()
        , checkBodyValidation
        , asyncWrapper(postController.AddOrRemoveLike));

    app.get('/post/listlike/:postId', asyncWrapper(postController.getListLike));



    // commment 
    app.post('/post/addcomment'
        , addcommentValidation()
        , checkBodyValidation
        , asyncWrapper(postController.addcomment));

    app.get('/post/listcomment/:postId', asyncWrapper(postController.listComment));

    app.get('/post/removecomment/:commentId', asyncWrapper(postController.removeComment));













    //global middleware for not found router 
    app.all('*', (req, res, next) => {
        return res.status(404).json({
            status: ERROR,
            data: null,
            message: "this resource not available"
        });
    })


    //global middleware for error handler 
    app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
        console.log("error ", error.message);
        return res.status(error.statusCode || 500).json({
            status: error.statusText || "ERROR",
            data: null,
            message: error.message,
            code: error.statusCode || 500
        });
    })

    app.listen(3000, () => console.log(`server Running in port 3000 🐱‍🐉`))

})();