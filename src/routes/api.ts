import { Request, Response, Router } from "express";
import * as userController from '../controllers/userController'
import { Auth } from "../middlewares/authJWT";

const mainRoute = Router();

mainRoute.get('/ping', (req: Request, res: Response) => {
    res.json({pong: true});
})

mainRoute.post('/register', userController.register);
mainRoute.post('/login', userController.login);
// mainRoute.post('/users', userController.createUser);


mainRoute.get('/list', Auth.private, userController.list);
mainRoute.get('/users', userController.getUsers);



export default mainRoute;