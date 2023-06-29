import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },

  scannerContainer: {
    alignContent: "center",
    justifyContent: "center",
    height: 400,
    width: 500,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: COLORS.background,
  },

  scanner: {
    width: 500,
    height: 500,
  },

  scannedTextContainer: {
    marginVertical: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.background,
  },

  scannedText: {
    fontFamily: "MerriweatherSans-Regular",
    color: COLORS.tertiary,
  },
});
