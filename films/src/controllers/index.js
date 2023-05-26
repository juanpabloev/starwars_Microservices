const { catchAsync } = require("../utils/index");
module.exports = {
  getFilms: catchAsync(require("./getFilms")),
  getOneFilm: catchAsync(require("./getOneFilm")),
};
