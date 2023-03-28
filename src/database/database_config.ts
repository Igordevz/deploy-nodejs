import mongoose from "mongoose";
import * as dotenv from 'dotenv'
//igor
//wS2RCtNGWCPsjfbC
dotenv.config()
export async function ConnectDb (){
    try {
        console.log('connect database');
        
      mongoose.connect(`mongodb+srv://${process.env.ACESS_USER_DB}:${process.env.ACESS_PASSWORD_DB}@cluster0.mhkv25c.mongodb.net/?retryWrites=true&w=majority`)
    } catch (error) {
        console.log(error);
        
    }
}