import React from "react";
import { tokens, typography } from "../../theme";
import { Button, Text } from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";
import { ImageProps, Keyboard, StyleSheet } from "react-native";

export interface ButtonTextProps {
  text: string;
  language?: string;
  appearance?: string;
  status?: string;
  size?: string;
  disabled?: boolean;
  accessoryLeft?: RenderProp<Partial<ImageProps>>;
  accessoryRight?: RenderProp<Partial<ImageProps>>;
  onPress?: () => void;
  style?: object;
}

export const ButtonText = ({
  text,
  appearance,
  status,
  size,
  disabled,
  accessoryLeft,
  accessoryRight,
  onPress,
  style,
}: ButtonTextProps) => {
  const buttonAppearance = appearance || "filled";
  // default appearance is filled in eva design system
  const buttonStyle = buttonAppearance === "filled" ? [customStyle.hideBorder, style] : style;
  return (
    <Button
      style={buttonStyle}
      appearance={buttonAppearance}
      status={status}
      size={size}
      disabled={disabled}
      accessoryLeft={accessoryLeft}
      accessoryRight={accessoryRight}
      onPress={() => {
        Keyboard.dismiss();
        if (onPress) {
          onPress();
        }
      }}>
      {evaProps => {
        return <Text style={[typography.center, typography.uppercase, evaProps?.style]}>{text}</Text>;
      }}
    </Button>
  );
};

const customStyle = StyleSheet.create({
  hideBorder: {
    borderWidth: tokens.borderWidth["width-0"],
  },
});
