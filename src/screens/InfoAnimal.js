import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Modal } from 'react-native';
import Title from '../components/Title';
import Contact from '../components/Contact';
import { ButtonCamera } from '../components/Buttons';
import * as firebase from 'firebase';
import { withNavigationFocus } from 'react-navigation';

InfoAnimal = ({ navigation, id, isFocused }) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log('useEffect/id->['+id.length+']');
    if (id.length!=0) {
      console.log('passou da condicional');
      firebase.database().ref(`data/${id}`).on('value', data => {
        setName(data.toJSON().name);
        setAge(data.toJSON().age);
        setDescription(data.toJSON().description);
        setOwner(data.toJSON().owner);
        setPhone(data.toJSON().phone);
        setModalVisible(true);
        console.log('owner->'+data.toJSON().owner);
      });
    }
  }, [id]);


  return (
    <Modal
      visible={(id.length > 0 && modalVisible) ? true : false} 
      transparent={false}
      style={styles.modal}
    >
      <View>

      </View>
      <Text>Namea:{name}</Text>
      <ButtonCamera onPress={() => {
        id = '';
        setModalVisible(false)} }
      />

    </Modal>
    /*<View style={styles.container}>
      <Title name="Info" onPress={() => {navigation.goBack()}}/>
      <View style={styles.info}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textAge}>{age} anos</Text>
        <Text style={styles.textInfo}>
          {description}
        </Text>
        <View>
          <Contact owner={owner} phone={phone} />
        </View>
      </View>
    </View>*/
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 30
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  info: {
    backgroundColor: '#2fb7a7',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  textAge: {
    fontSize: 19,
  },
  textInfo: {
    fontSize: 17,
    marginTop: 25,
    fontStyle: 'italic'
  }
});

export default withNavigationFocus(InfoAnimal);
