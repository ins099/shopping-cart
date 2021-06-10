import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const Home = () => {
  const products = useSelector(state => {
    return state.shoppingReducers.products;
  });
  console.log(products);

  return (
    <View>
      <Text>HOME LIST</Text>

      {products.map(prod => {
        return (
          <TouchableOpacity>
            <Text key={prod.id}>
              {' '}
              {prod.id} {prod.name} {prod.desc}{' '}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Home;
