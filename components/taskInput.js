import { SafeAreaView, TextInput } from "react-native";
import { FAB } from "react-native-paper";
import styles from "./style";

const Input = (props) => {
    return (
        <SafeAreaView style={{flex:1}}>
                 <FAB icon='send' color="white"  style={{position: 'absolute', right: 13, bottom:12,}} onPress={() =>props.onPress} />
            <TextInput placeholder='write something' secureTextEntry={props.secure} onChangeText={props.onChangeText} style={styles.textInput} />
        </SafeAreaView>
    )
}
export default Input;