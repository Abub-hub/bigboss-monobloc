const bcrypt = require("bcrypt")
const prisma = require("../prisma/prismaClient")

exports.showRegister = (req, res) => {
  res.render("register")
}

exports.register = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10)

  await prisma.company.create({
    data: {
      name: req.body.name,
      siret: req.body.siret,
      password: hash,
      director: req.body.director
    }
  })

  res.redirect("/login")
}

exports.showLogin = (req, res) => {
  res.render("login")
}

exports.login = async (req, res) => {
  const company = await prisma.company.findUnique({
    where: { siret: req.body.siret }
  })

  if (!company) return res.redirect("/login")

  const valid = await bcrypt.compare(req.body.password, company.password)

  if (!valid) return res.redirect("/login")

  req.session.companyId = company.id


req.session.save(() => {
  res.redirect('/dashboard');
});
}

exports.logout = (req, res) => {
  req.session.destroy()
  res.redirect("/login")
}