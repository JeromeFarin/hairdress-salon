import React, { Component } from "react";
import Cell from "./Cell";
import { inject, observer } from 'mobx-react'

@inject('slotStore','staffStore')
@observer
class Column extends Component {
  render () {
    const value = this.props.slotStore.slots.filter(slot => slot.day === this.props.date.day())
    
    return (
      <div className='text-center col-2'>
        <p style={{ fontWeight: 'bold' }}>{this.props.date.format('dd. Do MMM. YYYY')}</p>
        <div className='cell_container'>
          {this.props.staffStore.staffSelected().map((staff,i) => {
            const value_by_staff = value.filter(value => value.staff.id === staff.id)
            return <Cell key={i} interval={i} values={value_by_staff}/>
          })}
        </div>
      </div>
    )
  }
}

export default Column