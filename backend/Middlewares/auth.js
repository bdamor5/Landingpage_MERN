import jwt from 'jsonwebtoken'
import userModel from '../DB/model.js'

export const auth = async(req,res,next) =>{
    try{
        const cookietoken = req.cookies.jwtlogin
        const user = jwt.verify(cookietoken,process.env.SECRET)

        const tokenuser = await userModel.findById({_id : user._id})

        req.tokenuser = tokenuser

        next()

    }catch(err){
        res.status(400).send('Unauthorised User')
    }
}