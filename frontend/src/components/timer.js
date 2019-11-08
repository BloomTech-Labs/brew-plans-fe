import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: Math.floor(props.stepLength / 60),
      sec: props.stepLength%60,
      startDisabled: false
    };
  }

  countdown() {
    console.log("pressed button in function ");
    let timer = setInterval(() => {
      console.log("min", this.state.min, "sec", this.state.sec);
      var num = this.state.sec - 1,
        count = this.state.min;


      if (this.state.sec == 0) {
        count = this.state.min - 1;
        num = 59;
      }
      this.setState({ min: count });
      this.setState({ sec: num.toString() });
      this.setState({ startDisabled: true });

      if (this.state.sec ==="0" && this.state.min=== 0) {
        clearInterval(timer)
       }
    }, 1000);
  }

  reset() {
      this.setState({min: Math.floor(props.stepLength / 60)})
      this.setState({sec: props.stepLength%60})
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.min}: {this.state.sec.length===1? '0'+this.state.sec: this.state.sec}
        </Text>
        <TouchableOpacity >
          <Button title="Start" onPress={()=> {this.countdown()}}></Button>
        </TouchableOpacity>
        <TouchableOpacity >
          <Button title="Reset" onPress={()=> {this.reset()}}></Button>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Timer;
