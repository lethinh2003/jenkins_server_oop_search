const express = require("express");
const searchController = require("../controllers/search_controller");

const router = express.Router();
/**
 * @swagger
 * /search/:
 *   get:
 *     tags:
 *       - Tìm kiếm
 *     summary: Tìm kiếm nội dung
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         required: true
 *         default: "bài"
 *     responses:
 *       '200':
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object

 */
router.route("/").get(searchController.getSearch);

module.exports = router;
