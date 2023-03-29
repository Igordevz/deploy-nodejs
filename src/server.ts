import  express, { application }  from "express";
import { ConnectDb } from "./database/database_config";
import { router } from "./router/router";

async function Botstrap(){

    const app = express();
    app.use(express.json());
    await ConnectDb();

    const Door = 3000
    app.listen(Door, () =>{
        console.log(`Server Connect Door ${Door}`);
    })
    app.use(router)
}

Botstrap();