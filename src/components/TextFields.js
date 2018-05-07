import React from 'react';
import { TextInput } from 'react-native';

const TextField = props => {
  return (
    <TextInput
      style={props.styles}
      onChangeText={text => props.update(text)}
      value={props.text}
      placeholder={props.placeholder}
    />
  );
};

export default TextField;
