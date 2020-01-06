import { observable, observe } from 'mobx'
import moment from 'moment'
import dateStore from '../../../store/DateStore'
import staffStore from './StaffStore'
import reservationStore from './ReservationStore'
import userStore from './UserStore'

class SlotStore {
  @observable slots = []

  @observable selected_slot = 0

  slotsId = 0

  addSlot (type, staff, start, end, reservation) {
    const size = this.getSize(start, end)
    this.slotsId = this.slotsId + 1
    let id = this.slotsId
    this.slots.push({id,type,staff,start,end,size,reservation})
  }

  getSize (start, end) {
    const dateTimeStart = moment(moment(start).format('YYYY-MM-DD') + ' ' + dateStore.opened.start).valueOf()
    const dateTimeEnd = moment(moment(end).format('YYYY-MM-DD') + ' ' + dateStore.opened.end).valueOf()

    return ((moment(end).valueOf() - moment(start).valueOf()) * 100) / (dateTimeEnd - dateTimeStart)
  }

  getSlot (id) {
    return this.slots.find((slot) => parseInt(slot.id) === parseInt(id, 10))
  }

  getSelectedSlot () {
    return this.slots.find((slot) => parseInt(slot.id) === parseInt(this.selected_slot, 10))
  }

  loadSlots () {
    observe(reservationStore, () => {
      this.slots = []
      
      const day = dateStore.day.format('YYYY-MM-DD')
      staffStore.staffSelected().map((staff) => {
        let dateTimeStart = moment(day + ' ' + dateStore.opened.start).format()
        const dateTimeEnd = moment(day + ' ' + dateStore.opened.end).format()
        // if no reservations set staff available for all at day
        if (reservationStore.reservations.length > 0) {
          // start reservations loop for staff
          reservationStore.reservations.filter((reservation) => reservation.staff.id === staff.id).map((reservation) => {
            // check if reservation start < end && gStart = gEnd
            if (moment(reservation.start).format() < moment(reservation.end).format()) {
              // reservation start <= gStart && reservation end > gStart
              if (moment(reservation.start).format() <= dateTimeStart && moment(reservation.end).format() > dateTimeStart) {
                // reservation end > gEnd
                if (moment(reservation.end).format() >= dateTimeEnd) {
                  this.addSlot('2', staff, dateTimeStart, dateTimeEnd, reservation)
                  dateTimeStart = dateTimeEnd
                } else {
                  this.addSlot('2', staff, dateTimeStart, moment(reservation.end).format(), reservation)
                  dateTimeStart = moment(reservation.end).format()
                }
              // gStart < gEnd && reservation end > gStart
              } else if (dateTimeStart < dateTimeEnd && moment(reservation.end).format() > dateTimeStart) {
                // reservation start > gEnd
                if (moment(reservation.start).format() > dateTimeEnd) {
                  this.addSlot('1', staff, dateTimeStart, dateTimeEnd)
                  dateTimeStart = dateTimeEnd
                } else {
                  this.addSlot('1', staff, dateTimeStart, moment(reservation.start).format())
                  dateTimeStart = moment(reservation.start).format()
                }
                // reservation end > gEnd
                if (dateTimeStart < dateTimeEnd) {
                  if (moment(reservation.end).format() > dateTimeEnd) {
                    this.addSlot('2', staff, moment(reservation.start).format(), dateTimeEnd, reservation)
                    dateTimeStart = dateTimeEnd
                  } else {
                    this.addSlot('2', staff, moment(reservation.start).format(), moment(reservation.end).format(), reservation)
                    dateTimeStart = moment(reservation.end).format()
                  }
                }
              }
            }
          })
        }

        if (dateTimeStart !== dateTimeEnd) {
          this.addSlot('1', staff, dateTimeStart, dateTimeEnd)
          dateTimeStart = dateTimeEnd
        }
      })
    })
  }
}

export default new SlotStore()
