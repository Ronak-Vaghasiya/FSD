import React, { Component } from 'react'
import "./Pra5b.css"

export  class Pra5b extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Dhara"
        }
        this.change_name = this.change_name.bind(this)
    }
    change_name() {
        this.setState({name:"Ghadiya"});
    }
  render() {
    return (
      <div className='head'>
        <h1>{this.state.name}</h1>
        <button className='btn' onClick={this.change_name}>Change name</button>
      </div>
    )
  }
}

export default Pra5b;