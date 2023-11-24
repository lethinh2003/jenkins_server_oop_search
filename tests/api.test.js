const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app"); // Import your Node.js app
const dotenv = require("dotenv");

dotenv.config({ path: "../config.env" });
const {
  db: { stringConnect },
} = require("../configs/config.mongodb");

beforeAll(async () => {
  await mongoose.connect(stringConnect, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
});
describe("API Tests", () => {
  it("should return 200 OK for GET /api/v1/chuonghoc", async () => {
    console.log(request(app));
    const response = await request(app).get("/api/v1/chuonghoc");

    console.log({ response });
    expect(response.statusCode).toBe(200);
  });

  // Add more tests for your API endpoints
});
describe("API Tests", () => {
  it("should return 200 OK for GET /api/v1/baihoc", async () => {
    const response = await request(app).get("/api/v1/baihoc");
    expect(response.statusCode).toBe(200);
  });

  // Add more tests for your API endpoints
});

afterAll(async () => {
  await mongoose.connection.close();
});
