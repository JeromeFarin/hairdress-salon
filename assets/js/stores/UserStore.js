import { observable, runInAction } from 'mobx'
import errorStore from './ErrorStore'

class UserStore {
  @observable connectedUser = ''

  loadUser () {
    runInAction(() => {
      window.fetch('/api/user', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          this.connectedUser = JSON.parse(data)
        })
        .catch((error) => {
          console.log(error.message)
          errorStore.updateErrors()
        })
    })
  }

  flashUser (request) {
    runInAction(() => {
      window.fetch('/register/flash', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(request)
      })
        .then((response) => response.json())
        .then((data) => {
          this.connectedUser = data
        })
        .catch((error) => {
          console.log(error.message)
          errorStore.updateErrors()
        })
    })
  }
}

export default new UserStore()
