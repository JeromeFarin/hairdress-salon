import { observable, runInAction } from 'mobx'
import slotStore from './SlotStore'
import dateStore from '../../../store/DateStore'

class StatusStore {
  @observable status = []

  load () {
    runInAction(() => {
      window.fetch('/api/status', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          this.status = JSON.parse(data)
        })
        .catch((error) => {
          console.error(error.message)
        })
    })
  }

  changeStatus (id) {
    runInAction(() => {
      window.fetch('/api/reservation/status/change', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          reservation_id: slotStore.getSelectedSlot().reservation.id,
          status_id: id
        })
      })
        .then((response) => response.json())
        .then((data) => {
          const result = JSON.parse(data)
          if (result !== true) {
            alert(result)
          }
          dateStore.loadOpened()
        })
        .catch((error) => {
          console.error('changeStatus: ' + error.message)
        })
    })
  }
}

export default new StatusStore()
