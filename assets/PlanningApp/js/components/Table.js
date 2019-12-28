import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import moment from "moment";
import Column from "./Table/Column";

@inject('dateStore','slotStore','unavailabilityStore','reservationStore')
@observer
class Table extends Component {
  render () {
    const columns = []
    for (let i = 1; i < 7; i++) {
      moment(this.props.dateStore.date).day(i)
      columns.push(moment(this.props.dateStore.date).day(i))
    }
    return (
      <div className='col-12 w-100 d-flex justify-content-arround'>
        {columns.map((column,i) => {
          return <Column key={i} date={column} />
        })}
      </div>
    )
  }
}

export default Table