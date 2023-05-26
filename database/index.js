const server = require("./src/server");
const { Character } = require("./src/database/index");

server.listen(8004, () => {
  console.log("server listening in port: 8004");
});
