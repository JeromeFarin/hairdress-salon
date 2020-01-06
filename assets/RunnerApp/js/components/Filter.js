import React, { Component } from "react";
import Staff from "./Filter/Staff";
import Date from "./Filter/Date";

class Filter extends Component {
  render() {
    return (
      <div className='d-flex justify-content-around col-12 align-items-center'>
        <Staff/>
        <Date/>
      </div>
    )
  }
}

export default Filter