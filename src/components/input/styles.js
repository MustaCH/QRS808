import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    color: COLORS.black,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    width: 300,
    borderRadius: 4,
    padding: 10,
  },
  errorContainer: {},
  errorMessage: {
    color: "red",
    fontFamily: "MerriweatherSans-Light",
  },
});