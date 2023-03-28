import { Document, model, Schema } from "mongoose"

export default interface Iuser extends  Document{
    email: string,
    username: string,
    password: string,
    token: string, 
}

export const UserSchema = new Schema<Iuser>({
    email: {
        type: String,
        required: true,
    }, 
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    token:{
        type: String,
        required: true
    }
})

export const UserModel = model<Iuser>('user', UserSchema)