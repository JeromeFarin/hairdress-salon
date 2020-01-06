import { observable, autorun, runInAction, observe } from 'mobx'
import moment from 'moment'
import dateStore from '../../../store/DateStore'

class ReservationStore {
  @observable reservations = []

  reservation = []

  loadReservations () {
    runInAction(() => {
      observe(dateStore, () => {
        window.fetch('/api/reservations/v2', {
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
            this.reservations = JSON.parse(data)
          })
          .catch((error) => {
            console.error(`loadReservations : ${error.message}`)
          })
      })
    })
  }
}

export default new ReservationStore()
