import { observable, runInAction } from 'mobx'
import LoadStore from './LoadStore'

class UserStore extends LoadStore {
  @observable users = []

  @observable user = 0

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
          this.loadValues(this.users, [
            {name: 'first_name', type: 'text'},
            {name: 'last_name', type: 'text'},
            {name: 'color', type: 'color'},
            {name: 'hire_date', type: 'date'},
            {name: 'roles', type: 'button'}
          ])
        })
        .catch((error) => {
          console.error(error.message)
        })
    })
  }
}

export default new UserStore()
