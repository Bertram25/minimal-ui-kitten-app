import { StyleSheet } from "react-native";
import { tokens } from "./tokens";

export const mainHorizontalPadding = tokens.spacing["spacing-6"];

export const layout = StyleSheet.create({
  /** Flex layout */
  flex: {
    flex: 1,
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  /** Custom Layout */
  authScreenLayout: {
    paddingHorizontal: mainHorizontalPadding,
    marginTop: tokens.spacing["spacing-10"],
  },
  stackScreenLayout: {
    paddingHorizontal: mainHorizontalPadding,
    marginTop: tokens.spacing["spacing-3"],
  },
  tabScreenLayout: {
    paddingHorizontal: mainHorizontalPadding,
    marginTop: tokens.spacing["spacing-6"],
  },
  titleTabScreenLayout: {
    paddingHorizontal: mainHorizontalPadding,
    marginTop: tokens.spacing["spacing-6"],
  },
  titleStackScreenLayout: {
    paddingHorizontal: mainHorizontalPadding,
    marginTop: tokens.spacing["spacing-3"],
  },
  stickyFooterButtonLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: tokens.borderWidth["width-1"],
    paddingVertical: tokens.spacing["spacing-4"],
    paddingHorizontal: tokens.spacing["spacing-3"],
  },
  mainHorizontalPadding: {
    paddingHorizontal: mainHorizontalPadding,
  },
  mainBottomPadding: {
    paddingBottom: tokens.spacing["spacing-5"],
  },

  /** Components */
  form: {
    paddingBottom: tokens.spacing["spacing-5"],
  },
  checkbox: {
    paddingBottom: tokens.spacing["spacing-5"],
  },
  divider: {
    marginVertical: tokens.spacing["spacing-5"],
  },
  toggle: {
    paddingHorizontal: tokens.spacing["spacing-2"],
  },
  listItemSeparator: {
    marginBottom: tokens.spacing["spacing-3"],
  },

  /** Headers  */
  h1: {
    paddingBottom: tokens.spacing["spacing-6"],
  },
  h2: {
    paddingBottom: tokens.spacing["spacing-5"],
  },
  h3: {
    paddingBottom: tokens.spacing["spacing-5"],
  },
  h4: {
    paddingBottom: tokens.spacing["spacing-4"],
  },
  h5: {
    paddingBottom: tokens.spacing["spacing-4"],
  },
  h6: {
    paddingBottom: tokens.spacing["spacing-3"],
  },

  /** HTML elements */
  p1: {
    paddingBottom: tokens.spacing["spacing-3"],
  },
  li: {
    paddingStart: tokens.spacing["spacing-4"],
  },
});
