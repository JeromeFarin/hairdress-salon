import { observable, runInAction } from 'mobx'
import moment from 'moment'
import modalStore from '../../../store/ModalStore'
import userStore from './UserStore'

class EditStore {
  @observable values = {}

  handleChangeRoles (e) {
    userStore.user = e.target.dataset.id
    modalStore.toggleEditRolesModal()
  }

  formatValue (td,th) {
    let value = {}

    if (td.id === 'new') {
      value.style = {border: '1px solid #f00'}
    }

    value.type = th.type
    value['data-id'] = td.id
    value.name = th.name
    value.defaultValue = td[th.name]
    value.placeholder = th.name.charAt(0).toUpperCase() + th.name.slice(1).replace('_', ' ')

    // specific value
    switch (th.name) {
      case 'active':
        value.defaultChecked = td[th.name] ? true : false
        break;
        
      case 'make_time':
        if (td[th.name] == null) {
          value.defaultValue = '00:00:00'
        } else {
          value.defaultValue = moment(td[th.name]).format('HH:mm:ss')
        }
        value.placeholder = 'HH:MM:SS'
        break;

      case 'start':
      case 'end':
      case 'hire_date':
        if (td[th.name] == null) {
          value.defaultValue = ''
        } else {
          value.defaultValue = moment(td[th.name]).format('YYYY-MM-DD')
        }
        break;
        
      case 'color':
        if (td[th.name] == null) {
          value.defaultValue = '#000'
        }
        break;

      case 'roles':
        value.onClick = this.handleChangeRoles
        break;

      case 'first_name':
      case 'last_name':
        value.disabled = true
        break;
    }

    return value
  }

  updateValues (e, tds) {
    runInAction(() => {
      const name = e.target.name
      const id = e.target.dataset.id
      let value = e.target.value
      let old_value = tds.find((td) => td.id == id)[name]
  
      // format specific field
      if (name == 'make_time') {
        old_value = moment(old_value).format('HH:mm:ss')
      }
  
      if (name == 'active') {
        value = e.target.checked
        old_value = old_value ? true : false
      }
  
      // update values
      if (value != old_value) {
        if (this.values[id]) {
          Object.assign(this.values[id], {[name]: value});
        } else {
          Object.assign(this.values, {[id]:{[name]: value}});
        }
        $(e.target).css('color', '#ffa500')
      } else {
        delete this.values[id][name]
        if (Object.keys(this.values[id]).length == 0) {
          delete this.values[id]
        }
        $(e.target).css('color', '#000')
      }
    })
  }

  saveValues (type) {
    runInAction(() => {
      window.fetch('/admin/api/manager', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({type: type, value: this.values})
      })
        .then((response) => response.json())
        .then((data) => {
          if (JSON.parse(data) == true) {
            location.reload()
          }
        })
        .catch((error) => {
          console.error(error.message)
        })
    })
  }
}

export default new EditStore()
