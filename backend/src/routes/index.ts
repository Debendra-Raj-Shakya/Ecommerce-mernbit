const authRoute = require("./auth.route");

const routers = (server) => {
  server.use("/auth", authRoute);
};

module.exports = routers;
