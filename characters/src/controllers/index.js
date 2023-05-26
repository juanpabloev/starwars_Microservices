const { catchAsync } = require("../utils/index");
module.exports = {
  getCharacters: catchAsync(require("./getCharacters")),
  getOneCharacter: catchAsync(require("./getOneCharacter")),
  createCharacter: catchAsync(require("./createCharacter")),
};
