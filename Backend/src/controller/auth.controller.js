const userService = require('../services/user.service.js')
const jwtProvider = require('../config/jwtProvider.js')
const bcrypt = require("bcrypt")
const cartService = require('../services/cart.service.js')


const register = async( req , res )=>{

    try
    {
        const user = await userService.createUser(req.body)
        const jwt  = jwtProvider.generateToken(user._id)

        await cartService.createCart(user)

        return res.status(201).send({jwt,message: "Registration successful. You can now log in."})
    }
    catch(error)
    {
        return res.status(500).send({error: "An error occurred during registration: " + error.message})
    }

}

const login = async( req , res )=>{

    const { password , email } = req.body ; 

    try
    {
        const user = await userService.getUserByEmail(email); 

        if( !user )
        {
            return res.status(404).send({message: "No user found with email : ", email})
        }

        const isPasswordValid = await bcrypt.compare( password , user.password )

        if( !isPasswordValid )
        {
            return res.status(401).send({message: "Invalid password. Please try again."})
        }

        const jwt = jwtProvider.generateToken(user._id)

        return res.status(200).send({jwt,message: "Login successful."})


    }
    catch(error)
    {
        console.error("Login error:", error);
        return res.status(500).send({error: "An error occurred during login: " + error.message})
    }
}



module.exports = { register,login }