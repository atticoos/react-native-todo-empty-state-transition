import React from 'react'
import glamorous from 'glamorous-native'
import {Animated, Keyboard} from 'react-native'

export default function InputOverlay ({onDismiss, ...props}) {
  return (
    <TransitionContainer {...props}>
      <Row>
        <InputType>H1</InputType>
        <TextInput autoFocus={true} />
        <Dismiss onPress={() => {
          Keyboard.dismiss();
          onDismiss();
        }} />
      </Row>
    </TransitionContainer>
  )
}

function Dismiss (props) {
  return (
    <glamorous.TouchableOpacity
      {...props}
      marginTop={5}
      placeholder="Title"
      placeholderTextColor="lightgray"
      hitSlop={{
        top: 15,
        left: 15,
        right: 15,
        bottom: 15
      }}
    >
      <glamorous.Text color="lightgray" fontSize={18}>
        X
      </glamorous.Text>
    </glamorous.TouchableOpacity>
  )
}

const TextInput = glamorous.textInput({
  color: 'gray',
  flex: 1,
  marginHorizontal: 5,
  fontSize: 22
})

const TransitionContainer = glamorous(Animated.View)(
  {
    position: 'absolute',
    backgroundColor: '#fff',
    paddingTop: 60,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 30
  },
  ({transition, enter}) => ({
    opacity: transition.interpolate({
      inputRange: [0, enter, 1],
      outputRange: [0, 0, 1]
    }),
    transform: [
      {
        translateY: transition.interpolate({
          inputRange: [0, enter, 1],
          outputRange: [35, 35, 0]
        })
      },
      {
        rotate: transition.interpolate({
          inputRange: [0, 1],
          outputRange: ['25deg', '0deg']
        })
      }
    ]
  })
);

const Row = glamorous.view({
  flexDirection: 'row'
})

const InputType = glamorous.text({
  fontSize: 16,
  marginTop: 2,
  color: 'lightgray'
})
