import express from 'express';
import authRouter from './authRoute';
import profileRouter from './profileRoute';
import { protect } from '../middlewares/authMiddleware';


const authProfileRouter = express.Router();

authProfileRouter.use('/auth', authRouter);
authProfileRouter.use('/profile',protect, profileRouter);

export default authProfileRouter;