import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {useState} from 'react'
// import Navbar from '../components/Navbar'
// import { useFonts, Komika_axis } from '@expo-google-fonts/inter';
import { LinearGradient } from 'expo-linear-gradient';


const Signup = () => {

    const [number, onChangeNumber] = useState('');
    const [pass, setPass] = useState({text:'Show', state:true});


    const handlePassword = () =>{

pass.state === true ? setPass({text:'Hide', state:false}) : setPass({text:'Show', state:true})

    }

    return (

        <View style={styles.signup}>

            <View style={styles.header}>

                <Text style={styles.logo}>JJTUCS</Text>

                <Text>Sign up to see photos and videos from your friends
                </Text>
            </View>

            <View style={styles.container}>

                <LinearGradient
                    colors={['#46A5E7', '#7045F6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={{ borderRadius: 10, margin: 10 }}
                ><View style={styles.inputContainer}><TextInput style={styles.input}

                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"

                /></View></LinearGradient>



                <LinearGradient
                    colors={['#46A5E7', '#7045F6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={{ borderRadius: 10, margin: 10 }}
                ><View style={styles.inputContainer}><TextInput style={styles.input}

                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"

                /></View></LinearGradient>


                <LinearGradient
                    colors={['#46A5E7', '#7045F6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={{ borderRadius: 10, margin: 10 }}
                ><View style={styles.inputContainer}><TextInput style={styles.input}

                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"

                /></View></LinearGradient>



                <LinearGradient
                    colors={['#46A5E7', '#7045F6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={{ borderRadius: 10, margin: 10 }}
                ><View style={styles.inputContainer}><TextInput style={styles.input}

                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    secureTextEntry={pass.state}

                /><TouchableOpacity onPress={handlePassword}><Text style={{color:'4°, 4%, 26%'}}>{pass.text}</Text></TouchableOpacity>
                </View></LinearGradient>




                <LinearGradient
                    colors={['#46A5E7', '#7045F6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={{ borderRadius: 10 }}
                ><View style={styles.inputContainer}><TextInput style={styles.input}

                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    secureTextEntry={pass.state}

                    /><TouchableOpacity onPress={handlePassword}><Text style={{color:'4°, 4%, 26%'}}>{pass.text}</Text></TouchableOpacity></View></LinearGradient>



                <LinearGradient
                    colors={['#46A5E7', '#7045F6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={{ borderRadius: 10, margin: 10 }}
                ><TouchableOpacity style={styles.signupBtn} onPress={console.log(5)}><Text style={{ color: '#faf5f5' }}>Sign up</Text></TouchableOpacity></LinearGradient>

                <Text>By sign up. you agree to our Terms & Privacy Policy</Text>

            </View>




            <View style={styles.footerText}>

                <Text>You have an account?</Text><TouchableOpacity><Text>Log in</Text></TouchableOpacity>

            </View>


        </View>

    )
}

export default Signup


const styles = StyleSheet.create({

    logo: {

        color: '#484343',
      
        fontSize: 25,


    },

    signup: {

        width: '100%',
        height: 800,
        alignItems: 'center',
        justifyContent: 'space-between'



    },


    inputContainer: {

        width: 300,
        height: 40,
        backgroundColor: 'white',
        margin: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:10



    },

    input: {

        width: 250,
        height: 50

    },

    container: {

        alignItems: 'center'

    },

    signupBtn: {

        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,



    },


    footerText: {

        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'

    }


})