import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: COLORS.background,
    borderRadius: 8,
    borderColor: COLORS.tertiary,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 8,
    shadowColor: COLORS.tertiary,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4.65,

    elevation: 6,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 4,
  },
  label: {
    fontWeight: "bold",
    color: COLORS.tertiary,
    marginHorizontal: 8,
  },

  value: {
    color: COLORS.white,
    marginHorizontal: 8,
  },
});
