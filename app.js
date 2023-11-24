const express = require("express");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
dotenv.config({ path: "./config.env" });
const app = express();
const http = require("http");
const AppError = require("./utils/app_error");
const {
  server: { port: portConfig },
} = require("./configs/config.endpoint");
const errorController = require("./controllers/error_controller");
const phanLoaiRouters = require("./routers/phanloai_routers");
const chuongHocRouters = require("./routers/chuonghoc_routers");
const phanMucRouters = require("./routers/phanmuc_routers");
const baiHocRouters = require("./routers/baihoc_routers");
const searchRouters = require("./routers/search_routers");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const endPointClient = process.env.ENDPOINT_CLIENT || 3000;
//MIDDLEWARE
app.use(cors());
app.options(endPointClient, cors());
//security http
app.use(helmet());

//development logging
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

//limit request
const limiter = rateLimit({
  max: 100,
  window: 60 * 60 * 1000,
  message: "Too many requests from this ip, please try again 1 hour later",
});
app.use("/api", limiter);

///// body parser in , reading data from body
app.use(express.json({ limit: "50mb" }));

//against NoSQL Injection
app.use(mongoSanitize());

//against XSS (HTML, JS)

//app.use(xss());

//serving static file
app.use(express.static(`${__dirname}/public`));

//test middleware
app.use((req, res, next) => {
  req.timeNow = new Date().toISOString();
  next();
});

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "OOP Research API",
      version: "1.0.0",
      description: "API dành cho OOP Research",
      contact: {
        name: "Le Thinh",
        url: "https://lethinh-blog.site",
      },
    },
    servers: [
      {
        url: `http://20.188.118.32:${portConfig}/api/v1`,
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Điền access token vào đây",
        },
        clientIdAuth: {
          type: "apiKey",
          name: "X-client-id",
          in: "header",
          description: "Điền id của user vào đây",
        },
      },
    },
  },
  apis: ["./routers/*_routers.js"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
const customSiteTitle = "Tài liệu OOP Research API";

//routers
app.get("/", (req, res) => {
  res.status(200).send("404 Not Found");
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(openapiSpecification, {
    customSiteTitle,
  })
);

app.use("/api/v1/search", searchRouters);
app.use("/api/v1/phanloai", phanLoaiRouters);
app.use("/api/v1/chuonghoc", chuongHocRouters);
app.use("/api/v1/phanmuc", phanMucRouters);
app.use("/api/v1/baihoc", baiHocRouters);

app.all("*", (req, res, next) => {
  next(new AppError(`No found ${req.originalUrl}`, 404));
});

app.use(errorController);
module.exports = app;
