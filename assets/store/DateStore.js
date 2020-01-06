import { observable, runInAction } from 'mobx'
import moment from 'moment'

class DateStore {
    @observable date = moment()

    @observable day = moment()

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
          })
      })
    }

    addWeek () {
      runInAction(() => {
        this.date = moment(this.date).add(7,'d')
      })
    }

    removeWeek () {
      runInAction(() => {
        this.date = moment(this.date).subtract(7,'d')
      })
    }

    addDay () {
      runInAction(() => {
        this.day = moment(this.day).add(1,'d')
      })
    }

    removeDay () {
      runInAction(() => {
        this.day = moment(this.day).subtract(1,'d')
      })
    }

    selectMonth (month) {
      this.date = moment().month(month)
    }
}

export default new DateStore()
