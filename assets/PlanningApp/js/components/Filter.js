import React, { Component } from "react";
import Staff from "./Filter/Staff";
import Date from "./Filter/Date";
import Type from "./Filter/Type";
import Reserve from "./Filter/Reserve";

class Filter extends Component {
  render() {
    return (
      <div className='d-flex justify-content-around col-12 align-items-center'>
        <Staff/>
        <Date/>
        <Type/>
        <Reserve/>
      </div>
    )
  }
}

export default Filter