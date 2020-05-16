import React, { Component } from 'react';
import Calendar from './Calendar';
import TimeConfirm from './TimeConfirm'

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
      dateSelected: null,
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
        <TimeConfirm dateSelected={dateSelected} timeSelected={timeSelected}/>
      </div>
    )
  }
}
