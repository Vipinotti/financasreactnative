import React from 'react';
import {
    View, 
    Text,
    StyleSheet
 } from 'react-native';

export default function Balance({saldo, gastos}) {
 return (

   <View style={styles.container}>

    <View style={styles.item}>

        <Text style={styles.itemTitle}>Saldo</Text>
            <View style={styles.item2}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.Balance}>{saldo}</Text>
            </View>
    </View>

    <View style={styles.item}>

        <Text style={styles.itemTitle}>Gastos</Text>
            <View style={styles.item2}>
                <Text style={styles.currencySymbol}>R$</Text>
        <Text style={styles.Expense}>{gastos}</Text>
    </View>
</View>

   </View>

  );
}

const styles= StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop:-24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    itemTitle:{
        fontSize: 20,
        fontWeight:'bold',
        color:'#DADADA'
    },
    item2:{
        flexDirection:'row',
        alignItems:'center'
    },
    currencySymbol:{
        color:'#DADADA',
        fontWeight:'bold',
        marginRight:6,
    },
    Balance:{
        fontSize: 22,
        fontWeight:'bold',
        color:'#2ecc71'
    },
    Expense:{
        fontSize: 22,
        fontWeight:'bold',
        color:'#e74c3c'
    },
    item:{
        backgroundColor:'#fff',
    }
})