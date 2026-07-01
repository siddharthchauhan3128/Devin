import jwt from 'jsonwebtoken';
import redisClient from '../services/redis.service.js';

const authMiddleware = async(req,res,next)=>{
    try{
        const token =
            req.cookies?.token ||
            req.headers.authorization?.split(" ")[1];
        if(!token){
             return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const isBlackListed = await redisClient.get(token);
        if(isBlackListed){
            res.cookie('token',' ');
            return res.status(401).json({
                message: "Unauthorized"
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;
        next();

    }catch(err){
        console.error(err);
        return res.status(500).json({
            message: "Internal server error"
        })
    }

}

export default authMiddleware;