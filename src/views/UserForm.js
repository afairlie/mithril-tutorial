import m from 'mithril'
import {User} from '../models/User'

export default {
  oninit: function(vnode) {
    User.load(vnode.attrs.id)
  },
  view: function() {
    console.log('UserForm')
    return m("form", {
      onsubmit: function(e){
        e.preventDefault()
        User.save()
        .then(function(res){
          m.route.set('/list')
        })   
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