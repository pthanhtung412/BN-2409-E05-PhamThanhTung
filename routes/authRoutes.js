// routes/authRoutes.js
const { Router } = require("express");
const authController = require("../controllers/authController"); // Import authController

const router = Router();

// Route cho GET /signup
router.get("/signup", authController.signupGet);

// Route cho POST /signup
router.post("/signup", authController.signupPost);

module.exports = router;
