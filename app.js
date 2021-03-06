const express = require('express')
const session = require('express-session')
const usePassport = require('./config/passport')
const exphbs = require('express-handlebars')
const flash = require('connect-flash')
const app = express()
const methodOverride = require('method-override')
const routes = require('./routes')
const cookieParser = require('cookie-parser');
const MemoryStore = require('session-memory-store')(session);
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
require('./config/mongoose')
const PORT = process.env.PORT || 3000
const host = '0.0.0.0'
app.engine('handlebars',
  exphbs({
    defaultLayout: 'main',
    helpers: require('./config/handlebars-helpers')
  })
)
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(cookieParser())
app.use(session({
  // cookie: {
  //   maxAge: 60000,
  //   secure: true
  // },
  store: new MemoryStore(),
  secret: 'ThisIsMySecret',
  // secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))
usePassport(app)
app.use(flash())
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_messages = req.flash('success_messages')  // 設定 success_msg 訊息
  res.locals.error_messages = req.flash('error_messages')  // 設定 warning_msg 訊息
  next()
})

app.use(routes)

app.listen(PORT, host, () => {
  console.log(`The Express server is running on http://localhost:${PORT}.`)
})
