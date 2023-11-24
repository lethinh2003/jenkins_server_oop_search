const mongoose = require("mongoose");
const dotenv = require("dotenv");

const http = require("http");

const app = require("./app");

const server = http.createServer(app);
const {
  db: { stringConnect },
} = require("./configs/config.mongodb");
const {
  server: { port: portConfig },
} = require("./configs/config.endpoint");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log("Error: ", err);
  console.log(err.name, err.message);
  process.exit(1);
});

mongoose
  .connect(stringConnect, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  });

const port = process.env.PORT || portConfig;
console.log(`Môi trường: `, process.env.NODE_ENV || "development");

server.listen(port, () => {
  console.log("Server đang chay tren cong", port);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log("Error: ", err);
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
