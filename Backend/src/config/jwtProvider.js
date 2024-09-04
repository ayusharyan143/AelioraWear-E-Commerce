const jwt = require("jsonwebtoken")

const SECRET_KEY = "ljasl;dfjasjfsfaslddjfjsfjdlafdj;lasjfa;sldfjalsfj;aslfkja;s" 

const generateToken = ( userId )=>{
    const token = jwt.sign({userId} , SECRET_KEY , { expiresIn:"48h"})

    return token ; 
}

const getUserrIdFromToken = (token)=>{
    const decodedToken = jwt.verify(token,SECRET_KEY)

    return decodedToken.userId ; 
}

module.exports = { generateToken , getUserrIdFromToken }