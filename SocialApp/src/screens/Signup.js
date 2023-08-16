import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
// import Navbar from '../components/Navbar'
// import { useFonts, Komika_axis } from '@expo-google-fonts/inter';
import { LinearGradient } from 'expo-linear-gradient';


const Signup = () => {

    const [number, onChangeNumber] = useState('');
    const [pass, setPass] = useState({ text: '', state: true });


    const handlePassword = () => {

        pass.state === true ? setPass({ text: 'Hide', state: false }) : setPass({ text: 'Show', state: true })

    }

    return (

        <View style={styles.signup}>
    <View style={styles.main}>
            <View style={styles.header}>

                <Text style={styles.logo}>JJTUCS</Text>


                <Text style={{width:'50%', textAlign:'center', color:'#928D8D'}}>Sign up to see photos and videos from your friends
                </Text>
            </View>

            <View style={[styles.container, {marginBottom:50}]}>

                <LinearGradient
                    colors={['#46A5E7', '#7045F6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={{ borderRadius: 10, margin: 7 }}
                ><View style={styles.inputContainer}><TextInput style={styles.input}

                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"

                /></View></LinearGradient>



                <LinearGradient
                    colors={['#46A5E7', '#7045F6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={{ borderRadius: 10, margin: 7 }}
                ><View style={styles.inputContainer}><TextInput style={styles.input}

                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"

                /></View></LinearGradient>


                <LinearGradient
                    colors={['#46A5E7', '#7045F6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={{ borderRadius: 10, margin: 7 }}
                ><View style={styles.inputContainer}><TextInput style={styles.input}

                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"

                /></View></LinearGradient>



                <LinearGradient
                    colors={['#46A5E7', '#7045F6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={{ borderRadius: 10, margin: 7 }}
                ><View style={styles.inputContainer}><TextInput style={styles.input}

                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    secureTextEntry={pass.state}

                /><TouchableOpacity onPress={handlePassword}><Text style={{ color: '4°, 4%, 26%' }}>{pass.text}</Text></TouchableOpacity>
                    </View></LinearGradient>




                <LinearGradient
                    colors={['#46A5E7', '#7045F6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={{ borderRadius:10, margin:7 }}
                ><View style={styles.inputContainer}><TextInput style={styles.input}

                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    secureTextEntry={pass.state}

                /><TouchableOpacity onPress={handlePassword}><Text style={{ color: '4°, 4%, 26%' }}>{pass.text}</Text></TouchableOpacity></View></LinearGradient>



                <LinearGradient
                    colors={['#46A5E7', '#7045F6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={{ borderRadius: 10, margin: 7}}
                ><TouchableOpacity style={styles.signupBtn} onPress={console.log(5)}><Text style={{ color: '#faf5f5' }}>Sign up</Text></TouchableOpacity></LinearGradient>

                {/* <Text>By sign up. you agree to our Terms & Privacy Policy</Text> */}

            </View>

            </View>


            <View style={styles.footerText}>

                <Text style={{color:'#928D8D'}}>You have an account? </Text><TouchableOpacity><Text style={{ color: '#7045F6FC', fontWeight: 500 }}>Log in</Text></TouchableOpacity>

            </View>


        </View>

    )
}

export default Signup


const styles = StyleSheet.create({

    logo: {

        color: '#484343',

        fontSize: 45,


    },

    signup: {

        width: '100%',
        height: 700,
        alignItems: 'center',
        justifyContent: 'space-between'



    },

    main: {

        width: '100%',
        height: '90%'

    },

    header: {

        alignItems: 'center',
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        borderBottomColor: '#928D8DD9',
        borderBottomWidth: 1,
        marginBottom:40

    },


    container: {

        width: '100%',
        height: 1000,
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom:200
        


    },

    inputContainer: {

        width: 300,
        height: 40,
        backgroundColor: 'white',
        margin: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10



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
        justifyContent: 'center',
        alignItems:'center',
        height:'10%',
        borderTopColor:'#928D8DD9',
        borderTopWidth:1


    }


})