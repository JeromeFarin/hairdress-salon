import { observable, autorun, runInAction, observe } from 'mobx'
import moment from 'moment'
import dateStore from '../../../store/DateStore'
import errorStore from './ErrorStore'

class UnavailabilityStore {
  @observable unavailabilities = []

  noLoaded = []

  load () {
    observe(dateStore, () => {
      this.loadUnavailabilities()
      this.loadReservations()
    })
  }

  loadUnavailabilities () {
    runInAction(() => {
      window.fetch('/api/unavailabilities', {
        method: 'POST',
        body: JSON.stringify({
          start: dateStore.date.day(1).startOf('day').format(),
          end: dateStore.date.day(6).endOf('day').format()
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          this.orderUnavailabilities(JSON.parse(data))
        })
        .catch((error) => {
          console.error(`loadUnavailabilities : ${error.message}`)
          errorStore.updateErrors()
        })
    })
  }

  loadReservations () {
    runInAction(() => {
      window.fetch('/api/reservations', {
        method: 'POST',
        body: JSON.stringify({
          start: dateStore.date.day(1).startOf('day').format(),
          end: dateStore.date.day(6).endOf('day').format()
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          this.orderUnavailabilities(JSON.parse(data))
        })
        .catch((error) => {
          console.error(`loadReservations : ${error.message}`)
          errorStore.updateErrors()
        })
    })
  }

  orderUnavailabilities (data) {
    runInAction(() => {
      data.map((elt) => {
        this.noLoaded.push(elt)
      })
      this.unavailabilities = this.noLoaded.slice().sort((a, b) => moment(a.start).valueOf() - moment(b.start).valueOf())
    })
  }
}

export default new UnavailabilityStore()
