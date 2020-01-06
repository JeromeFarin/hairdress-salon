import { observable, runInAction } from 'mobx'

class StatusStore {
  @observable status = []

  load () {
    runInAction(() => {
      window.fetch('/api/status', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          this.status = JSON.parse(data)
        })
        .catch((error) => {
          console.error(error.message)
        })
    })
  }
}

export default new StatusStore()
