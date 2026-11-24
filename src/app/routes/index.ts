import express from "express"
import { authRouter } from "../modules/auth/auth.router.ts"

const router = express.Router()

const routers = [
    {
        path: "/auth",
        route: authRouter
    }
]

routers.forEach((f)=> router.use(f.path, f.route))

export const allRouter = router