/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  AppRegistry
} = React;

var HelloThere = React.createClass({
  clickMe: function() {
    alert('Hi!');
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.clickMe.bind(this)}>
          <View style={styles.box} >
            <Text>Hello Everyone. Please click me.</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  box: {
    borderColor: 'red',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    width: 100,
    height: 100
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('helloWorld', function() {
  return HelloThere;
})


