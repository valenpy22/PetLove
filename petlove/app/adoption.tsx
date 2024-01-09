import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, ScrollView, Image, FlatList} from 'react-native';

export default function Adoption () {

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedPet, setSelectedPet] = useState<Pet>({} as Pet);

    interface Pet {
        name: string;
        age: string;
        imageUrl: string;
    };

    const pets = [
        {name: "Pancake", age: "4 meses", imageUrl: require("../images/pancake.jpg")},
        {name: "Kat", age: "3 años", imageUrl: require("../images/kat.jpg")},
    ];

    const handlePress = (pet) => {
        setSelectedPet(pet);
        setModalVisible(true);
    };

    const renderPet = ({ item }) => {
        return (
            <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
                <Image source={item.imageUrl} style={styles.image}/>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.ageText}>{item.age}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={pets}
                renderItem={renderPet}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
            >
            </FlatList>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>{selectedPet.name}</Text>
                        <Text style={styles.ageText}>{selectedPet.age}</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer:{
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50,
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    card: {
        margin: 10,
        borderRadius: 20,
        backgroundColor: "#f0f0f0",
        justifyContent: "center",
        alignItems: "center",
        width: "45%",

    },
    title: {
        fontSize: 18,
        fontWeight: "500",
    },
    ageText:{
        fontSize: 15,
        fontWeight: "300",
    },
    image: {
        width: 150,
        height: 110,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginBottom: 2,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
    }, 
});
