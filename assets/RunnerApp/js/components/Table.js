import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Column from "./Table/Column";

@inject('dateStore','staffStore')
@observer
class Table extends Component {
  render () {
    return (
      <div className='col-12 w-100 d-flex justify-content-arround'>
        {this.props.staffStore.staffSelected().map(staff => {
          return <Column key={staff.id} staff={staff} />
        })}
      </div>
    )
  }
}

export default Table