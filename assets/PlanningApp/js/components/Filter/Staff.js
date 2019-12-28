import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('staffStore')
@observer
class Staff extends Component {
  handleClick = e => {
    this.props.staffStore.toggleSelected(e.target.dataset.id)
  }

  render () {
    return (
      <div className='col-3'>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {this.props.staffStore.staffs.map(staff => {
            return (
              <li 
                key={staff.id}
                style={{
                  backgroundColor: staff.color,
                  opacity: staff.selected ? 1 : 0.4,
                  borderRadius: '5px',
                  margin: '3px',
                  textAlign: 'center',
                  boxShadow: '0 0 5px #5e3718',
                  cursor: 'pointer'
                }}
                onClick={this.handleClick}
                data-id={staff.id}
                className='staff'
              >
                {staff.first_name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Staff