import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Button } from 'react-native'
import React from 'react'
import InstaStory from 'react-native-insta-story';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import data from '../components/data';
// import { LinearGradient } from 'expo-linear-gradient';
import Navbar from '../components/Navbar';
// import stories from '../components/stories';
import posts from '../components/posts';


const Home = () => {
  return (
    <View style={styles.home}>

      <View style={[styles.header, padding.pad10]}>
        <Text style={[styles.logo]}>JJTUCS</Text>
        <View style={styles.headerButtons}>

        <TouchableOpacity style={[styles.headerButton, styles.alnJfyCenter, padding.pad3, margin.mar5]}>
            <Ionicons name="notifications-circle-outline" size={30} color="#5B5858" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.headerButton, styles.alnJfyCenter, padding.pad3, margin.mar5, { paddingLeft: 5, paddingRight: 5 }]}>
            <AntDesign name="message1" size={24} color="#5B5858" />
          </TouchableOpacity>
        
        </View>
      </View>
      {/* <View style={styles.stories}>

        <FlatList
          data={stories}
          renderItem={({ item }) => {

            return <View style={styles.story}>
              <LinearGradient
                // Background Linear Gradient
                colors={['#9600FF', '#9600FF', '#0083DE']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 0.5 }}
                style={styles.background}
              >
                <View style={styles.contentContainer}>

                  <Image

                    style={styles.storyContent}
                    source={{ uri: item.content }}
                  />



                </View>

              </LinearGradient>
              <Text>{item.user}</Text>



            </View>


          }}

          horizontal

        />



      </View> */}

<InstaStory
  data={data}
  duration={5}
  avatarSize={70}
  unPressedBorderColor={''}
  // avatarImageStyle={{borderRadius:20}}
//  storyUserContainerStyle={{borderWidth:0}}
 renderCloseComponent={({ item, onPress }) => (
  <View style={{ flexDirection: 'row', justifyContent:'space-between', width:200 }}>
    <Button title='share' onPress={{}}/>
    <Button title='share' onPress={{}}/>
  </View>
)}
 
/>


      <View style={[styles.body, styles.alnJfyCenter]}>



        <FlatList


          data={posts}

          renderItem={({ item }) => {

            return <View style={styles.bodyItem}>
              <View style={styles.bodyItemHeader}>

                <View style={styles.profile}>

                  {item.media !== '' && <Image
                    style={styles.profileImg}
                    source={{ uri: item.media }}

                  />}
                  <View>
                    <Text style={{ fontSize: 25, color: '#333230' }}>Name</Text>
                    <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.66)' }}>User Name</Text>
                  </View>


                </View>

                <Entypo name="dots-three-vertical" size={20} color="#333230" />

              </View>
              <Text style={{ color: 'rgba(0, 0, 0, 0.66)', margin:10}}>{item.content}.</Text>
              
              

              {
                item.media !== '' && <Image
                  style={styles.media}

                  source={{ uri: item.media }}

                />
              }
            </View>

          }}



        />


      </View>



      <Navbar />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  home: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    position: 'relative'

  },

  alnJfyCenter: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',

  },


  header: {

    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },

  logo: {


    fontSize: 30,
    fontWeight: 500,



  },

  headerButtons: {


    flexDirection: 'row',

    justifyContent: 'space-between'

  },


  headerButton: {
    backgroundColor: '#FFFFFF',
    // width: 30,
    // height: 30,


    borderRadius: 10


  },


  stories: {

    width: '100%',
    flexDirection: 'row',

    // padding: 10,
    border: '2px solid black',
    height: '12%'

  },

  story: {

    // margin: '10',

    flexDirection: 'column',
    justifyContent: 'space-between',
    // padding: '10',
    alignItems: 'center',
    width: 100,
    height: 60,
    objectFit: 'cover',




  },

  contentContainer: {

    borderRadius: 20,
    borderColor: '#9600FF, #9600FF, #0083DE',
    backgroundColor: '#ffff',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',

  },
  storyContent: {

    width: 60,
    height: 60,
    borderRadius: 20,
    margin: 4

  },

  body: {
    width: '100%',
    height: '80%',
    borderColor: 'black',
    borderWidth: 2



  },

  bodyContent: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2
  },

  bodyItem: {


    width: '95%',
    height: 'auto',
    margin: 10,
    padding: 5,
    backgroundColor: '#ffff',
    borderRadius: 10

  },

  media: {
    width: '100%',
    height:400,
    // resizeMode:'contain',
    objectFit:'cover',
    borderRadius: 10




  },


  bodyItemHeader: {

    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  profile: {

    flexDirection: 'row',
    width: 140,
    justifyContent: 'space-between'

  },


  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 100

  },

  background: {

    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20


  }




})






const padding = StyleSheet.create({
  pad1: { padding: 1 },
  pad2: { padding: 2 },
  pad3: { padding: 3 },
  pad4: { padding: 4 },
  pad5: { padding: 5 },
  pad10: { padding: 10 },
  pad15: { padding: 15 },
  pad20: { padding: 20 },
  pad25: { padding: 25 },

})


const margin = StyleSheet.create({
  mar1: { margin: 1 },
  mar2: { margin: 2 },
  mar3: { margin: 3 },
  mar4: { margin: 4 },
  mar5: { margin: 5 },
  mar10: { margin: 10 },
  mar15: { margin: 15 },
  mar20: { margin: 20 },
  mar25: { margin: 25 },

})