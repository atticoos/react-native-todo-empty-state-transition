import React from 'react';
import { Animated, Easing, StyleSheet, Text, TextInput, View } from 'react-native';
import InputOverlay from './src/inputOverlay';
import Graphic from './src/graphic';
import IntroContent from './src/introContent';

export default class App extends React.Component {
  state = {
    transition: new Animated.Value(0),
    inputActive: false
  }

  transitionToInput() {
    // this.input.focus();
    this.setState({inputActive: true})
    Animated.timing(
      this.state.transition,
      {
        toValue: 1,
        // duration: 2500,
        easing: Easing.in(Easing.exp)
      }
    ).start();
  }

  transitionToSplash() {
    Animated.timing(
      this.state.transition,
      {
        toValue: 0
      }
    ).start(() => this.setState({inputActive: false}));
  }

  render() {
    return (
      <View style={styles.container}>
        <Graphic
          transition={this.state.transition}
        />

        <IntroContent
          transition={this.state.transition}
          onAddNote={() => this.transitionToInput()}
        />

        {this.state.inputActive && (
          <InputOverlay
            transition={this.state.transition}
            enter={0.5}
            onDismiss={() => this.transitionToSplash()}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
