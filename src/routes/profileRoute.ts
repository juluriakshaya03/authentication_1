
// import  express  from "express";
// import { updatePasswordController, updateUserController } from "../controllers/updateProfileController";
// import { getClientController, updateClientController } from "../controllers/clientController";
// // import { getCoachController, updateCoachController } from "../controllers/coachController";
// import { getAdminController, updateAdminController } from "../controllers/adminController";
// import { getCoachController, updateCoachController } from "../controllers/coachRoleController";

// const profileRouter = express.Router();

// profileRouter.put('/update-user', updateUserController);
// profileRouter.put('/admin', updateAdminController);
// profileRouter.get('/admin', getAdminController);
// profileRouter.put('/client', updateClientController);
// profileRouter.get('/client', getClientController);
// profileRouter.put('/coach', updateCoachController);
// profileRouter.get('/coach', getCoachController);

// profileRouter.put('/change-password', updatePasswordController);

// export default profileRouter;



import  express  from "express";
import { updatePasswordController, updateUserController } from "../controllers/updateProfileController";
import { getClientController, updateClientController } from "../controllers/clientController";
// import { getCoachController, updateCoachController } from "../controllers/coachController";
import { getAdminController, updateAdminController } from "../controllers/adminController";
import { getCoachController, updateCoachController } from "../controllers/coachRoleController";
import { getCoachesByActivity } from "../controllers/getCoachesByActivity";
import { getCoach } from "../controllers/coaches";
import { getUser } from "../controllers/users";
import { getCoach_Id_spl } from "../controllers/getCoach_Id_spl";
import { getCoachByUserId } from "../controllers/getCoachByUserId";

const profileRouter = express.Router();

profileRouter.put('/update-user', updateUserController);
profileRouter.put('/admin', updateAdminController);
profileRouter.get('/admin', getAdminController);
profileRouter.put('/client', updateClientController);
profileRouter.get('/client', getClientController);
profileRouter.put('/coach', updateCoachController);
profileRouter.get('/coach', getCoachController);
profileRouter.get('/getCoachesByActivity', getCoachesByActivity);
profileRouter.put('/change-password', updatePasswordController);
profileRouter.put('/change-password', updatePasswordController);
profileRouter.put('/change-password', updatePasswordController);
profileRouter.get('/getCoachesByActivity', getCoachesByActivity);
profileRouter.get('/coachInfo', getCoach);
profileRouter.get('/userInfo', getUser);
profileRouter.get('/getCoach_Id_spl', getCoach_Id_spl);
profileRouter.get('/coach_by_userId', getCoachByUserId);

export default profileRouter;
