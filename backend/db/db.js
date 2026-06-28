import mongoose from 'mongoose'

const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to DB");
    }).catch(err =>{
        console.log("Error occured while connecting", err);
    });
}

export default connectDB;