const express = require("express")
const session = require("express-session")

const authRoute = require("./routes/authRoute")
const employeeRoute = require("./routes/employeeRoute")
const computerRoute = require("./routes/computerRoute")
const dashboardRoute = require("./routes/dashboardRoute")

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use(session({
  secret: "supersecret",
  resave: false,
  saveUninitialized: false
}))

app.use((req, res, next) => {
  res.locals.companyId = req.session.companyId;
  next();
});

app.set("view engine", "twig")

app.get("/", (req, res) => res.redirect("/login"))

app.use(authRoute)
app.use(employeeRoute)
app.use(computerRoute)
app.use(dashboardRoute)


app.listen(3000, () => {
  console.log("🚀 http://localhost:3000")
})
