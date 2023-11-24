const express = require("express");
const phanLoaiController = require("../controllers/phanloai_controller");

const router = express.Router();

/**
 * @swagger
 * /phanloai/:
 *   get:
 *     tags:
 *       - Phân loại
 *     summary: Lấy thông tin tất cả phân loại
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
router.route("/").get(phanLoaiController.getPhanLoai);

/**
 * @swagger
 * /phanloai/chitiet/{slug}:
 *   get:
 *     tags:
 *       - Phân loại
 *     summary: Lấy thông tin chi tiết một phân loại
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
router.route("/chitiet/:slug").get(phanLoaiController.getPhanLoaiChiTiet);

/**
 * @swagger
 * /phanloai/get-all:
 *   get:
 *     tags:
 *       - Phân loại
 *     summary: Lấy thông tin tất cả các nội dung của phân loại
 *     responses:
 *       '200':
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object

 */
router.route("/get-all").get(phanLoaiController.getAll);
/**
 * @swagger
 * /phanloai:
 *   post:
 *     tags:
 *       - Phân loại
 *     summary: Tạo mới phân loại
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tenPhanLoai:
 *                 type: string
 *                 example: "Bài tập"
 *               noiDung:
 *                 type: string
 *                 example: "Bài tập"
 *     responses:
 *       '200':
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.route("/").post(phanLoaiController.createPhanLoai);

module.exports = router;
