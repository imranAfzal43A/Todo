import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import * as Animatable from 'react-native-animatable';
import styles from "./style";
const DataView = (props) => {
  return (
    <Animatable.View animation={'fadeInUp'} duration={1000} delay={300} style={{flexDirection:'row',justifyContent:'space-between'}}>
       <FAB icon='delete' small={true} color="white" style={{ position: 'absolute', right: 13, bottom: 12, }} onPress={props.onPress} />
      <View style={styles.showtextInputC}>
        <Text>{props.title}</Text>
      </View>
    </Animatable.View>
  )
}
export default DataView;