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
  constructor() {
    super();
    this.state = {
      dateSelected: 'Please Select Date',
      timeSelected: 'Please Select Time',
    }
    this.changeScheduledTime = this.changeScheduledTime.bind(this);
  }

  changeScheduledTime(dateSelected, timeSelected) {
    this.setState({ dateSelected, timeSelected });
  }

  render() {
    const { dateSelected, timeSelected } = this.state;
    return (
      <div style={style.container}>
        <Calendar changeTime={this.changeScheduledTime} />
        <div style={{
          height: 500,
          width: 400,
          border: '1px solid black',
          marginTop: 120,
        }}>{dateSelected} {timeSelected}</div>
      </div>
    )
  }
}
