const express = require('express')
const session = require('express-session')
const usePassport = require('./config/passport')
const exphbs = require('express-handlebars')
const flash = require('connect-flash')
const app = express()
const methodOverride = require('method-override') 
var MemoryStore = require('memorystore')(session)
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const routes = require('./routes')
require('./config/mongoose')
const port = process.env.port


app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.engine('handlebars', 
  exphbs({ 
    defaultLayout: 'main',
    helpers: require('./config/handlebars-helpers')
  })
)
app.set('view engine', 'handlebars')
app.use(methodOverride('_method'))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 86400000 },
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
}))
usePassport(app)
app.use(flash())
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_messages = req.flash('success_messages')  
  res.locals.error_messages = req.flash('error_messages')  
})

app.use(routes)

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}.`)
})
