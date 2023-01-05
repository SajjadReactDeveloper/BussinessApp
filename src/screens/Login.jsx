import { Text, StyleSheet, View } from "react-native";
import colors from "../constants/colors";

const Login = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.signinTxt}>Sign In</Text>
            <Image source={require("../../assets/logo.png")} style={styles.logo}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.backgroundColor,
    }
});

export default Login;