import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import Filter from './components/Filter'
import Calendar from './components/Calendar'
import StaffStore from './stores/StaffStore'
import DateStore from '../../store/DateStore'
import PrestationStore from './stores/PrestationStore'
import UnavailabilityStore from './stores/UnavailabilityStore'
import SlotStore from './stores/SlotStore'
import ModalStore from '../../store/ModalStore'
import Modal from './components/Modal'
import ErrorStore from './stores/ErrorStore'
import PlaceStore from './stores/PlaceStore'
import UserStore from './stores/UserStore'
import ReservationStore from './stores/ReservationStore'

class ReservationApp extends Component {
  render () {
    if (parseInt(ErrorStore.errors, 10) !== 0) {
      return (
        <div className='alert alert-danger'>
          <strong>ERROR !</strong> An error as occurred, please click <a href='/'>here</a> and if persist problem, contact administrator <a href='/contact'>here</a>
        </div>
      )
    }
    return (
      <div>
        <Modal />
        <div id='filter'>
          <Filter />
        </div>
        <div id='calendar'>
          <Calendar />
        </div>
      </div>
    )
  }
}


if (document.getElementById('reservation_app_react') !== null) {
  ReactDOM.render(
    <Provider
      staffStore={StaffStore}
      dateStore={DateStore}
      prestationStore={PrestationStore}
      unavailabilityStore={UnavailabilityStore}
      slotStore={SlotStore}
      modalStore={ModalStore}
      placeStore={PlaceStore}
      userStore={UserStore}
      reservationStore={ReservationStore}
    >
      <ReservationApp />
    </Provider>,
    document.getElementById('reservation_app_react')
  )
}

