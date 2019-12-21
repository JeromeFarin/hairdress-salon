import { observable, runInAction } from 'mobx'
import LoadStore from './LoadStore'

class PrestationStore extends LoadStore {
  @observable prestations = []

  load () {
    runInAction(() => {
      window.fetch('/api/prestations', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          this.prestations = JSON.parse(data)
          this.loadValues(this.prestations, [
            {name: 'name', type: 'text'},
            {name: 'make_time', type: 'text'},
            {name: 'price_ht', type: 'number'},
            {name: 'active', type: 'checkbox'},
          ])
        })
        .catch((error) => {
          console.error(error.message)
        })
    })
  }
}

export default new PrestationStore()
