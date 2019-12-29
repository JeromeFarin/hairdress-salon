import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Column from './Calendar/Column'
import moment from 'moment'

@inject('unavailabilityStore', 'slotStore', 'dateStore', 'userStore', 'placeStore', 'modalStore')
@observer
class Calendar extends Component {
  componentDidMount () {
    this.props.dateStore.loadOpened()
    this.props.slotStore.loadSlots()
    this.props.unavailabilityStore.load()
    this.props.userStore.loadUser()

    if (sessionStorage.getItem('place') !== null) {
      this.props.modalStore.togglePrestationModal()
      this.props.modalStore.toggleConfirmModal()
      this.props.placeStore.setPlaceWithStorage()
    }
  }

  render () {
    const columns = []

    for (let d = 1; d < 7; d += 1) {
      moment(this.props.dateStore.date).day(d)
      columns.push(moment(this.props.dateStore.date).day(d))
    }

    return (
      <div className='col-12 d-flex'>
        {columns.map((column,i) => {
          return <Column key={i} date={column} />
        })}
      </div>
    )
  }
}

export default Calendar
