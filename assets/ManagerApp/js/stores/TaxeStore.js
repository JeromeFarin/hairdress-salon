import { observable, runInAction } from 'mobx'
class TaxeStore {
  @observable taxes = []

  loadTaxes () {
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
        })
        .catch((error) => {
          console.error(error.message)
        })
    })
  }
}

export default new TaxeStore()
