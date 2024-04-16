const express = require("express");
const User = require("../schema/user");
const { jsonResponse } = require("../lib/jsonResponse");
const router = express.Router();

router.post("/", async function (req, res, next) {
  const { name, username, password, email } = req.body;

  if (!username || !name || !password || !email) {
    
    return res.status(409).json(
      jsonResponse(409, {
        error: "Todos los campos son requeridos",
      })
    );
  }

  //Crear usuarios
  try {
    const user = new User();
    const userExists = await user.usernameExists(username);

    if (userExists) {
      return res.status(409).json(
        jsonResponse(409, {
          error: "Usuario ya existe",
        })
      );
    
    } else {
      const user = new User({ name, username, password, email });

      user.save();

      res.json(
        jsonResponse(200, {
          message: "Usuario creado",
        })
      );
    }
  } catch (err) {
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error creando usuario",
      })
    );
  }
});

module.exports = router;



