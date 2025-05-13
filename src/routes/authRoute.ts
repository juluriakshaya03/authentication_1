import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/authcontroller';
import { protect } from '../middlewares/authMiddleware';
import { validateRegisterInput, validateLoginInput } from '../utils/validation';
import { getCoach } from '../controllers/coaches';


const authRouter = express.Router();

authRouter.post('/register', validateRegisterInput, registerUser);
authRouter.post('/login', validateLoginInput, loginUser);
authRouter.get('/profile/:id', getUserProfile);
authRouter.get('/profile',protect, getUserProfile);
authRouter.get('/coachInfo', getCoach);

export default authRouter;