import React from 'react'
import glamorous from 'glamorous-native'

export default function Button ({children, ...props}) {
  return (
    <Touchable underlayColor={`rgba(253, 183, 58, 0.8)`} {...props}>
      <Text>{children}</Text>
    </Touchable>
  )
}

const Touchable = glamorous.touchableHighlight({
  backgroundColor: 'rgb(253, 183, 58)',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 6
});
Touchable.propsAreStyleOverrides = true;

const Text = glamorous.text({
  color: '#fff',
  fontSize: 16
});
