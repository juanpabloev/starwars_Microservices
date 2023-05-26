const { Router } = require("express");
const controllers = require("../controllers/index");
const middleware = require("../middleware/index");

const router = Router();

router.get("/films", controllers.getFilms);
router.get("/films/:id", controllers.getOneFilm);

module.exports = router;
