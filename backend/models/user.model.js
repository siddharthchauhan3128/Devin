import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unqiue:true,
        trim: true,
        lowercase:true,
        minLength: [6, 'Email should be more than 6 char'],
        maxLength: [254, 'Email should be shorter than 254 char']
    },
    password:{
        type:String,
        required: true,
        select:false
    }

})

const User = await mongoose.model('user', userSchema)

export default User;
