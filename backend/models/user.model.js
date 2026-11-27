import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTngZ8T4v7ME1Mn1pltkGB68zRF8fBpIKJUP--TncvS3Z-BNVjJ0mWTTQ7&s=10",
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;