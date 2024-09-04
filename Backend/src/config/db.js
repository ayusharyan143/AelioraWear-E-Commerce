const mongoose = require("mongoose")

const mongodbUrl = "mongodb+srv://ayusharyan686:DJDpY0AiDu8XiH7e@cluster0.col4x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const connectDB=()=>{
    return mongoose.connect(mongodbUrl)
}


module.exports = {connectDB}