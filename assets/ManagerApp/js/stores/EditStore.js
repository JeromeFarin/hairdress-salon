import { observable, runInAction } from 'mobx'
import moment from 'moment'
class EditStore {
  @observable values = {}

  formatValue (td,th) {
    let value = {}

    if (th === 'active') {
      value.type = 'checkbox'
      value.defaultChecked = td[th] ? true : false
      value.defaultValue = td[th]
    } else if (th === 'make_time') {
      value.type = 'text'
      value.defaultValue = moment(td[th]).format('HH:mm:ss')
      value.placeholder = 'HH:MM:SS'
    } else if (th === 'price_ht') {
      value.type = 'number'
      value.defaultValue = td[th]
      value.placeholder = th.charAt(0).toUpperCase() + th.slice(1).replace('_', ' ')
    } else if (th === 'start' || th == 'end') {
      value.type = 'date'
      value.defaultValue = moment(td[th]).format('YYYY-MM-DD')
    } else {
      value.type = 'text'
      value.defaultValue = td[th]
      value.placeholder = th.charAt(0).toUpperCase() + th.slice(1).replace('_', ' ')
    }
    value['data-id'] = td.id
    value.name = th

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
