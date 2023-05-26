const { response } = require("../utils/index");
const axios = require("axios");

module.exports = async (req, res) => {
  const dbResponse = await axios.get("http://database:8004/Character");
  const characters = dbResponse.data;
  response(res, 200, characters);
};
