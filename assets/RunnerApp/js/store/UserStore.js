import { observable, runInAction } from 'mobx'

class UserStore {
  @observable users = []

  load () {
    runInAction(() => {
      window.fetch('/api/users', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          this.users = JSON.parse(data)
        })
        .catch((error) => {
          console.error(error.message)
        })
    })
  }

  findName (id) {
    return this.users.find(user => user.id == id)
  }
}

export default new UserStore()
