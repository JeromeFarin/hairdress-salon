import React, { Component } from "react";
import Cell from "./Cell";
import { inject, observer } from 'mobx-react'

@inject('slotStore','staffStore')
@observer
class Column extends Component {
  render () {
    const values = this.props.slotStore.slots.filter(slot => slot.staff.id === this.props.staff.id)
    
    return (
      <div className='text-center w-100'>
        <p style={{ fontWeight: 'bold' }}>{this.props.staff.first_name}</p>
        <div className='cell_container' style={{ height: '800px', zIndex: '1', position: 'relative' }}>
          {values.map((value,i) => {
            return <Cell key={i} values={value}/>
          })}
        </div>
      </div>
    )
  }
}

export default Column