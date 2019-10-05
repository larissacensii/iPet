import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AnimalPicture from '../components/AnimalPicture';

export default function Contact() {
  return (
    <View style={styles.container}>
      <View style={styles.viewContact}>
        <View style={styles.viewIcon}>
          <Icon
            style={styles.icon}
            name={'phone'}
            size={40}
            //onPress={onPress}
          />
        </View>
        <View style={styles.viewInfoContact}>
          <Text>Entre em contanto com:</Text>
          <Text>NOME DA DONA - (47) 9999-9999</Text>
        </View>
      </View>
      <View style={styles.viewImage}>
        <AnimalPicture />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignContent: 'center',
  },
  viewContact: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderRadius: 8,
  },
  viewIcon: {
    padding: 10,
  },
  viewInfoContact: {
    justifyContent: 'center',
    paddingLeft: 10,
    fontSize: 20,
  },
  viewImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  icon: {
    marginTop: 5,
    color: '#2fb7a7',
  },
});
