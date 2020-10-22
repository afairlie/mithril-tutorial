let m = require('mithril')
const User = require('../models/User')

module.exports = {
  oninit: function(vnode) {
    User.load(vnode.attrs.id)
  },
  view: function() {
    return m("form", [
      m("label.label", "First name"),
      m(`input.input[type=text][placeholder=${User.current.firstName}]`),
      m("label.label", "Last name"),
      m(`input.input[placeholder=${User.current.lastName}]`),
      m("button.button[type=button]", "Save"),
    ])
  }
}