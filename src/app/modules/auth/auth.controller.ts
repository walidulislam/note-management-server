import type { Request, Response } from "express";
import { authServices } from "./auth.service.ts";
import catchHandel from "../../shared/catchHandel.ts";


const userRegistration = catchHandel( async(req: Request, res: Response) => {
    const data = req.body;
    const result = await authServices.userRegister(data)

    res.status(200).json(result);
});

const userLogin =catchHandel( async (req: Request, res: Response) => {
    const data = req.body;
    const result = await authServices.userLogin(data)

    res.status(200).json(result)
})

export const authController = {
    userRegistration,
    userLogin
}