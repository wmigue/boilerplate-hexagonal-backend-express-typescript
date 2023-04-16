import express from "express"

import { userGetController } from "../dependencies"

const userRouter = express.Router()

userRouter.get("/:id", userGetController.findById.bind(userGetController))
userRouter.get("/", userGetController.findByName.bind(userGetController))

export { userRouter }
