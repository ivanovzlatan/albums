import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const AlbumDetail = ({ album }) => {

  return (
    <ScrollView>
      <View style={styles.slide1}>
        <Text style={styles.text}>{album}</Text>
      </View>
    </ScrollView>
  );
};

const styles = {
  slide1: {
    flex: 1,
    alignItems: 'center'
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  text: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
