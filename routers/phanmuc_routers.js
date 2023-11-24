const express = require("express");
const phanMucController = require("../controllers/phanmuc_controller");

const router = express.Router();
/**
 * @swagger
 * /phanmuc/:
 *   get:
 *     tags:
 *       - Phân mục
 *     summary: Lấy thông tin tất cả phân mục
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: true
 *         default: 1
 *       - in: query
 *         name: results
 *         schema:
 *           type: integer
 *         required: true
 *         default: 10
 *     responses:
 *       '200':
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object

 */
router.route("/").get(phanMucController.getPhanMuc);

/**
 * @swagger
 * /phanmuc/chitiet/{slug}:
 *   get:
 *     tags:
 *       - Phân mục
 *     summary: Lấy thông tin chi tiết một phân mục
 *     parameters:
 *       - in: path
 *         name: slug
 *         schema:
 *           type: string
 *         required: true
 *         default: "dinh-nghia"
 *     responses:
 *       '200':
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object

 */
router.route("/chitiet/:slug").get(phanMucController.getPhanMucChiTiet);
/**
 * @swagger
 * /phanmuc:
 *   post:
 *     tags:
 *       - Phân mục
 *     summary: Tạo mới phân mục
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               chuongHoc:
 *                 type: string
 *                 example: "64402a87d3375e2030b94a3c"
 *               tenPhanMuc:
 *                 type: string
 *                 example: "Dạng bài Đa hình"
 *               noiDung:
 *                 type: string
 *                 example: "Dạng bài Đa hình"
 *     responses:
 *       '200':
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.route("/").post(phanMucController.createPhanMuc);

module.exports = router;
