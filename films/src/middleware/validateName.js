const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { name } = req.body;
  if (name) return next();
  else throw new ClientError("Error falta el nombre de la pelicula", 401);
};
