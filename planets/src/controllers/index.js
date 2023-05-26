const { catchAsync } = require("../utils/index");
module.exports = {
  getPlanets: catchAsync(require("./getPlanets")),
  getOnePlanet: catchAsync(require("./getOnePlanet")),
};
