const { Router } = require("express");
const controllers = require("../controllers/index");
const middleware = require("../middleware/index");

const router = Router();

router.get("/planets", controllers.getPlanets);
router.get("/planets/:id", controllers.getOnePlanet);

module.exports = router;
