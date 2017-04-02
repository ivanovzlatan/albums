// import library

import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AlbumList from './src/components/AlbumList';
import reducers from './src/reducers/index';


 // Initialize store only once
const store = createStore(reducers);
/*

store.dispatch({ type: 'split_string', payload: 'text </ hr> text 2' });

*/

// create a compponent
const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <AlbumList />
    </View>
  </Provider>
);


// render on device
AppRegistry.registerComponent('albums', () => App);
