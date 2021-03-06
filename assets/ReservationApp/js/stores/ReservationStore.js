import { runInAction } from 'mobx'
import errorStore from './ErrorStore'
import placeStore from './PlaceStore'
import userStore from './UserStore'
import unavailabilityStore from './UnavailabilityStore'
import moment from 'moment'

class ReservationStore {
  reserve () {
    runInAction(() => {
      const request = {}
      const { ...place } = placeStore.place
      request.start = moment(place.start).format()
      request.end = moment(place.end).format()
      request.staff_id = place.staff.id
      request.client_id = userStore.connectedUser.id
      request.prestations = []
      place.prestations.map((prestation) => {
        request.prestations.push([prestation.id, prestation.price_ht])
      })
  
      window.fetch('/api/reserve', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(request)
      })
        .then((response) => response.json())
        .then((data) => {
          const result = JSON.parse(data)
          if (result !== true) {
            alert(result)
          } else {
            alert('Your booking will be accepted')
          }
          sessionStorage.removeItem('place')
          unavailabilityStore.loadReservations()
        })
        .catch((error) => {
          console.error(error.message)
          errorStore.updateErrors()
        })
    })
  }
}

export default new ReservationStore()
