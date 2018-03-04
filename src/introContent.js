import React from 'react'
import glamorous from 'glamorous-native'
import {Animated} from 'react-native'
import Button from './button';

export default function IntroContent ({onAddNote, ...props}) {
  return (
    <Transition {...props}>
      <PrimaryText>Add your first note</PrimaryText>

      <SecondaryText>
        Relax and write something{`\n`}beautiful
      </SecondaryText>

      <Button onPress={onAddNote} marginTop={30}>
        Add Note
      </Button>

      <SecondaryText marginTop={60}>
        UI by @nimasha_perera{`\n`}UX by Edoardo Mercati
      </SecondaryText>
    </Transition>
  )
}

const Transition = glamorous(Animated.View)(
  {
    position: 'absolute',
    alignItems: 'center',
    top: 350
  },
  ({transition}) => ({
    transform: [
      {
        translateY: transition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 600]
        })
      }
    ]
  })
)

const PrimaryText = glamorous.text({
  fontSize: 16,
  color: '#0f0f0f',
  fontWeight: 'bold',
  marginVertical: 6
});

const SecondaryText = glamorous.text({
  fontSize: 16,
  lineHeight: 24,
  textAlign: 'center',
  color: 'lightgray'
})
SecondaryText.propsAreStyleOverrides = true;
