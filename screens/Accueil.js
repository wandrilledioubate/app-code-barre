import react from "react";
import{View,Text, SafeAreaView, StyleSheet,TouchableOpacity,Image, FlatList} from "react-native";
import {icons, images, SIZES, COLORS, FONTS } from "../constants";

const Accueil = () => {

    // Bouton pour effectuer une recherche

    function renderHeader () {
        return(
            <View style={{flexDirection : 'row', height: 50}}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding *2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

            </View>
        )
    }

    // Faire l'outil pour déplier la recherche 


    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
        </SafeAreaView>

    )
}

 // Mettre le logo au centre du screen


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.lightGray4
    },
    shadow:{
        shadowColor: "#0000",
        shadowOffset: {
            width : 0,
            height : 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
    
})


export default Accueil