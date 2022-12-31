import { Dimensions, StyleSheet } from 'react-native';
const sc = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInput: {
        backgroundColor:'orange',
        borderRadius: 10,
        width: sc.width/1.3 ,
        height: sc.height / 11,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginVertical: 6,
        position: 'absolute',
        left: 8,
        bottom: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,

        elevation: 1.5,
    },
    showtextInput: {
        borderRadius: 10,
        height: sc.height / 13,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginVertical: 6,
        justifyContent: 'center',
        shadowColor: "#000",
        marginRight:10,
        marginLeft:10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,

        elevation: 1.5,
    },
    showtextInputC: {
        borderRadius: 10,
        height: sc.height / 13,
        width:sc.width/1.22,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginVertical: 6,
        justifyContent: 'center',
        shadowColor: "#000",
        marginRight:10,
        marginLeft:10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,

        elevation: 1.5,
    }
})
export default styles;