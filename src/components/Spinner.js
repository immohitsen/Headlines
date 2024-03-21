import React, { Component } from 'react'
import loading from './loader.gif'


export class Spinner extends Component {
  render() {
    return (
      <div className="text-center" style={{height:"10vh"}}>
        <img src={loading} width="50px" alt="loading" />
      </div>
    )
  }
}

export default Spinner