const prisma = require("../prisma/prismaClient")

exports.addComputer = async (req, res) => {
  await prisma.computer.create({
    data: {
      mac: req.body.mac,
      companyId: req.session.companyId
    }
  })

  res.redirect("/dashboard")
}

exports.showEdit = async (req, res) => {
  const computer = await prisma.computer.findUnique({
    where: { id: parseInt(req.params.id) }
  })

  res.render("computer_edit", { computer })
}

exports.editComputer = async (req, res) => {
  await prisma.computer.update({
    where: { id: parseInt(req.params.id) },
    data: { mac: req.body.mac }
  })

  res.redirect("/dashboard")
}

exports.deleteComputer = async (req, res) => {
  await prisma.computer.delete({
    where: { id: parseInt(req.params.id) }
  })

  res.redirect("/dashboard")
}

exports.showAssign = async (req, res) => {
  const computer = await prisma.computer.findUnique({
    where: { id: parseInt(req.params.id) },
    include: { employee: true }
  })

  const whereCondition = {
    companyId: req.session.companyId,
    computer: null
  }

  if (computer.employeeId) {
    whereCondition.OR = [
      { computer: null },
      { id: computer.employeeId }
    ]
  }

  const employees = await prisma.employee.findMany({
    where: whereCondition
  })

  res.render("assign_computer", { computer, employees })
}

exports.assignComputer = async (req, res) => {
  const employeeId = req.body.employeeId || null

  await prisma.computer.update({
    where: { id: parseInt(req.params.id) },
    data: {
      employeeId: employeeId ? parseInt(employeeId) : null
    }
  })

  res.redirect("/dashboard")
}
