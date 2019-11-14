import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: Math.floor(parseInt(props.stepLength) / 60)||0,
      sec: parseInt(props.stepLength) % 60||0,
      startDisabled: false
    };
  }

  timer = {};

  countdown() {
    // console.log("pressed button in function ");
    timer = setInterval(() => {
      // console.log("min", this.state.min, "sec", this.state.sec);
      var num = this.state.sec - 1,
        count = this.state.min;

      if (this.state.sec == 0) {
        count = this.state.min - 1;
        num = 59;
      }
      this.setState({ min: count });
      this.setState({ sec: num.toString() });
      this.setState({ startDisabled: true });

      if (this.state.sec === "0" && this.state.min === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  reset() {
    clearInterval(timer);
    this.setState({ min: Math.floor(this.props.stepLength / 60) });
    this.setState({ sec: this.props.stepLength % 60 });
  }

  pause() {
    clearInterval(timer);
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.min}:{" "}
          {this.state.sec.length === 1 ? "0" + this.state.sec : this.state.sec}
        </Text>
        <TouchableOpacity>
          <Button
            title="Start"
            onPress={() => {
              this.countdown();
            }}
          ></Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="restore"
            size={32}
            color="black"
            onPress={() => {
              this.reset();
            }}
          />
          {/* <Button
            title="Reset"
            onPress={() => {
              this.reset();
            }}
          ></Button> */}
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="md-pause" size={32} color="black"             onPress={() => {
              this.pause();
            }}/>
          {/* <Button
            title="Pause"
            onPress={() => {
              this.pause();
            }}
          ></Button> */}
        </TouchableOpacity>
      </View>
    );
  }
}

export default Timer;
