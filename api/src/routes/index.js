const { Router } = require("express");
const genresRoutes = require("./genresRoutes");
const videogamesRoutes = require("./videogamesRoutes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/genres", genresRoutes);
router.use("/videgames", videogamesRoutes);

module.exports = router;
