import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },

  content: {
    flex: 1,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontFamily: "MerriweatherSans-Bold",
    fontSize: 20,
    color: COLORS.white,
    marginVertical: 10,
  },

  submit: {
    marginVertical: 5,
  },

  link: {
    marginTop: 45,
  },

  linkText: {
    fontFamily: "MerriweatherSans-Light",
    color: COLORS.tertiary,
    fontSize: 15,
  },
});
