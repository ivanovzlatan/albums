import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import * as actions from '../actions';
// import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    this.props.splitLibrary();
  }

/*  Without index and key prop
  renderAlbums() {
    return this.props.albums.map(album =>
      <View><Text>{album}</Text></View>
    );
  }
*/
  renderAlbums() {
    return this.props.albums.map(function (album, index){
        return (
          <View key={index}>
            <Text style={styles.text}>Album: {album}</Text>
            <Text style={styles.text}>Index: {index}</Text>
          </View>
        );
      });
  }

  renderContent() {
      return (
        <Swiper loop={false} index={2}>
          {this.renderAlbums()}
        </Swiper>
      );
    }

  render() {
    return (
        /* This way works
        <View><Text>Page 1</Text></View>
        <View><Text>Page 2</Text></View>
        <View><Text>Page 3</Text></View>
        <View><Text>Page 4</Text></View>*/
        <View>
          {this.renderContent()}
        </View>
    );
  }
}

const styles = {
  text: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => (
  { albums: state.albums }
);

export default connect(mapStateToProps, actions)(AlbumList);
