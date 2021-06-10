import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

const SagaPrac = () => {
  const state = useSelector(state => {
    console.log(state);
  });

  return <Text>Saga App</Text>;
};

export default SagaPrac;
// https://www.youtube.com/watch?v=1K26DIKt3w8&list=RDCMUCoYzQqZNCRqqAomJwJ6yEdg&index=1
