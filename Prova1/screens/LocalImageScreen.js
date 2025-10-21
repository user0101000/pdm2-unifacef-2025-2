import {Image, Button, StyleSheet, View} from 'react-native'

export default function WebScreen() {
    return <>
     <View>
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/500px-A_small_cup_of_coffee.JPG'}} />
        <Button
            title="Voltar"
            onPress={() => navigation.goBack()}
        />
     </View>
    </>
}