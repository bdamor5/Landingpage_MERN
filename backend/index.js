import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()

//db connection
import { connection } from './DB/conn.js'
connection()

//routes
import userRoute from './Routes/userRoute.js'

const app = express()

//middlewares
app.use(cors({ 
    credentials: true, 
    origin: "http://localhost:3000" }))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use('/api',userRoute)


app.listen(process.env.PORT,() => console.log(`Server running on : ${process.env.PORT}`))