const router = require("express").Router();
const e = require("express");
const { jsonResponse } = require("../lib/jsonResponse");
const User = require("../schema/user");
const getUserInfo = require("../lib/getUserInfo");


router.post("/", async (req, res) => {
    const { username, password} = req.body;
    console.log(username, password);
    if (!username || !password) {
        return res.status(400).json(
            jsonResponse(400, {
                error: "Todos los campos son requeridos",
            }));
    }    
    const user = await User.findOne({ username });
    if (user) {
        //Validar contraseña
        const isCorrectPassword = await user.isCorrectPassword(password, user.password);
        if(isCorrectPassword){
    //Autenticar usuario
    const accesToken = user.createAccessToken();
    const refreshToken = await user.createRefreshToken();
    
    res.status(200).json(jsonResponse(200, { user: getUserInfo(user), accesToken, refreshToken}));
        } else{
            res.status(400).json(
                jsonResponse(400, {
                    error: "Usuario o password incorrecto",
                }));
        }
    }else {
        res.status(400).json(
            jsonResponse(400, {
                error: "Usuario no encontrado",
            }));
    }

    
});

module.exports = router;