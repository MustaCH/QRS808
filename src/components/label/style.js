import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  label: {
    fontSize: 14,
    fontFamily: "MerriweatherSans-Medium",
    color: COLORS.tertiary,
  },

  subLabel: {
    fontSize: 12,
    fontFamily: "MerriweatherSans-Bold",
    color: COLORS.white,
  },
});
