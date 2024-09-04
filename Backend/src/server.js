const app = require("./index")
const { connectDB } = require("./config/db")

const PORT = 5454 

app.listen(PORT , async()=> {
    await connectDB();
    console.log("E-commerce API is now running on port : " , PORT )
})

