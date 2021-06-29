import express from 'express'
import userModel from "../DB/model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken' 

export const signup = async(req,res) =>{
    try{ 
        const userdata = new userModel(req.body)
        
        //in model.js , using pre middleware before save event
        //hashing the password

        await userdata.save()        

        // console.log(userdata)

        res.status(201).json({message : 'User Created!'})

    }catch(err){
        console.log(err)
        res.status(400).json({error:err.message})
    }
}

export const signin = async(req,res) =>{
    try{
        const {email,password} = req.body
        console.log(req.body)
        const userRecord = await userModel.findOne({email})

        if(userRecord){
            const usertoken = await userRecord.generateToken()
            res.cookie("jwtlogin",usertoken,{
                expires : new Date(Date.now() + 60000),
                sameSite : 'none',
                secure : true
            })

            console.log(usertoken)

            const userPresent = await bcrypt.compare(password, userRecord.password)

            if(userPresent){
                res.status(200).json({message:'User Signed In!'})
            }else{
                res.status(400).json({message:'Invalid Login Details'})
            }
        }else{
            res.status(400).json({message:'Invalid Login Details'})
        }   
    }catch(err){
        res.status(400).json({message:'Invalid Login Details'})
    }
}

// export const userprofile = async(req,res) =>{
//     try{
//         const profile = await userModel.findById(req.params.id)

//         res.status(200).json(profile)

//         //res.status(200).json(req.tokenuser)

//     }catch(err){
//         res.status(400).json({error : 'User Not Found'})
//     }
// }

export const updateUser = async(req,res) =>{
    try{
        //hashing the pw
        req.body.password = await bcrypt.hash(req.body.password,10)
        
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })                

        if(updatedUser){
            res.status(200).json(updatedUser)
        }else{
            res.status(400).json({error : 'User Not Found'})
        }

    }catch(err){
        res.status(400).json({error : 'User Not Found'})
    }
}

export const deleteUser = async(req,res) =>{
    try{
        const deleted = await userModel.findByIdAndDelete(req.params.id)

        if(deleted){
            res.status(200).json({message : 'User Deleted!'})
        }else{
            res.status(400).json({error : 'User Not Found'})
        }        
    
    }catch(err){
        res.status(400).json({error : 'User Not Found'})
    }
}

export const getUserProfile = async(req,res) =>{
    
    res.json(req.tokenuser)
}

export const signout = async(req,res) =>{
    try{
        res.clearCookie('jwtlogin',{path:'/'});
        // console.log(res)
        //console.log(req)

        await req.tokenuser.save()

        res.status(200).json({message:'Signout Successful!'}) 

    }catch(err){
        res.status(500).send(err)
    }
}