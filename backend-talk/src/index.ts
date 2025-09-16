import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";
import cors from 'cors'


const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/v1", userRouter)
app.use("/api/v1", adminRouter)


//env config
dotenv.config()
const port = process.env.PORT

//server listing
app.listen(port,()=>{
    console.log(`Server Running on ${port}`)
})