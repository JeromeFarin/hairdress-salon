import { observable, runInAction } from 'mobx'
class PrestationStore {
  @observable prestations = []

  loadPrestations () {
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
        })
        .catch((error) => {
          console.error(error.message)
        })
    })
  }
}

export default new PrestationStore()
