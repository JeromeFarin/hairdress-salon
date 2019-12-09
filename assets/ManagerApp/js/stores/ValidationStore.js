import { observable, runInAction } from 'mobx'

class ValidationStore {
  @observable errors = {}

  validate (e) {
    runInAction(() => {
      const name = e.target.name
      const value = e.target.value
      const id = e.target.dataset.id
      
      if (value == '') {
        $(e.target).attr({
          style: 'border: 1px solid #f00 !important',
          title: 'Required'
        })
        this.addError(`${id}_${name}`, 'Required')
        return
      } else {
        this.removeError(`${id}_${name}`)
      }

      if (name == 'make_time') {
        if (!value.match(/([0-9]{2}):([0-9]{2}):([0-9]{2})/)) {
          $(e.target).attr({
            style: 'border: 1px solid #f00! important',
            title: 'Format HH:MM:SS'
          })
          this.addError(`${id}_${name}`, 'Format HH:MM:SS')
          return
        } else {
          this.removeError(`${id}_${name}`)
        }
      }
      
      if (!this.errors[`${id}_${name}`]) {
        $(e.target).css('border', 'none')
        $(e.target).css('color', '#000')
      }
    })
  }

  addError (name, message) {
    Object.assign(this.errors, {[name]: message})
  }

  removeError (name) {
    delete this.errors[name]
  }
}

export default new ValidationStore()
