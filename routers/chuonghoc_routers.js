const express = require("express");
const chuongHocController = require("../controllers/chuonghoc_controller");

const router = express.Router();
/**
 * @swagger
 * /chuonghoc/:
 *   get:
 *     tags:
 *       - Chương học
 *     summary: Lấy thông tin tất cả chương học
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
router.route("/").get(chuongHocController.getChuongHoc);
/**
 * @swagger
 * /chuonghoc/chitiet/{slug}:
 *   get:
 *     tags:
 *       - Chương học
 *     summary: Lấy thông tin chi tiết một chương học
 *     parameters:
 *       - in: path
 *         name: slug
 *         schema:
 *           type: string
 *         required: true
 *         default: "tong-quan-lap-trinh-huong-doi-tuong"
 *     responses:
 *       '200':
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object

 */
router.route("/chitiet/:slug").get(chuongHocController.getChuongHocChiTiet);
/**
 * @swagger
 * /chuonghoc:
 *   post:
 *     tags:
 *       - Chương học
 *     summary: Tạo mới chương học
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phanLoai:
 *                 type: string
 *                 example: "644029fdd3375e2030b94a26"
 *               tenChuongHoc:
 *                 type: string
 *                 example: "Các dạng bài tập của lập trình hướng đối tượng"
 *               noiDung:
 *                 type: string
 *                 example: "Các dạng bài tập của lập trình hướng đối tượng"
 *     responses:
 *       '200':
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.route("/").post(chuongHocController.createChuongHoc);

module.exports = router;
