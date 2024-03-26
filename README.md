# Minimal react native app

## Prerequisites

    Android Studio (at least 2021.11 or above)
    node 16 or above
    yarn 1.22 or above (not compatible with newer yarn versions for now)
    JDK: E.g. open JDK at least 17

## Setup

This app was created using:
```
npx react-native init ExampleUiKittenApp --version 0.73
```

## Run on Android

`yarn start` then use metro options to run on Android
Alternatively, you can run `yarn android` in another terminal

More info in `ExampleUiKittenApp/README.md` 

## Dependencies:

- Standard
  - "@eva-design/eva": "^2.2.0",
  - "@ui-kitten/components": "^5.3.1",
  - "@ui-kitten/eva-icons": "^5.3.1",
  - "react-native-svg": "^15.1.0"

- Development
  - "@ui-kitten/metro-config": "^5.3.1",
  - "metro-config": "^0.80.7"
