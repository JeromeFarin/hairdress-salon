import { observable, autorun, observe, computed, runInAction } from 'mobx'
import moment from 'moment'
import dateStore from './DateStore'
import staffStore from './StaffStore'
import unavailabilityStore from './UnavailabilityStore'
import reservationStore from './ReservationStore'

class SlotStore {
  @observable slots = []

  slotsId = 0

  addSlot (type, staff, day, start, end) {
    const size = this.getSize(start, end)
    this.slotsId = this.slotsId + 1
    const id = this.slotsId

    this.slots.push({
      id,
      type,
      staff,
      day,
      start,
      end,
      size
    })
  }

  getSize (start, end) {
    const dateTimeStart = moment(moment(start).format('YYYY-MM-DD') + ' ' + dateStore.opened.start).valueOf()
    const dateTimeEnd = moment(moment(end).format('YYYY-MM-DD') + ' ' + dateStore.opened.end).valueOf()

    return ((moment(end).valueOf() - moment(start).valueOf()) * 100) / (dateTimeEnd - dateTimeStart)
  }

  getSlot (id) {
    return this.slots.find((slot) => slot.id === parseInt(id, 10))
  }

  loadSlots () {
    autorun(() => {
      observe(unavailabilityStore, () => {
        observe(reservationStore, () => {
          this.slots = []
          
          for (let d = 1; d < 7; d += 1) {
            const day = dateStore.date.day(d).format('YYYY-MM-DD')
            staffStore.staffSelected().map((staff) => {
              let dateTimeStart = moment(day + ' ' + dateStore.opened.start).format()
              const dateTimeEnd = moment(day + ' ' + dateStore.opened.end).format()
              // if no unavailabilities set staff available for all at day
              if (unavailabilityStore.unavailabilities.length > 0) {
                // start unavailabilities loop for staff
                unavailabilityStore.unavailabilities.filter((unavailability) => unavailability.staff === staff.id).map((unavailability) => {
                  // check if unavailability start < end && gStart = gEnd
                  if (moment(unavailability.start).format() < moment(unavailability.end).format()) {
                    // unavailability start <= gStart && unavailability end > gStart
                    if (moment(unavailability.start).format() <= dateTimeStart && moment(unavailability.end).format() > dateTimeStart) {
                      // unavailability end > gEnd
                      if (moment(unavailability.end).format() >= dateTimeEnd) {
                        this.addSlot('2', staff, d, dateTimeStart, dateTimeEnd)
                        dateTimeStart = dateTimeEnd
                      } else {
                        this.addSlot('2', staff, d, dateTimeStart, moment(unavailability.end).format())
                        dateTimeStart = moment(unavailability.end).format()
                      }
                    // gStart < gEnd && unavailability end > gStart
                    } else if (dateTimeStart < dateTimeEnd && moment(unavailability.end).format() > dateTimeStart) {
                      // unavailability start > gEnd
                      if (moment(unavailability.start).format() > dateTimeEnd) {
                        this.addSlot('1', staff, d, dateTimeStart, dateTimeEnd)
                        dateTimeStart = dateTimeEnd
                      } else {
                        this.addSlot('1', staff, d, dateTimeStart, moment(unavailability.start).format())
                        dateTimeStart = moment(unavailability.start).format()
                      }
                      // unavailability end > gEnd
                      if (dateTimeStart < dateTimeEnd) {
                        if (moment(unavailability.end).format() > dateTimeEnd) {
                          this.addSlot('2', staff, d, moment(unavailability.start).format(), dateTimeEnd)
                          dateTimeStart = dateTimeEnd
                        } else {
                          this.addSlot('2', staff, d, moment(unavailability.start).format(), moment(unavailability.end).format())
                          dateTimeStart = moment(unavailability.end).format()
                        }
                      }
                    }
                  }
                })
              }
    
              // if no reservations set staff available for all at day
              if (reservationStore.reservations.length > 0) {
                // start reservations loop for staff
                reservationStore.reservations.filter((reservation) => reservation.staff === staff.id).map((reservation) => {
                  // check if reservation start < end && gStart = gEnd
                  if (moment(reservation.start).format() < moment(reservation.end).format()) {
                    // reservation start <= gStart && reservation end > gStart
                    if (moment(reservation.start).format() <= dateTimeStart && moment(reservation.end).format() > dateTimeStart) {
                      // reservation end > gEnd
                      if (moment(reservation.end).format() >= dateTimeEnd) {
                        this.addSlot('3', staff, d, dateTimeStart, dateTimeEnd)
                        dateTimeStart = dateTimeEnd
                      } else {
                        this.addSlot('3', staff, d, dateTimeStart, moment(reservation.end).format())
                        dateTimeStart = moment(reservation.end).format()
                      }
                    // gStart < gEnd && reservation end > gStart
                    } else if (dateTimeStart < dateTimeEnd && moment(reservation.end).format() > dateTimeStart) {
                      // reservation start > gEnd
                      if (moment(reservation.start).format() > dateTimeEnd) {
                        this.addSlot('1', staff, d, dateTimeStart, dateTimeEnd)
                        dateTimeStart = dateTimeEnd
                      } else {
                        this.addSlot('1', staff, d, dateTimeStart, moment(reservation.start).format())
                        dateTimeStart = moment(reservation.start).format()
                      }
                      // reservation end > gEnd
                      if (dateTimeStart < dateTimeEnd) {
                        if (moment(reservation.end).format() > dateTimeEnd) {
                          this.addSlot('3', staff, d, moment(reservation.start).format(), dateTimeEnd)
                          dateTimeStart = dateTimeEnd
                        } else {
                          this.addSlot('3', staff, d, moment(reservation.start).format(), moment(reservation.end).format())
                          dateTimeStart = moment(reservation.end).format()
                        }
                      }
                    }
                  }
                })
              }
    
              if (dateTimeStart !== dateTimeEnd) {
                this.addSlot('1', staff, d, dateTimeStart, dateTimeEnd)
                dateTimeStart = dateTimeEnd
              }
            })
          }
        })
      })
    })
  }
}

export default new SlotStore()
