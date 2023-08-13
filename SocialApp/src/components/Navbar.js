import {
  StyleSheet, Text, View,
  TouchableOpacity,
  Image
} from 'react-native'
import React from 'react'

import {
  Feather,
  FontAwesome5,
  Octicons,
  Entypo

} from '@expo/vector-icons';





const Navbar = () => {
  return (
    <View style={styles.navbar}>

      <View style={styles.itemContainer}>

        <TouchableOpacity style={styles.item} onPress={console.log('shekhar')}><FontAwesome5 name="home" size={24} color="#BDBDBD" /></TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={console.log('shekhar')}><Feather name="search" size={24} color="#BDBDBD" /></TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={console.log('shekhar')}><Octicons name="diff-added" size={24} color="#BDBDBD" /></TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={console.log('shekhar')}><Entypo name="clapperboard" size={24} color="#BDBDBD" /></TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={console.log('shekhar')}>
          <Image style={styles.profileImg}

            source={require('../../assets/woman.jpg')}
          />


        </TouchableOpacity>

      </View>

    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({

  profileImg: {

    width: 30,
    height: 30,
    objectFit: 'cover',
    borderRadius: 100

  },

  navbar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: '88%',
    zIndex:5


  },

  itemContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10

  }




})