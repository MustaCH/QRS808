import { View, SafeAreaView, Text, Button } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { Input } from "../../components";
import { COLORS } from "../../constants";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../../store/actions";

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const title = isLogin ? "Login" : "Registrate";
  const buttonTitle = isLogin ? "Iniciar Sesión" : "Crear Cuenta";
  const messageText = isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?";

  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandleAuth = () => {
    dispatch(isLogin ? signIn({ email, password }) : signUp({ email, password }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Input
          placeholder="miemail@email.com"
          label="E-mail"
          keyboardType="email-address"
          touched={true}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Input
          placeholder="********"
          label="Contraseña"
          touched={true}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <View style={styles.submit}>
          <Button title={buttonTitle} color={COLORS.tertiary} onPress={onHandleAuth} />
        </View>
        <TouchableOpacity style={styles.link} onPress={onHandleChangeAuth}>
          <Text style={styles.linkText}>{messageText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Auth;
