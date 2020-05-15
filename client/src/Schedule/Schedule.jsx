import React, { Component } from 'react';
import Calendar from './Calendar';

const style = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
  }
}

export default class Schedule extends Component {
  render() {
    return (
      <div style={style.container}>
        <Calendar />
        <div style={{
          height: 500,
          width: 400,
          border: '1px solid black',
          marginTop: 120,
        }}></div>
      </div>
    )
  }
}
