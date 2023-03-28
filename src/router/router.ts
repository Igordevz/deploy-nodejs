import { Router } from "express";
import Authentication from "../controllers/authentication";
import { CreateUser } from "../controllers/create_user";
import { GetUser } from "../controllers/getuser";

export const router = Router();

router.get('/', (req, res)=>{
    res.status(200).send('hello word')
})

router.post('/create_user', CreateUser)

router.post('/getuser', GetUser)

router.post('/login', Authentication)