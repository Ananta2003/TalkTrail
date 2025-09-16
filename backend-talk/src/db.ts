import mongoose from "mongoose";
import dotenv from "dotenv"
import { string } from "zod";

dotenv.config()
const MONGO_URL: any = process.env.MONGO_URL

mongoose.connect(MONGO_URL)

const speaker = new mongoose.Schema({
    name: {
        type: String
    },
    password:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    picture: {
        type: String
    }
})

const user = new mongoose.Schema({
    name: {
        type: String
    },
    email:{
        type:String,
        unique:true
    },
    password: {
        type: String
    },
    events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event"
    }
  ]
})

const events = new mongoose.Schema({
    // speaker:{
    //     type:{ type: mongoose.Schema.Types.ObjectId, ref: 'Speaker', required: true },
    // },
    speaker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Speaker",
        required: true,
    },
    speakerImg: {
        type:String
    },
    eventimg: {
        type: String
    },
    eventTitle: {
        type: String
    },
    ispaid: {
        type: Boolean
    },
    subTitle: {
        type: String
    },
    related: {
        type: [
            String
        ],
    }
})

export const Event = mongoose.model("Event", events)
export const Speaker = mongoose.model("Speaker", speaker)
export const User = mongoose.model("User", user)