import {Image, Button, View} from 'react-native'

export default function WebImageScreen({ navigation }) {
    return <>
     <View>
        <Image 
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/500px-A_small_cup_of_coffee.JPG'}}
          style = {{width: 300, height: 240}}
        />

        <Button
            title="Voltar"
            onPress={() => navigation.goBack()}
        />
     </View>
    </>
}