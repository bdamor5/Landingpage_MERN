import mongoose  from "mongoose";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import validator from 'validator'

//schema
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password : {
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        trim:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
},{
    timestamps : true
})

//hashing pw using pre middleware
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,10)
    }
    next()
})

//generating token
userSchema.methods.generateToken = async function(){
    try{
            const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET);

            this.tokens = this.tokens.concat({token});

            await this.save();

            return token;

    }catch(err){
        console.log(err);
    }
}

//model
const userModel = mongoose.model('Userinfo',userSchema)

export default userModel