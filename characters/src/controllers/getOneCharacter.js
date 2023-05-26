const { response } = require("../utils/index");
const axios = require("axios");

module.exports = async (req, res) => {
  const { id } = req.params;

  const dbResponse = await axios.get(`http://database:8004/Character/${id}`);
  const character = dbResponse.data;

  response(res, 200, character);
};
