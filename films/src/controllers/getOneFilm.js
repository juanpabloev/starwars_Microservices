const { response } = require("../utils/index");
const axios = require("axios");

module.exports = async (req, res) => {
  const { id } = req.params;

  const dbResponse = await axios.get(`http://database:8004/Film/${id}`);
  const film = dbResponse.data;

  response(res, 200, film);
};
