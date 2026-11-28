import User from "../models/user.model.js ";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup =async (req,res,next)=>{
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User({username,email,password:hashedPassword});
    try {
        await newUser.save();
    res.status(201).json('user created');
    } catch (error) {
        next(error);
    }
};

export const signin = async (req,res,next)=>{
    const {email,password} = req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404,"user not found"));
        const isMatch = bcryptjs.compareSync(password,validUser.password);
        if(!isMatch) return next(errorHandler(401,"wrong credentials"));
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        const {password:_,...others} = validUser._doc;
        res.cookie("access_token", token, {httpOnly: true}).status(200).json({success:true,token,others});
    } catch (error) {
        next(error);
    }
}; 

export const googleAuth = async (req,res,next)=>{
    const {email,name,photoURL} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser) {
            const token = jwt.sign({id:existingUser._id},process.env.JWT_SECRET,{expiresIn:'7d'});
            const {password:_,...others} = existingUser._doc;
            res.cookie("access_token", token, {httpOnly: true}).status(200).json({success:true,others});
        } else {
            const generatedPassword = bcryptjs.hashSync(Math.random().toString(36).slice(-8), 10);
            const newUser = new User({
                username:name.split(' ').join('').toLowerCase()+Math.random().toString(36).slice(-4),
                email,
                password:generatedPassword,
                profilePicture:photoURL
            });
            await newUser.save();
            const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:'7d'});
            const {password:_,...others} = newUser._doc;
            res.cookie("access_token", token, {httpOnly: true}).status(200).json({success:true,others});
        }
    } catch (error) {
        next(error);
    }
};
export const signout = async(req,res,next)=>{
    try {
        res.clearCookie('access_token', { httpOnly: true, sameSite: 'strict' });
        res.status(200).json({message:'User has been signed out'});
    } catch (error) {
        next(error)
    }
};