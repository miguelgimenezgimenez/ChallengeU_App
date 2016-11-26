import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';

class CameraComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureMode={Camera.constants.CaptureMode.video}
          captureTarget={Camera.constants.CaptureTarget.cameraRoll}>
          <Text style={styles.capture} onPress={this.startVideo.bind(this)}>[CAPTURE]</Text>
          <Text style={styles.capture} onPress={this.stopVideo.bind(this)}>[STOP]</Text>          
        </Camera>
      </View>
    );
  }

  startVideo() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  stopVideo() {
    this.camera.stopCapture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

const mapDispatchToProps = (dispatch) => ({
  // loginAction: (user, pass) => dispatch(loginAction(user, pass)),
});

export default connect(({routes, auth})=>({routes, auth}), mapDispatchToProps)(CameraComponent);
