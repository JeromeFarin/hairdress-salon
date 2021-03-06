import React, { Component } from 'react'
import '../../../css/staff_list.css'
import { observer, inject } from 'mobx-react'

@inject('staffStore')
@observer
class StaffList extends Component {
  componentDidMount () {
    this.props.staffStore.loadStaffs()
  }

  handleClick = (event) => {
    this.props.staffStore.staffUpdate(event.target.value)
  }

  handleColor (staff) {
    if (staff.selected) {
      return { backgroundColor: staff.color, opacity: 1 }
    }
    return { backgroundColor: staff.color, opacity: 0.4 }
  }

  render () {
    return (
      <ul>
        {this.props.staffStore.staffs.map((staff) => (
          <li
            key={staff.id}
            style={this.handleColor(staff)}
            onClick={this.handleClick}
            value={staff.id}
            className={staff.selected ? 'selected' : ''}
          >
            {staff.first_name}
          </li>
        ))}
      </ul>
    )
  }
}

export default StaffList
