
import  express  from "express";
import { updatePasswordController, updateUserController } from "../controllers/updateProfileController";
import { getClientController, updateClientController } from "../controllers/clientController";
// import { getCoachController, updateCoachController } from "../controllers/coachController";
import { getAdminController, updateAdminController } from "../controllers/adminController";
import { getCoachController, updateCoachController } from "../controllers/coachRoleController";

const profileRouter = express.Router();

profileRouter.put('/update-user', updateUserController);
profileRouter.put('/admin', updateAdminController);
profileRouter.get('/admin', getAdminController);
profileRouter.put('/client', updateClientController);
profileRouter.get('/client', getClientController);
profileRouter.put('/coach', updateCoachController);
profileRouter.get('/coach', getCoachController);

profileRouter.put('/change-password', updatePasswordController);

export default profileRouter;
