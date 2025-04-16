import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Button, TouchableHighlight} from 'react-native';

const titulo = 'Hola Mundo';

const icon = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="ligth" />
      <Image source={{uri:"https://flagcdn.com/w320/mx.png"}} style={[styles.image, {}]} />
      <Text style={{color:'white'}} >{titulo}</Text>
      <Button title='Presioname' onPress={() => alert('Hola Mundo')}/>
        <TouchableHighlight onPress={() => alert('Hola Mundo TouchableHighlight')} 
          style={styles.button_principal}>
          <Text style={{color:'white'}}>Presioname</Text>
          </TouchableHighlight>

          <Pressable 
           onPress={() => {
             alert('Hola Mundo Pressable')
           }}

          style={({pressed}) => {[ styles.button_principal,
            {
              backgroundColor: pressed ? 'blue' : 'red',
            }]}}>
            {({pressed}) => (
              <Text style={[styles.Text,{fontsize: pressed ? 32 : 16, color: 'white'}]}>
                {pressed ? 'Presionado' : 'Presioname'}
              </Text>
            )}
          </Pressable>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 50,
    width: 100,
     height: 100,
     borderWidth:3,
     borderColor:'#ede'
  },
  button_principal: {
    backgroundColor:'red',
    color:'white',
    padding:10,
    borderRadius:5,
    height:50,
    width:200,
    alignItems:'center',
    justifyContent:'center',
  },
});
 