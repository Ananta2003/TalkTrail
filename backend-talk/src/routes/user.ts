import { Router } from "express";
import { Event, Speaker, User } from "../db.js";
import jwt from 'jsonwebtoken'
import { adminMiddleware } from "../middleware/middleware.js";

const JWT_AUTH: any = process.env.JWT_AUTH



const userRouter = Router()
userRouter.post("/user/signup", async (req, res) => {
  const { email, name, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      // ✅ User exists → Sign in

      res.status(400).json({
        message: "Already have an Account"
      })
    }

    // ✅ User doesn't exist → Create new account
    user = await User.create({
      name,
      email,
      password,     // OAuth subject (Google ID, GitHub ID, etc.)
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

userRouter.post("/user/signin", async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  if (user) {
    const token = jwt.sign({
      userId: user._id,
      name: user.name
    }, JWT_AUTH)

    res.status(200).json({ message: "Signed In", token });
  } else {
    return res.status(401).json({ message: "Incorrect Credentials" });
  }

});

userRouter.get("/event", async (req, res) => {

  const data = await Event.find({})

  res.status(200).json({
    data
  })
})

userRouter.post("/speaker", async (req, res) => {

  const userId = req.userId
  const data = await Speaker.find({userId}).populate("name")

  res.status(200).json({
    data
  })
})

userRouter.post("/user/register-event/:eventId", adminMiddleware, async (req, res) => {
  try {
    const userId = req.userId; // from JWT middleware
    const { eventId } = req.params as any;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // prevent duplicates
    if (user.events.includes(eventId)) {
      return res.status(400).json({ message: "Already registered for this event" });
    }

    user.events.push(eventId);
    await user.save();

    res.status(200).json({ message: "Event registered successfully", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

//filter Routes
userRouter.get("/event/paid", async (req, res) => {

  const data = await Event.find({
    ispaid: true
  })

  res.status(200).json({
    data
  })
})

userRouter.get("/event/free", async (req, res) => {

  const data = await Event.find({
    ispaid: true
  })

  res.status(200).json({
    data
  })
})

export default userRouter 