import React from 'react'
import glamorous from 'glamorous-native'
import {Animated} from 'react-native'
import {withProps} from 'recompose';

export default function Graphic (props) {
  return (
    <Transition {...props}>
      <TableTop />
    </Transition>
  )
}

const Transition = glamorous(Animated.View)(
  {
    position: 'absolute',
    top: 120,
  },
  ({transition}) => ({
    transform: [
      // {perspective: 1000},
      {
        translateY: transition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -20]
        })
      },
      {
        scale: transition.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 6]
        })
      },
      {rotate: transition.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '-20deg']
        })
      }
    ]
  })
);

const TableTop = withProps({
  source: require('./tableTop.png'),
  resizeMode: 'contain'
})(glamorous.image({
  width: 215,
  height: 200
}));
