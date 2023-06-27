import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  contentContainer: {
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

  labelEntradas: {
    fontSize: 14,
    fontFamily: "MerriweatherSans-Medium",
    color: COLORS.tertiary,
    textAlign: "center",
  },

  picker: {
    color: COLORS.black,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    width: "75%",
  },

  buttonContainer: {
    paddingVertical: 15,
    width: "80%",
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
