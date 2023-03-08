import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import User from "../models/User.js";

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email:email});
        if(!user){
            return res.status(404).json({message:"user not exist"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(404).json({message:"Invalid Password"})
        }
        const token=jwt.sign({id:user._id},process.env.JWT_STRING);
        delete user.password;
        res.status(200).json({token,user});
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}