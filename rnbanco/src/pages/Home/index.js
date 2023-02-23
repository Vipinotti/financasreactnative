import { View, Text, StyleSheet, FlatList} from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';


const list = [
  {
    id:1,
    label: 'boleto luiiiizz',
    value:'3900',
    date:'12/09/2003',
    type:0
  },
  {
    id:2,
    label: 'boleto água',
    value:'3901',
    date:'123/09/2003',
    type:0
  },
  {
    id:3,
    label: 'pix recebido',
    value:'3902',
    date:'14/09/2003',
    type:1
  }
]

export default function Home() {
  return (
                <View>
                        <Header name="pinotti teste" />

                        <Balance saldo="2.209" gastos="- 2.200" />

                        <Text style={styles.titulo}>Movimentações recentes</Text>
                        <FlatList
                         style={styles.list}
                         data={list}
                         keyExtractor={(item) => String(item.id)}
                         ShowsVerticalScrollIndicator={false}
                         renderItem={({item}) => <Movements data={item}/> }
                        />
                </View>

  );
}

const styles=StyleSheet.create({
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        margin: 14
    },
    list:{
      marginStart:14,
      marginEnd:14
    }
}
);
