import { Request, Response } from "express";
import { UserModel } from "../models/userModel";


export default async function Authentication(req: Request, res:Response){
    
    const { email, password } = req.body

    const authentication = await UserModel.findOne({ email: email, password: password })

    if(!authentication){
        return res.status(200).json({ msg: 'Usúario ou senhas não existem' })
    }

    return res.status(200).json({ authentication })
}