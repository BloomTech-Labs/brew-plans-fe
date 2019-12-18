import React from "react";
import { View, TouchableOpacity, Text, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {Audio} from "expo-av";

import styles from "../styling/TimerStyling";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    console.log('Timer Props', props);
    this.state = {
      min: (Math.floor((props.stepLength) / 60))
      || 0,
      sec: (props.stepLength % 60).toString() || 0,
      startDisabled: false,
    };
    this.timer = null;
    this.startTimer = this.startTimer.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  timer = {};
  soundObject = new Audio.Sound()

  async componentDidMount() {
    try {
        await this.soundObject.loadAsync(require("../../assets/coffee-song.mp3"))
    } catch(error) {
      console.log("error", error)
    }
  }

  countdown() {
    if(this.state.sec > 0) {
      this.setState({ sec: (this.state.sec - 1).toString() })
    } else if(this.state.sec == 0 && this.state.min == 0) {
      clearInterval(this.timer);
    } else if(this.state.sec == 0 && this.state.min > 0) {
      this.setState({ sec: 59, min: this.state.min - 1 })
    }
  }

  startTimer() {
    const { startDisabled } = this.state;
    if(!startDisabled) {
      this.timer = setInterval(this.countdown, 1000);
      this.setState({ startDisabled: true })
    }
  }

  reset() {
    clearInterval(this.timer);
    this.setState({ min: Math.floor(this.props.stepLength / 60) });
    this.setState({ sec: (this.props.stepLength % 60).toString() });
    this.setState({ startDisabled: false });
  }

  pause() {
    console.log('pausing');
    clearInterval(this.timer);
    this.setState({ startDisabled: false });
  }

  render() {
    return (
      <View style={styles.timerWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.timerText}>
            {this.state.min}:{" "}

            {this.state.sec.length === 1
              ? "0" + this.state.sec
              : this.state.sec}
          </Text>
        </View>
        <View style={styles.iconWrapper}>
          <TouchableOpacity>
            {this.state.startDisabled ? (
              <Ionicons
                name="md-pause"
                size={32}
                color="#720A13"
                style={styles.icons}
                onPress={() => {
                  this.pause();
                }}
              />
            ) : (
              <Ionicons
                name="md-play-circle"
                size={32}
                color="#720A13"
                style={styles.icons}
                onPress={() => {
                  this.startTimer();
                }}
              />

              // <Button
              //   title="Start"
              //   onPress={() => {
              //     this.countdown();
              //   }}
              // ></Button>
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="restore"
              size={24}
              color="#720A13"
              style={styles.icons}
              onPress={() => {
                this.reset();
              }}
            />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity>
          <Ionicons name="md-pause" size={32} color="black"             onPress={() => {
              this.pause();
            }}/>

        </TouchableOpacity> */}
      </View>
    );
  }
}

export default Timer;
