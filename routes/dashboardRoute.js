const express = require("express")
const router = express.Router()
const dashboardController = require("../controllers/dashboardController")
const auth = require("../security/auth")

router.get("/dashboard", auth, dashboardController.dashboard)

module.exports = router