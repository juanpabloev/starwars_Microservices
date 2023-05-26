const { response } = require("../utils/index");
const axios = require("axios");

module.exports = async (req, res) => {
  const dbResponse = await axios.get("http://database:8004/Planet");
  const planets = dbResponse.data;
  response(res, 200, planets);
};
