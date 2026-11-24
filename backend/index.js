import express from 'express';
import mongoose from'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js'
import authRouter from './routes/auth.router.js'

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
});

const app= express();
app.use(express.json());

app.use('/backend/user',userRouter);
app.use('/backend/auth',authRouter);

app.listen(4000,()=>{
    console.log('server is running')
});