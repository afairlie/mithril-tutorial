let m = require("mithril")

let UserList = require("./views/UserList")
let UserForm = require("./views/UserForm")
let Layout = require("./views/Layout")

import './style.css'

m.route(document.body, "/list", {
    "/list": {
        render: function() {
            return m(Layout, m(UserList))
        }
    },
    "/edit/:id": {
        render: function(vnode) {
            return m(Layout, m(UserForm, {id: vnode.attrs.id}))
        }
    },
})