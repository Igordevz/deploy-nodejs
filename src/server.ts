import  express, { application }  from "express";
import { ConnectDb } from "./database/database_config";
import { router } from "./router/router";
import cors from "cors";
async function Botstrap(){


    const app = express();
    app.use(express.json());
    app.use(cors())
    await ConnectDb();

    const Door = 3000
    app.listen(Door, () =>{
        console.log(`Server Connect Door ${Door}`);
    })
    app.use(router)
}

Botstrap();