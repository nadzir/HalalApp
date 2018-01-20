import Camera from 'react-native-camera';
import { chain, uniq, sortBy, reverse } from 'lodash';
import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import { resizeImage, convertImageToBase64 } from '../../lib/imageUtil/index';
import { getLabel } from '../../lib/imageProcessing';
import { isHalal, halalCheckType } from '../../lib/halal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    margin: 50,
    height: 70,
    width: 70,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 15,
  },
  loadingMsg: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  loadingText: {
    fontSize: 18,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 30,
  },
  spinner: {
    marginBottom: 50,
  },
});

export class CameraView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      loading: false,
    };
  }

  takePicture () {
    if (this.state.loading) return;
    console.log('Capturing camera');
    this.setState({ loading: true });
    this.camera.capture()
      .then((data) => {
        console.log('resizing image');
        return resizeImage(data.path);
      }).then((resizedImage) => {
        console.log('converting to base64');
        return convertImageToBase64(resizedImage.path);
      }).then((image64) => {
        console.log('getting label');
        return getLabel(image64);
      })
      .then((data) => {
        const logos = data && data.responses && data.responses[0].logoAnnotations;
        const text = data && data.responses && data.responses[0].textAnnotations;

        const logosList = chain(logos || [])
          .map(item => ({
            key: item.description,
            title: item.description,
            boundingPoly: item.boundingPoly,
            halal: isHalal(halalCheckType.TEXT, item.description) ? 'Halal' : 'Not halal',
            type: 'Logo',
          })).value();

        const textList = chain(text || [])
          .filter(item => item.description.length > 3 && item.description.length < 20)
          .map(item => ({
            key: item.description,
            title: item.description,
            boundingPoly: item.boundingPoly,
            halal: isHalal(halalCheckType.TEXT, item.description) ? 'Halal' : 'Not halal',
            type: 'Text',
          })).value();

        const list = chain(logosList.concat(textList))
          .uniqBy('key')
          .sortBy(['halal', 'type'])
          .value();
        console.log(list);
        this.setState({ list, loading: false });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>

        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}
        >
          <ActivityIndicator size="large" color="#0000ff" animating={this.state.loading} />
          <List
            containerStyle={{
              opacity: 0.9, height: 200, alignSelf: 'stretch',
            }}
          >
            <FlatList
              data={this.state.list || []}
              keyExtractor={item => item.key}
              renderItem={({ item }) => (
                <ListItem
                  title={item.title}
                  subtitle={`${item.halal} ( ${item.type} )`}
                />
              )}
            />
          </List>
          <Button
            backgroundColor={this.state.loading ? '#e74c3c' : '#2ecc71'}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              height: 50,
            }}
            containerViewStyle={{
              width: '100%',
            }}
            title="What is this?"
            onPress={this.takePicture.bind(this)}
          />
        </Camera>
      </View>
    );
  }
}

export default CameraView;
