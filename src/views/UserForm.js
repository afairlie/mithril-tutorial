let m = require('mithril')
const User = require('../models/User')

module.exports = {
  oninit: function(vnode) {
    User.load(vnode.attrs.id)
  },
  view: function() {
    return m("form", {
      onsubmit: function(e){
        e.preventDefault()
        User.save()
      }
    },
    [
      m("label.label", "First name"),
      // controlled input
      m(`input.input[type=text][placeholder=${User.current.firstName}]`, {
        oninput: function(e) { User.current.firstName = e.target.value },
        value: User.current.firstName
      }),
      m("label.label", "Last name"),
      m(`input.input[placeholder=${User.current.lastName}]`, {
        oninput: function(e) { User.current.lastName = e.target.value },
        value: User.current.lastName
      }),
      m("button.button[type=submit]", "Save"),
    ])
  }
}