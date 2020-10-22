let m = require('mithril')
let User = require("../models/User")

module.exports = {
  oninit: User.loadList,
  view: function() {
    return m('.user-list', User.list.map(user => {
      return m(m.route.Link, {
        class: 'user-list-item',
        href: `/edit/${user.id}`,
      }, `${user.firstName} ${user.lastName}`)
    }))
  }
}