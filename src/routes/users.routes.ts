import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateAvaterUseCase/UpdateAvatarController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./temp/avatar"));

const createUserControler = new CreateUserController();
const updateUserAvatarCotroller = new UpdateUserAvatarController();

usersRoutes.post("/", createUserControler.handle);

usersRoutes.patch(
    "/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserAvatarCotroller.handle
);

export { usersRoutes };
