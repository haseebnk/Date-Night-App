import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from "react-native-linear-gradient";
import { scale } from "react-native-size-matters";


class UnlockModal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.centeredView}>

                <Modal


                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
                    }}
                    hasBackdrop={true}
                >
                    <View style={styles.centeredView}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            colors={['#FF7474', '#E20303']}
                            style={styles.modalView}>
                            <Text style={styles.modalText}>This Ping is currently locked. Would you like to permanently unlock it for just $0.99 ?</Text>

                            <View style={styles.modalButtons} >
                                <Pressable
                                    style={[styles.button, styles.buttonYes]}
                                    onPress={() => this.props.navigation.navigate('home')}
                                >
                                    <Text style={styles.textStyleYes}>Yes</Text>
                                </Pressable>

                                <Pressable
                                    style={[styles.button, styles.buttonNo]}
                                    onPress={() => this.setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyleNo}>No</Text>
                                </Pressable>
                            </View>


                        </LinearGradient>
                    </View>
                </Modal>
                <Pressable

                    onPress={() => this.setModalVisible(true)}
                >


                    {/* <MaterialIcons style={{ alignItems: 'center', top: scale(-3), left: scale(-10), alignSelf: 'center' }} name='stop' size={hp('5%')} color="#E20303" /> */}
                    <MaterialIcons style={{ alignItems: 'center',  left: 0  , top:scale(-5)}} name='double-arrow' size={hp('4%')} color="#0379FF" />

                </Pressable>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    buttonNo: {
        backgroundColor: 'white',
        margin: 20,
        width: 74,
        height: 44,

    },
    buttonYes: {
        backgroundColor: null,
        margin: 20,
        width: 74,
        height: 44,

    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top:scale(-23),


    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -5
    },
    modalView: {
        width: 310,
        height: 209,

        // backgroundColor: "red",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "red",
        shadowOffset: {
            width: 310,
            height: 209
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,

    },

    textStyleYes: {
        color: "white",
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        textAlign: "center"
    },
    textStyleNo: {
        color: "#E20303",
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        textAlign: "center",


    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily: 'Poppins-Regular',
        color: 'white',
        fontSize: 18
    }
});

export default UnlockModal;