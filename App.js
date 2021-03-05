import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState ([]);
  const [contadorLembretes, setContadorLembretes] = useState(0);
  
  //captura o texto digitado
  const capturarLembrete = (lembrete) =>{
    setLembrete(lembrete)
  };

  //para adicionar o que foi digitado
  const adicionarLembrete = () => {
    setLembretes ((lembretes) =>{
      console.log (lembretes);
      setContadorLembretes (contadorLembretes + 1);
    return [...lembretes, {key: contadorLembretes.toString(), value: lembrete}];
  });
  }

  return (
    <View style={styles.container}>
      <View style={styles.lembreteInputView}>
      <View style={{width: '80%', alignSelf: "center"}}>
      <FlatList
      data={lembretes}
      renderItem={
        lembrete => (
          <View style={styles.itemNaLista}>
            <Text>{lembrete.item.value}</Text>
          </View>
        )
      }
      />
      </View>
        {/*usuario ira inserir lembretes aqui*/}
        <TextInput placeholder="Lembrar..." 
        style={styles.lembreteTextInput}
        onChangeText={capturarLembrete}
        value={lembrete}
        />
        <View style={{width: '80%'}}>
        <Button title="+" 
        onPress={adicionarLembrete}
        />
      </View>
      </View>
      <View>
        {
        /*aqui sera exibida a lista de lembretes*/
        lembretes.map((lembrete) => 
        <View key={lembrete} style={styles.itemNaLista}><Text>{lembrete}</Text></View>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },
  lembreteInputView: {
    alignItems: 'center',
    marginBottom: 12
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 2,
    textAlign: 'center'
  },
  lembreteInputButton: {
    width: '80%'
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center'
  }
});
