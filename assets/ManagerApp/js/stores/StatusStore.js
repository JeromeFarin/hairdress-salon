import { observable, runInAction } from 'mobx'
import LoadStore from './LoadStore'

class StatusStore extends LoadStore {
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
          this.loadValues(this.status, [
            {name: 'name', type: 'text'},
            {name: 'color', type: 'color'}
          ])
        })
        .catch((error) => {
          console.error(error.message)
        })
    })
  }
}

export default new StatusStore()
