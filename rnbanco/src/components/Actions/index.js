import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {AntDesign} from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
    <TouchableOpacity  style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="addfolder" size={26} color='#000'>

            </AntDesign>
        </View>
        <Text style={styles.entrada}>Entradas</Text>
    </TouchableOpacity>

   </ScrollView>
  )
}
const styles=StyleSheet.create({
    container:{
        margin:14,
    },
    actionButton:{

    },
    areaButton:{

    },
    entrada:{

    },


})

