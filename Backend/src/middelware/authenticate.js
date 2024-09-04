const jwtProvider = require("../config/jwtProvider.js")
const userService = require("../services/user.service.js")

const authenticate = async (req, res, next) => {
    try 
    {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) 
        {
            return res.status(404).send({ error: "Token not Found" });
        }

        const userId = jwtProvider.getUserrIdFromToken(token);
        const user = await userService.findUserById(userId);
        console.log("authenticate User: " , user)

        if (!user) 
        {
            return res.status(401).send({ error: "User not authenticated" });
        }
        
        req.user = user;

    } 
    catch (error) 
    {
        return res.status(500).send({ error: error.message });
    }

    next()
};

module.exports = authenticate;
