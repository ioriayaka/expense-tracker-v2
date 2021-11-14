module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    req.flash('error_messages', '請先登入才能使用!')
    res.redirect('/users/login')
  }
}