import { View, Text, Button } from "react-native";
import { styles } from "./style";
import { useReducer, useState } from "react";
import { Input } from "../../components";
import { COLORS } from "../../constants";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../../store/actions";
import { UPDATED_FORM, onInputChange } from "../../utils/form";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
  }
};

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isLogin ? "Login" : "Registrate";
  const buttonTitle = isLogin ? "Iniciar Sesión" : "Crear Cuenta";
  const messageText = isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?";

  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandleAuth = () => {
    dispatch(
      isLogin
        ? signIn({ email: formState.email.value, password: formState.password.value })
        : signUp({ email: formState.email.value, password: formState.password.value })
    );
  };

  const onHanlerInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Input
          placeholder="miemail@email.com"
          label="E-mail"
          keyboardType="email-address"
          touched={formState.email.touched}
          hasError={formState.email.hasError}
          error={formState.email.error}
          onChangeText={(text) => onHanlerInputChange({ value: text, name: "email" })}
          value={formState.email.value}
        />
        <Input
          placeholder="********"
          label="Contraseña"
          touched={formState.password.touched}
          hasError={formState.password.hasError}
          error={formState.password.error}
          secureTextEntry
          onChangeText={(text) => onHanlerInputChange({ value: text, name: "password" })}
          value={formState.password.value}
        />
        <View style={styles.submit}>
          <Button
            disabled={!formState.isFormValid}
            title={buttonTitle}
            color={COLORS.tertiary}
            onPress={onHandleAuth}
          />
        </View>
        <TouchableOpacity style={styles.link} onPress={onHandleChangeAuth}>
          <Text style={styles.linkText}>{messageText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Auth;
