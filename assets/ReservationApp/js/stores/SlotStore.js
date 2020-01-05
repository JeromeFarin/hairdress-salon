import { observable, autorun, observe } from 'mobx'
import moment from 'moment'
import dateStore from '../../../store/DateStore'
import staffStore from './StaffStore'
import unavailabilityStore from './UnavailabilityStore'

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
    observe(unavailabilityStore, () => {
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
                    this.addSlot('0', staff, d, dateTimeStart, dateTimeEnd)
                    dateTimeStart = dateTimeEnd
                  } else {
                    this.addSlot('0', staff, d, dateTimeStart, moment(unavailability.end).format())
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
                      this.addSlot('0', staff, d, moment(unavailability.start).format(), dateTimeEnd)
                      dateTimeStart = dateTimeEnd
                    } else {
                      this.addSlot('0', staff, d, moment(unavailability.start).format(), moment(unavailability.end).format())
                      dateTimeStart = moment(unavailability.end).format()
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
  }
}

export default new SlotStore()
