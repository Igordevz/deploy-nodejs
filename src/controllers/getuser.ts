import { Request, Response } from "express";
import { UserModel } from "../models/userModel";

export async function GetUser(req: Request, res:Response){

    const { token } = req.body

    const user = await UserModel.findOne({ token: token })
    if(!user){
        return res.status(401).json({ msg: 'you dont login' })
    }
    
    return res.status(200).json({ user });
}