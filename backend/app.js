import express from 'express'
import morgan from 'morgan'
import connectDB from './db/db.js';
import "dotenv/config";
import userRouter from './routes/user.routes.js';
import cookieParser from 'cookie-parser';

const app = express();

connectDB();
app.use(cookieParser());
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/', (req,res)=>{
    res.send("Hello world");
})

app.use('/user',userRouter);

export default app;