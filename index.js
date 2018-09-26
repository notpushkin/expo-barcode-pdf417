import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Svg } from 'expo';
const { G, Path } = Svg;

import createPDF417 from "./lib/pdf417-min";

export default class RNPDF417 extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({
        isLoading: false
      });
    });
  }

  render() {
    const { width, height, text } = this.props;

    if (this.state.isLoading) {
      return (
        <View style={[S.loadingContainer, { width, height }]}>
          <ActivityIndicator style={S.loadingIndicator} />
        </View>
      );
    }

    const PDF417 = createPDF417();

    PDF417.init(text);
    const barcode = PDF417.getBarcodeArray();

    const w = width / barcode.num_cols;
    const h = height / barcode.num_rows;
    let shapes = "";

    barcode.bcode.forEach((line, i) => {
      line.forEach((code, j) => {
        if (code === "1") {
          shapes += `M ${j * w} ${i * h} h ${w} v ${h} h -${w} L ${j * w} ${i * h} z `;
        }
      });
    });

    return (
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <G x={0} y={0}>
          <Path d={shapes} fill="#000000" />
        </G>
      </Svg>
    );
  }
}

const S = StyleSheet.create({
  loadingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingIndicator: {
    marginRight: 10
  }
});
