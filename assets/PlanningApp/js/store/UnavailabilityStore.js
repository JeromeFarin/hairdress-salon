import { observable, observe } from 'mobx'
import dateStore from '../../../store/DateStore'

class UnavailabilityStore {
  @observable unavailabilities = []

  loadUnavailabilities () {
    observe(dateStore, () => {
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
          this.unavailabilities = JSON.parse(data)
        })
        .catch((error) => {
          console.error(`loadUnavailabilities : ${error.message}`)
        })
    })
  }
}

export default new UnavailabilityStore()
