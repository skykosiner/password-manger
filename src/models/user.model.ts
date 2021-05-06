import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    _id: number;
    name: string;
    email: string;
    password?: string;
}

const UserScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        min: 8,
        //If your email is that long then get some help please
        max: 256,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        //Password this long makes sense if you use a password manger to make a
        //password for your password manager password manager ception
        max: 256,
    }
})

export default mongoose.model<IUser>("User", UserScheme)
