import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 100,
  },

  input: {
    color: COLORS.black,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    width: 300,
    borderRadius: 4,
    padding: 10,
  },

  errorMessage: {
    color: "red",
    fontFamily: "MerriweatherSans-Light",
  },
});
