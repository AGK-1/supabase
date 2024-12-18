const  { Router } = require("express");
const userRouter = require("./user.router");

const router = Router();

router.use("/users", userRouter);

module.exports = router;