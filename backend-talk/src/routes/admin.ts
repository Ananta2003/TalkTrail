import { Router } from "express";
import { Event, Speaker } from "../db.js";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import { adminMiddleware } from "../middleware/middleware.js";
import mongoose from "mongoose";

dotenv.config()

const adminRouter = Router()
const JWT_AUTH: any = process.env.JWT_AUTH


adminRouter.post("/admin/signup", async (req, res) => {
  const { email, name, picture, password } = req.body;

  try {
    // Check if user already exists
    let user = await Speaker.findOne({ email });

    if (user) {
      // ✅ User exists → Sign in

      res.status(400).json({
        message: "Already have an Account"
      })
    }

    // ✅ User doesn't exist → Create new account
    user = await Speaker.create({
      name,
      email,
      password,     // OAuth subject (Google ID, GitHub ID, etc.)
      picture,
    });

    return res.status(201).json({
      message: "Signup Successful",

    });
  } catch (err) {
    console.error("OAuth signup/signin error:", err);
    res.status(500).json({
      message: "Server error",
    });
  }
});


adminRouter.post("/admin/signin", async (req, res) => {
  const { email, password } = req.body  
 


  const user = await Speaker.findOne({ email, password });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  if (user) {
    const token = jwt.sign({
      userId: user._id
    }, JWT_AUTH)

    res.status(200).json({ message: "Signed In", token });
  } else {
    return res.status(401).json({ message: "Incorrect Credentials" });
  }

});


adminRouter.get("/admin/getadmin", adminMiddleware, async (req, res) => {
  const userId = req.userId

  try {
    const data = await Speaker.findById(
      userId
    )

    res.status(200).json({
      data
    })
  } catch (err) {
    console.log(err)
  }

})

adminRouter.post("/admin/list", adminMiddleware, async (req, res) => {

  const { eventimg, subTitle, eventTitle, ispaid, related } = req.body;
  const speaker = new mongoose.Types.ObjectId(req.userId);
  const data = await Event.create({
    eventTitle,
    eventimg,
    subTitle,
    speaker

  })
  console.log("req.headers.authorization:", req.headers.authorization);
  console.log("req.userId:", req.userId);
  console.log("req.body:", req.body);

  res.status(200).json({
    data
  })
})


adminRouter.delete("/delete", adminMiddleware, async (req, res) => {

  const { userId } = req.body

  const data = await Event.deleteOne({
    userId: userId._id
  })

  res.status(200).json({
    data
  })
})

export default adminRouter 