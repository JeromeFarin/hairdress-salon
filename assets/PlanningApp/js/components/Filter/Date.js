import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'

@inject('dateStore', 'modalStore')
@observer
class Date extends Component {
  handleAfter = e => {
    this.props.dateStore.addWeek()
  }

  handleBefore = e => {
    this.props.dateStore.removeWeek()
  }

  handleMonth = e => {
    this.props.modalStore.toggleMonthModal()
  }

  render () {
    return (
      <div className='d-flex col-3 justify-content-between'>
        <FontAwesomeIcon onClick={this.handleBefore} icon={faCaretSquareLeft} />
        <p className='btn btn-primary' onClick={this.handleMonth}>Week {this.props.dateStore.date.week()}</p>
        <FontAwesomeIcon onClick={this.handleAfter} icon={faCaretSquareRight} />
      </div>
    )
  }
}

export default Date