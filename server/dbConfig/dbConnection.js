import mongoose from 'mongoose'

const dbConnection = async()=>{
    try{
        const dbConnection = await mongoose.connect("mongodb+srv://deepak:deepak@cluster0.jtbonvk.mongodb.net/JobFinder")
        console.log("Database connected")
    }

    catch(error)
    {
        console.log("DB Error: "+ error)
    }
}

export default dbConnection
