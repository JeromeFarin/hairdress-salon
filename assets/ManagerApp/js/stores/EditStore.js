import { observable, runInAction } from 'mobx'
import moment from 'moment'

class EditStore {
  @observable values = {}

  formatValue (td,th) {
    let value = {}

    switch (th.name) {
      case 'active':
        value.defaultChecked = td[th.name] ? true : false
        value.defaultValue = td[th.name]
        break;
        
      case 'make_time':
        value.defaultValue = moment(td[th.name]).format('HH:mm:ss')
        value.placeholder = 'HH:MM:SS'
        break;

      case 'price_ht':
        value.defaultValue = td[th.name]
        value.placeholder = th.name.charAt(0).toUpperCase() + th.name.slice(1).replace('_', ' ')
        break;

      case 'start':
      case 'end':
        value.defaultValue = moment(td[th.name]).format('YYYY-MM-DD')
        break;
    
      default:
        value.defaultValue = td[th.name]
        value.placeholder = th.name.charAt(0).toUpperCase() + th.name.slice(1).replace('_', ' ')
        break;
    }

    value.type = th.type
    value['data-id'] = td.id
    value.name = th.name

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

  saveValues () {
    runInAction(() => {
      console.log(JSON.stringify(this.values))
      // window.fetch('/api/prestations', {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Accept: 'application/json'
      //   }
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     this.prestations = JSON.parse(data)
      //   })
      //   .catch((error) => {
      //     console.error(error.message)
      //   })
    })
  }
}

export default new EditStore()
