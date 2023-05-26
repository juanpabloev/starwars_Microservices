const { Router } = require("express");
const controllers = require("../controllers/index");
const middleware = require("../middleware/index");

const router = Router();

router.get("/characters", controllers.getCharacters);

router.get("/characters/:id", controllers.getOneCharacter);

router.post(
  "/characters",
  middleware.validateName,
  controllers.createCharacter
);

module.exports = router;
