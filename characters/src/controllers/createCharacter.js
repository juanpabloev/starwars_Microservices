const { response } = require("../utils/index");
const axios = require("axios");

module.exports = async (req, res) => {
  const {
    _id,
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
  } = req.body;
  const newCharacterDb = await axios.post("http://database:8004/Character", {
    _id,
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
  });
  const newCharacter = newCharacterDb.data;
  response(res, 200, newCharacter);
};
