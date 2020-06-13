import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../Main/styles';
import logo from '../../assets/logo.png';
import {TextInput} from 'react-native-gesture-handler';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

export default class Main extends Component {
  state = {
    newBox: '',
  };

  async componentDidMount() {
    const box = await AsyncStorage.getItem('@RocketBox:box');
    if (box) {
      this.props.navigation.navigate('Box');
    }
  }

  handleSigin = async () => {
    const response = await api.post('boxes', {
      title: this.state.newBox,
    });
    await AsyncStorage.setItem('@RocketBox:box', response.data._id);

    this.props.navigation.navigate('Box');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <TextInput
          style={styles.input}
          placeholder="Crie um box"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.newBox}
          onChangeText={(text) => this.setState({newBox: text})}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.handleSigin();
          }}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
