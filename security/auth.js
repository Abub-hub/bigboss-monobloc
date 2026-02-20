function auth(req, res, next) {
  if (!req.session.companyId) {
    return res.redirect("/login")
  }
  next()
}

module.exports = auth