import * as React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import colors from '../configs/colors'
import strings from '../configs/strings'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.WHITE,
      alignItems: "center",
      justifyContent: "center"
    }
});

class LoginScreen extends React.Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text>{strings.LOGIN}</Text>
                <Image 
                    source={{
                        uri: "https://alphapixelreach.com/wp-content/uploads/2017/08/7399-cat-face.png"
                    }} 
                    style = {{ width: 200, height: 200 }}
                    />
                    <Button
                    onPress={() => {
                        Alert.alert("yeah dude");
                    }}
                    title="press this btn"
                />
            </View>
        )
    }
}
  
export default LoginScreen;