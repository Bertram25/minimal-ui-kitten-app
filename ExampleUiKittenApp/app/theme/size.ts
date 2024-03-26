import { mapping } from "@eva-design/eva";
import { StyleSheet } from "react-native";

export const size = StyleSheet.create({
  extraTiny: {
    width: 20,
    height: 20,
  },
  tiny: {
    width: mapping.strict["size-tiny"],
    height: mapping.strict["size-tiny"],
  },
  small: {
    width: mapping.strict["size-small"],
    height: mapping.strict["size-small"],
  },
  medium: {
    width: mapping.strict["size-medium"],
    height: mapping.strict["size-medium"],
  },
  large: {
    width: mapping.strict["size-large"],
    height: mapping.strict["size-large"],
  },
  giant: {
    width: mapping.strict["size-giant"],
    height: mapping.strict["size-giant"],
  },
  extraGiant: {
    width: 64,
    height: 64,
  },
  jumbo: {
    width: 80,
    height: 80,
  },
});
