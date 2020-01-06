import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'

@inject('dateStore')
@observer
class Date extends Component {
  handleAfter = e => {
    this.props.dateStore.addDay()
  }

  handleBefore = e => {
    this.props.dateStore.removeDay()
  }

  render () {
    return (
      <div className='d-flex col-3 justify-content-between'>
        <FontAwesomeIcon onClick={this.handleBefore} icon={faCaretSquareLeft} />
        <p>{this.props.dateStore.day.format('Do MMMM YYYY')}</p>
        <FontAwesomeIcon onClick={this.handleAfter} icon={faCaretSquareRight} />
      </div>
    )
  }
}

export default Date