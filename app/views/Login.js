import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Login extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
     };
  };

  cancelLogin = () => {
    Alert.alert('Login cancelled!');
    this.props.navigation.navigate('HomeRT');
  }

  loginUser = () => {

    if (!this.state.username) {
      Alert.alert('Please enter a username')
    }
    else if (!this.state.password) {
      Alert.alert('Please enter a password')
    }
    else {
      AsyncStorage.getItem('userLoggedIn', (err, result) => {

        if (result !== 'none') {
          Alert.alert('Someone already logged on');
          this.props.navigation.navigate('HomeRT');
        }
        else {

          AsyncStorage.getItem(this.state.username, (err, result) => {

            if (result !== null) {

              if (result !== this.state.password) {
                Alert.alert('Password is incorrect!')
              }
              else {
                AsyncStorage.setItem('userLoggedIn', this.state.username, (err, result) => {
                  Alert.alert(`${this.state.username} Logged In`);
                  this.props.navigation.navigate('HomeRT');
                });
              }
            }
            else {
              Alert.alert(`No account for ${this.state.username}`);
            }
          })
        }
      })
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>

        <TextInput 
          style={styles.inputs}
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
        />
        <Text style={styles.labels}>Enter Username</Text>

        <TextInput 
          style={styles.inputs}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Text style={styles.labels}>Enter password</Text>

        <TouchableHighlight onPress={this.loginUser} underlayColor='#31e981'>
          <Text style={styles.buttons}>
            Login
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e981'>
          <Text style={styles.buttons}>
            Cancel
          </Text>
        </TouchableHighlight>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%',
    paddingTop: '10%'
  },
  heading: {
    fontSize: 16,
    flex: 1
  },
  inputs: {
    flex: 1,
    width: '80%',
    padding: 10
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  },
  labels: {
    paddingBottom: 10
  }
});