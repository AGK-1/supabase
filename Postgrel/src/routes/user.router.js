const { Router } =  require("express");
const userController = require("../controllers/user.controller");
const userValidation = require("../validation/user.validations");
const validationMiddleware = require("../middleware/validation.middleware");

const userRouter = Router();

userRouter.get("/", userController.list);
userRouter.post("/", validationMiddleware(userValidation.create), userController.create);

module.exports = userRouter;