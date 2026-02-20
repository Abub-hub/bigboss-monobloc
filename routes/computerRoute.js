const express = require("express")
const router = express.Router()
const computerController = require("../controllers/computerController")
const auth = require("../security/auth")

router.post("/computer/add", auth, computerController.addComputer)

router.get("/computer/edit/:id", auth, computerController.showEdit)
router.post("/computer/edit/:id", auth, computerController.editComputer)

router.get("/computer/delete/:id", auth, computerController.deleteComputer)

router.get("/computer/assign/:id", auth, computerController.showAssign)
router.post("/computer/assign/:id", auth, computerController.assignComputer)

module.exports = router