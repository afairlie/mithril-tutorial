let m = require('mithril')
let UserList = require("./views/UserList")
let UserForm = require('./views/UserForm')

import './style.css'

m.route(document.body, "/list", {
  "/list": UserList,
  "/edit/:id": UserForm,
})