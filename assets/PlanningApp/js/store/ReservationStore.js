import { observable, autorun } from 'mobx'
import dateStore from './DateStore'

class ReservationStore {
  @observable reservations = []

  loadReservations () {
    autorun(() => {
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
          this.reservations = JSON.parse(data)
        })
        .catch((error) => {
          console.error(`loadReservations : ${error.message}`)
        })
    })
  }
}

export default new ReservationStore()
