import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },

  titleContainer: {
    marginVertical: 5,
  },

  title: {
    fontSize: 25,
    fontFamily: "MerriweatherSans-ExtraBold",
    color: COLORS.tertiary,
    paddingVertical: 10,
  },

  inputName: {
    color: COLORS.black,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    width: "80%",
    borderRadius: 4,
    padding: 10,
  },

  inputApellido: {
    color: COLORS.black,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    width: "80%",
    borderRadius: 4,
    padding: 10,
  },

  inputDNI: {
    color: COLORS.black,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    width: "80%",
    borderRadius: 4,
    padding: 10,
  },

  inputMail: {
    color: COLORS.black,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    width: "80%",
    borderRadius: 4,
    padding: 10,
  },

  picker: {
    color: COLORS.black,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    width: "80%",
  },

  buttonContainer: {
    paddingVertical: 15,
  },

  helperContainer: {
    marginVertical: 5,
  },

  helper: {
    fontSize: 11,
    fontFamily: "MerriweatherSans-Regular",
    color: COLORS.tertiary,
    paddingVertical: 10,
  },

  errorText: {
    color: "red",
    fontFamily: "MerriweatherSans-Light",
  },
});
