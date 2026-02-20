const express = require("express")
const router = express.Router()
const employeeController = require("../controllers/employeeController")
const auth = require("../security/auth")

router.post("/employee/add", auth, employeeController.addEmployee)

router.get("/employee/edit/:id", auth, employeeController.showEdit)
router.post("/employee/edit/:id", auth, employeeController.editEmployee)

router.get("/employee/delete/:id", auth, employeeController.deleteEmployee)

module.exports = router