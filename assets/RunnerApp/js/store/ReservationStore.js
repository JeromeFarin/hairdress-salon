import { observable, runInAction, observe } from 'mobx'
import dateStore from '../../../store/DateStore'
import moment from 'moment'

class ReservationStore {
  @observable reservations = []

  reservation = []

  noLoaded = []

  loadReservations () {
    observe(dateStore, () => {
      window.fetch('/api/reservations', {
        method: 'POST',
        body: JSON.stringify({
          start: dateStore.day.startOf('day').format(),
          end: dateStore.day.endOf('day').format()
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          this.orderReservations(JSON.parse(data),'reservation')
        })
        .catch((error) => {
          console.error(`loadReservations : ${error.message}`)
        })
    })
  }

  orderReservations (data,type) {
    runInAction(() => {
      data.map((elt) => {
        elt.type = type
        this.noLoaded.push(elt)
      })
      this.reservations = this.noLoaded.slice().sort((a, b) => moment(a.start).valueOf() - moment(b.start).valueOf())
    })
  }
}

export default new ReservationStore()
