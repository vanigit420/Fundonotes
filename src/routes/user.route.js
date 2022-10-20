import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


//route for user registration
router.post('', userController.Userregistration);
//route for user login
router.post('/login', userController.Userlogin);

//route to get a single user by their user id
//router.get('/:_id', userAuth, userController.getUser);



export default router;
