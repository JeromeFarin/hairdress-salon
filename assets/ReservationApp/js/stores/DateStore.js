import { observable, runInAction } from 'mobx'
import moment from 'moment'

class DateStore {
    @observable date = moment()

    @observable opened = {
      'start': '10:00:00',
      'end': '15:00:00'
    }

    loadOpened () {
      runInAction (() => {
        window.fetch('/api/opened', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        })
          .then((response) => response.json())
          .then((data) => {
            this.opened = data
          })
          .catch((error) => {
            console.error(`loadOpened : ${error.message}`)
            errorStore.updateErrors()
          })
      })
    }

    addWeek () {
      runInAction(() => {
        this.date = moment().week(this.date.week() + 1)
      })
    }

    removeWeek () {
      runInAction(() => {
        this.date = moment().week(this.date.week() - 1)
      })
    }

    selectMonth (month) {
      this.date = moment().month(month)
    }
}

export default new DateStore()
