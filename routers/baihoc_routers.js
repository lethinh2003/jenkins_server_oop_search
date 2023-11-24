const express = require("express");
const baiHocController = require("../controllers/baihoc_controller");

const router = express.Router();
/**
 * @swagger
 * /baihoc/:
 *   get:
 *     tags:
 *       - Bài học
 *     summary: Lấy thông tin tất cả bài học
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
router.route("/").get(baiHocController.getBaiHoc);
/**
 * @swagger
 * /baihoc/chitiet/{slug}:
 *   get:
 *     tags:
 *       - Bài học
 *     summary: Lấy thông tin chi tiết một bài học
 *     parameters:
 *       - in: path
 *         name: slug
 *         schema:
 *           type: string
 *         required: true
 *         default: "lap-trinh-khong-co-cau-truc"
 *     responses:
 *       '200':
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object

 */
router.route("/chitiet/:slug").get(baiHocController.getBaiHocChiTiet);
/**
 * @swagger
 * /baihoc:
 *   post:
 *     tags:
 *       - Bài học
 *     summary: Tạo mới bài học
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phanMuc:
 *                 type: string
 *                 example: "652296b4e5c044256403216e"
 *               tenBaiHoc:
 *                 type: string
 *                 example: "Tính đa hình"
 *               noiDung:
 *                 type: string
 *                 example: "Nội dung bài hoc 10"
 *     responses:
 *       '200':
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.route("/").post(baiHocController.createBaiHoc);
/**
 * @swagger
 * /baihoc/edit:
 *   post:
 *     tags:
 *       - Bài học
 *     summary: Sửa bài học
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idBaiHoc:
 *                 type: string
 *                 example: "652296b4e5c044256403216e"
 *               noiDung:
 *                 type: string
 *                 example: "Nội dung bài hoc 10"
 *     responses:
 *       '200':
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.route("/edit").post(baiHocController.editBaiHoc);

module.exports = router;
