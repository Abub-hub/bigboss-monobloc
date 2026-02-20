const prisma = require("../prisma/prismaClient")

exports.dashboard = async (req, res) => {
  const company = await prisma.company.findUnique({
    where: { id: req.session.companyId },
    include: {
      employees: true,
      computers: {
        include: { employee: true }
      }
    }
  })

  res.render("dashboard", { company })
}