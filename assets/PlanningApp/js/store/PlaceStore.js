import { observable, runInAction } from 'mobx'
import moment from 'moment'
import slotStore from './SlotStore'
import reserveStore from './ReserveStore'

class PlaceStore {
  @observable place = []

  @observable places = []

  @observable slotId = 0

  loadPlaces () {
    runInAction(() => {
      const { ...slot } = slotStore.getSlot(this.slotId)
      const availableTime = moment(slot.end).valueOf() - (reserveStore.time * 1000)
      this.places = []
  
      for (let i = moment(slot.start).valueOf(); i < availableTime; i += 300000) {
        this.places.push({
          id: i,
          start: moment(i),
          end: moment(i + (reserveStore.time * 1000)),
          staff: slot.staff
        })
      }
    })
  }

  setPlace (id) {
    runInAction(() => {
      const {...place} = this.places.find((place) => parseInt(place.id, 10) === parseInt(id, 10))
      place.prestations = {id: 1, price: '1'}
      this.place = place

    })
  }
}

export default new PlaceStore()
