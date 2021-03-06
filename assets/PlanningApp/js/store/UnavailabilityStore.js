import { observable, runInAction, observe } from 'mobx'
import moment from 'moment'
import dateStore from '../../../store/DateStore'

class UnavailabilityStore {
  @observable unavailabilities = []

  noLoaded = []

  load () {
    observe(dateStore, () => {
      this.noLoaded = []
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
          this.orderUnavailabilities(JSON.parse(data),'unavailability')
        })
        .catch((error) => {
          console.error(`loadUnavailabilities : ${error.message}`)
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
          this.orderUnavailabilities(JSON.parse(data),'reservation')
        })
        .catch((error) => {
          console.error(`loadReservations : ${error.message}`)
        })
    })
  }

  orderUnavailabilities (data,type) {
    runInAction(() => {
      data.map((elt) => {
        elt.type = type
        this.noLoaded.push(elt)
      })
      this.unavailabilities = this.noLoaded.slice().sort((a, b) => moment(a.start).valueOf() - moment(b.start).valueOf())
    })
  }
}

export default new UnavailabilityStore()
