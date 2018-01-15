/**
 * Created by guillaumetran on 15/01/2018.
 */
import React from "react";
import { View, TouchableWithoutFeedback, Animated } from "react-native";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    onPress: PropTypes.func,
    color: PropTypes.string,
    animation: PropTypes.bool,
    size: PropTypes.number.isRequired,
    shadow: PropTypes.bool
  };

  static defaultProps = {
    onPress: () => {},
    color: "#FCFCFC",
    animation: false,
    start: { x: 0.0, y: 0.5 },
    end: { x: 0.5, y: 1.0 },
    size: 60,
    shadow: false,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { height: 5, width: 0 }
  };

  constructor(props) {
    super(props);

    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  handlePressIn() {
    if (this.props.animation) {
      Animated.spring(this.animatedValue, {
        toValue: 0.85
      }).start();
    }
  }

  handlePressOut() {
    if (this.props.animation) {
      Animated.spring(this.animatedValue, {
        toValue: 1,
        friction: 3,
        tension: 40
      }).start();
    }
  }

  render() {
    const animatedStyle = {
      transform: [{ scale: this.animatedValue }]
    };
    return (
      <Animated.View
        style={[
          {
            width: this.props.size,
            height: this.props.size,
            borderRadius: this.props.size
          },
          this.props.shadow ? { elevation: this.props.shadowRadius } : {},
          animatedStyle
        ]}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.onPress();
          }}
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
        >
          <View
            style={[
              {
                flex: 1,
                backgroundColor: this.props.color,
                borderRadius: this.props.size
              },
              this.props.shadow
                ? {
                    shadowOpacity: this.props.shadowOpacity,
                    shadowRadius: this.props.shadowRadius,
                    shadowColor: this.props.shadowColor,
                    shadowOffset: this.props.shadowOffset
                  }
                : {},
              this.props.style
            ]}
          >
            {this.props.children}
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }
}
