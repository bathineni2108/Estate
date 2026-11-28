import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
export const test = (req,res)=>{
    console.log("test route");
    res.send('test')
};

export const updateUser = async (req,res,next)=>{
    if(req.user.id !== req.params.id){
        return next(errorHandler(403,'You can update only your account'));
    }
    try{
         if(req.body.password){
            req.body.password = await bcryptjs.hash(req.body.password,10);
         };
         const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:{
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
            }
            },{returnDocument:'after'});
        if(!updatedUser){
            return next(errorHandler(404,'User not found'));
        }
        const {password,...others} = updatedUser._doc;
        res.status(200).json(others);
        
    }catch(err){
        next(err);
    }
};
export const deleteUser = async (req,res,next)=>{
    if(req.user.id !== req.params.id){
        return next(errorHandler(403,'You can delete only your account'));}
    try {
        await User.findByIdAndDelete (req.params.id)
        res.clearCookie('access_token', { httpOnly: true, sameSite: 'strict' });
        res.status(200).json({message:'User has been deleted'});
    } catch (error) {
        next(error)
    }
    
};
