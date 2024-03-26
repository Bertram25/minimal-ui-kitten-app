import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Header,
} from 'react-native/Libraries/NewAppScreen';
import { ButtonText } from './app/components/general/ButtonText';

import { colors, ThemeContextProvider, useThemePersistence } from "./app/theme";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";


function App(): React.JSX.Element {

  const { theme, onThemeChange } = useThemePersistence();

  return (
    <ThemeContextProvider value={{ value: theme, switchTheme: onThemeChange }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...theme, ...colors }}>
        <SafeAreaView>
          <StatusBar
            barStyle={'light-content'}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
          >
            <Header />
            <View>
              <View>
                <Text style={styles.text}>This is a button with custom mapping test.</Text>
                <Text style={styles.text}>The button should have the giant custom mapping.</Text>
                <Text style={styles.text}>If it is functional, then no warnings (e.g.: "Button: Unsupported configuration.") should be triggered when running it.</Text>
              </View>
              <ButtonText text={"Test button"} size="giant" />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ApplicationProvider>
    </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

export default App;
