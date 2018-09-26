# expo-barcode-pdf417 [![npm version](https://badge.fury.io/js/expo-barcode-pdf417.svg)](https://badge.fury.io/js/expo-barcode-pdf417)

React Native component for pdf417 barcode. This module is based on https://github.com/bkuzmic/pdf417-js.

Forked from [react-native-barcode-pdf417](https://github.com/GingerBear/react-native-barcode-pdf417)
to replace ART dependency with [react-native-svg](https://github.com/react-native-community/react-native-svg)
(which is builtin to Expo).

![screen shot 2017-06-19 at 2 52 59 pm](https://user-images.githubusercontent.com/902357/27300810-09ec0efa-54ff-11e7-971b-fef49851525f.png)

### Install

```
yarn add notpushkin/expo-barcode-pdf417
```


### Usage

```js
import Barcode from "expo-barcode-pdf417";

<Barcode text="123124123" width={250} height={100} />

```

License: MIT
