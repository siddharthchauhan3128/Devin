import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000
}

const register = async(req,res)=>{
    try{
        const {email, password}= req.body;
        if(!email || !password){
            res.status(400).json({
                message: 'Email or Password is not defined'
            })
        }
        const existingUser = await User.findOne({email : email})
        if(existingUser){
             return res.status(409).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = new User({
            email,
            password: hashedPassword
        });
        await user.save();

        const token = jwt.sign(
                                { id: user._id },
                                process.env.JWT_SECRET,
                                { expiresIn: "7d" }
                            );

        res.cookie("token", token,cookieOptions);

        return res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                id: user._id,
                email: user.email
            }
        });
    }catch(err){
          return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const login = async(req,res)=>{
    try{
        const {email , password} = req.body;

        if(!email || !password){
            res.status(400).json({
                message: 'Email or Password is not defined'
            })
        }
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
             return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
                        { id: user._id },
                        process.env.JWT_SECRET,
                        { expiresIn: "7d" }
                    );

        res.cookie("token", token,cookieOptions);

        return res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                email: user.email
            }
        });
        
    }catch(err){
        console.error(err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }

}

const logout = (req, res) => {
    res.clearCookie("token", cookieOptions);

    return res.status(200).json({
        message: "Logged out successfully"
    });
};



export { register, login , logout};