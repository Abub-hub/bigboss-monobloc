const bcrypt = require("bcrypt")
const prisma = require("../prisma/prismaClient")

exports.addEmployee = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10)

  await prisma.employee.create({
    data: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
      age: req.body.age ? parseInt(req.body.age) : null,
      gender: req.body.gender,
      companyId: req.session.companyId
    }
  })

  res.redirect("/dashboard")
}

exports.showEdit = async (req, res) => {
  const employee = await prisma.employee.findUnique({
    where: { id: parseInt(req.params.id) }
  })

  res.render("employee_edit", { employee })
}

exports.editEmployee = async (req, res) => {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age ? parseInt(req.body.age) : null,
    gender: req.body.gender
  }

  if (req.body.password && req.body.password.trim() !== "") {
    data.password = await bcrypt.hash(req.body.password, 10)
  }

  await prisma.employee.update({
    where: { id: parseInt(req.params.id) },
    data
  })

  res.redirect("/dashboard")
}

exports.deleteEmployee = async (req, res) => {
  await prisma.employee.delete({
    where: { id: parseInt(req.params.id) }
  })

  res.redirect("/dashboard")
}