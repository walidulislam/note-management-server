import express from "express"
import { authController } from "./auth.controller.ts"

const router = express.Router()

router.post("/register", authController.userRegistration)
router.get("/login", authController.userLogin)

export const authRouter = router