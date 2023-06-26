import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: COLORS.white,
  },
  searchIcon: {
    marginLeft: 10,
  },
});
