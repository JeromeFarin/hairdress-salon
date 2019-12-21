import { observable, runInAction } from 'mobx'
import LoadStore from './LoadStore'

class TaxeStore extends LoadStore {
  @observable taxes = []

  load () {
    runInAction(() => {
      window.fetch('/api/taxes', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          this.taxes = JSON.parse(data)
          this.loadValues(this.taxes, [
            {name: 'value', type: 'text'},
            {name: 'start', type: 'date'},
            {name: 'end', type: 'date'}
          ])
        })
        .catch((error) => {
          console.error(error.message)
        })
    })
  }
}

export default new TaxeStore()
