const mongoose = require('mongoose');
const colors = require("colors");
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDB Database`);
    }
    catch(error){
        console.log(`Mongo connect error${error}`.bgRed.white);
    }
};

module.exports = connectDB;