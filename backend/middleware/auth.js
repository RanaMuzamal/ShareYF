import jwt from 'jsonwebtoken';

export const VerifyToken=async(req,res,next)=>{
    try {
        let token =req.header("Authorization");
        if(token.startsWith("Bearer ")){
            token =token.slice(7,token.length).trim();
            const verified=await  jwt.verify(token,process.env.JWT_STRING);
            req.user=verified;
            next();
        }
        else if(!token){
            res.status(403).send("Access Denied")
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}