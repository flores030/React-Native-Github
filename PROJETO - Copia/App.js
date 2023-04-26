import * as React from 'react';
import { Text, View, StyleSheet , TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import ('https://fonts.googleapis.com/css2?family=Ysabeau:wght@200&display=swap');

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
<View style={styles.fundo}>
  <View style={styles.logo}>
          <Card>
             <AssetExample />
         </Card>
         </View>
    


    <View>
        <Text  style= {styles.amigos}>

             
             <View  style= {styles.botao}>
               <TouchableOpacity style={styles.button}>
                  <Text>Adicionar Amigos </Text>
              </TouchableOpacity>
            </View>
          
          </Text>

           <Text style= {styles.jogos}>
                  124 jogos
               </Text>

          <Text style= {styles.amigoaba}>
            120 amigos
          </Text>

          <Text style= {styles.carteira}>
            R$ 3,30 Carteira
          </Text>

        <Text style ={styles.fundo2}>
             <Text style ={styles.conteudo}> Meu Conteudo </Text>
        </Text>

    <Text style ={styles.ativ}> Atividade dos Amigos </Text>
     <Text style ={styles.amg}> Amigos </Text>
     <Text style ={styles.amg}> Grupos </Text>
      <Text style ={styles.amg}> Captura de tela e videos </Text>
      <Text style ={styles.amg}> Insignias </Text>
       <Text style ={styles.amg}> Inventario </Text>
    </View>


      <View>
     
      </View>



  

</View>
  );

  
}

const styles = StyleSheet.create({

amigos: {
  
height: 120,
width: '100%',
 backgroundColor:'#202126',
 
},

amigoaba: {
  color: '#FFFFFF',
    borderRadius: 3,
alignItems: 'center',
height: 41,
width: 63,
marginLeft: 150,
marginTop: -40,
fontSize: 15,
backgroundColor: '#292c33',

},

carteira: {

color: '#FFFFFF',
    borderRadius: 3,
alignItems: 'center',
height: 41,
width: 63,
marginLeft: 280,
marginTop: -40,
fontSize: 15,
backgroundColor: '#292c33',

},


fundo: {
  flex: 3,
  
   backgroundColor:'#292c33',
  
},

fundo2: {
marginTop:50,
height: 250,
width: '100%',
backgroundColor: '#292c33',


},


conteudo: {
color: '#A9A9A9',
fontSize: 20,
},

ativ: {
fontSize:20,
color: '#FFFFFF',
marginTop: -215,
marginLeft: 10,
},

amg: {

  fontSize:20,
color: '#FFFFFF',
marginTop: 0,
marginLeft: 10,

},

grupo: {



},

jogos: {
  color: '#FFFFFF',
  borderRadius: 3,
height: 41,
width: 63,
marginLeft: 30,
marginTop: -90,
fontSize: 15,
backgroundColor: '#292c33',

},

button: {
    height: 40,
    width: 350,
     alignItems: 'center',
    backgroundColor: '#3999ed',
    padding: 10,
    borderRadius: 10,
    marginLeft: 30,
    marginTop: 80,
   
  },
});
