import React from 'react';
import StartButton from '../Timer/StartButton';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { connect } from 'react-redux';


const Timer = props => {
    const { time } = props;
     this.state = {
      s: '00',   // seconds state 
      m: ''  // minutes state
}

// //VVVV working on changing this from class components VVVV

// this.remainingSeconds; 
// this.intervalHandle;

// this.startCountDown = this.startCountDown.bind(this);
// this.tick = this.tick.bind(this);
// }

// this.handleChange = this.handleChange.bind(this);

// const handleChange (event) {
//     this.setState({
//       m: event.target.value
//     })
//  }

// tick() {
//     var min = Math.floor(this.remainingSeconds / 60);
//     var sec = this.remainingSeconds - (min * 60);
//     this.setState({
//       m: min,
//       s: sec
//     })
//     if (sec < 10) {
//       this.setState({
//         s: "0" + this.state.s,
//       })
//     }
//     if (min < 10) {
//     this.setState({
//       value: "0" + min,
//      })
//     }
//     if (min === 0 & sec === 0) {
//     clearInterval(this.intervalHandle);
//     }
//     this.remainingSeconds--
//     }
//     startCountDown() {
//     this.intervalHandle = setInterval(this.tick, 1000);
//     let time = this.state.m;
//     this.remainingSeconds = time * 60;
//     }
//      }


 return (
    <div>
     <Timer m={this.state.m} handleChange={this.handleChange}/>
     <Timer m={this.state.m} s={this.state.s}/>
    <StartButton/>
   </div>
  );
}

 export default Timer();