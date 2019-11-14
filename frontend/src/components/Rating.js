import React from "react";
import { View } from "react-native";
import { connect } from "formik";
import { Ionicons } from "@expo/vector-icons";

const Rating = props => {
  const { rating } = props;
  const ratingArray = new Array(5);

  ratingArray.map((star, index) => {
    if (rating => index) {
      return;
      <Ionicons name="md-star" size={32} color="yellow" key={index} />;
    } else {
      return;
      <Ionicons name="md-star-outline" size={32} color="gray" key={index} />;
    }
  });
};
export default Rating;
