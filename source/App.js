import  express  from "express";
import userRouter from "./routes/users.routes.js";
const app = express()
app.use('/users', userRouter)
export default app;