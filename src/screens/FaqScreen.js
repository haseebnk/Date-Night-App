import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const data = [
    { id: 1, title: 'FAQ1', description: 'It may, or may not be an actual "first" date, but its certainly one of the first... a "get-to-know" Kind of date. Youll need ice-breakers. ' },
    { id: 2, title: 'FAQ2', description: 'It may, or may not be an actual "first" date, but its certainly one of the first... a "get-to-know" Kind of date. Youll need ice-breakers. ' },
    { id: 3, title: 'FAQ3', description: 'It may, or may not be an actual "first" date, but its certainly one of the first... a "get-to-know" Kind of date. Youll need ice-breakers. ' },
    { id: 4, title: 'FAQ2', description: 'It may, or may not be an actual "first" date, but its certainly one of the first... a "get-to-know" Kind of date. Youll need ice-breakers. ' },


]

const FAQScreen = (props) => {

    const [press, setPress] = useState('');

    function questionPick(item) {
        setPress(item.id)
    }

    function questionClose(item) {
        setPress(item.id)
    }

    return (

        <LinearGradient
            colors={['#24202f', '#24202f', '#24202f']}
            style={styles.container}
        >
            <View >

                {/* <NavHeader title="FAQ" /> */}

                <View style={{ alignItems: 'center', }}>


                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>

                            <Image style={styles.imgClose}
                                source={require("../assets/close.png")}
                            ></Image>
                        </TouchableOpacity>
                        <Text style={styles.faqHeading}>FAQ</Text>
                    </View>


                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ width: '90%' }}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => questionPick(item)}
                                style={{ marginTop: 20, width: '100%', padding: 3 }}
                            >
                                {press === item.id ?
                                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#363143', paddingHorizontal: 10, paddingVertical: 10, height: 76, borderRadius: 18, color: "White" }}>
                                        <MaterialIcons name='expand-less' size={hp('5%')} color="white" />
                                        <Text style={{ color: 'white', fontFamily: "Poppins-Regular", fontSize: 16 }}>{item.title}</Text>
                                        {/* <AntDesign name="caretdown" size={16} color="black"/> */}


                                    </View>
                                    :
                                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#363143', paddingHorizontal: 10, paddingVertical: 10, height: 76, borderRadius: 18, color: "White" }}>
                                        <MaterialIcons name='expand-more' size={hp('5%')} color="white" />
                                        <View>
                                            <Text style={{ padding: 5, fontFamily: "Poppins-Regular", color: "white", fontSize: 16 }}>{item.title}</Text>
                                        </View>


                                    </View>
                                }

                                {press === item.id ?
                                    
                                        <TouchableOpacity onPress={() => setPress('')}>

                                            <Text style={{ padding: 15, marginHorizontal: 0, top: -10, backgroundColor: "white", color: "#B4B4B4", borderBottomLeftRadius: 18, borderBottomRightRadius: 18, fontSize: 14, fontFamily: "Poppins-Regular", }}>{item.description} </Text>

                                        </TouchableOpacity>
                                
                                    :
                                    null
                                }
                            </TouchableOpacity>

                        )}
                    />
                </View>
            </View>

        </LinearGradient>
    );
}

export default FAQScreen;

const styles = StyleSheet.create({
    faqHeading: {
        color: 'white',
        fontSize: 20,
        marginTop: 0,
        marginHorizontal: 135,
        marginBottom: 20,
        fontFamily: "Poppins-Regular",
        textAlign: 'center',
        marginLeft: 115,


    },
    imgClose: {
        height: 19,
        width: 19,
        marginTop: 5,
        marginLeft: 5,
    },

    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: '#ffff'
    },
})