import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Day from './Calendar/Day'

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
    const { date } = this.props.dateStore
    const ths = []
    const tds = []

    for (let d = 1; d < 7; d += 1) {
      const day = date.day(d).startOf('day')
      ths.push(day.format('dddd Do'))
      tds.push(<Day key={Math.random()} day={d} />)
    }

    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              {ths.map((th) => <th key={Math.random()}>{th}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              {tds.map((td) => <td key={Math.random()}>{td}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Calendar
