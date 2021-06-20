import mongoose from 'mongoose'

export const connection = () =>{
    mongoose.connect(process.env.DB,{
        useCreateIndex : true,
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useFindAndModify : false
    })
    .then(() => console.log('Connection To DB Successful'))
    .catch(() => console.log('Connection To DB Failed'))
}