import m from 'mithril'

import UserList from "./views/UserList"
import UserForm from "./views/UserForm"
import Layout from "./views/Layout"

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