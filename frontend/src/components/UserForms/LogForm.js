import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import { Text, withTheme, Button } from "react-native-paper";
import { connect } from "react-redux";
import { Akira } from "react-native-textinput-effects";
import { Ionicons } from "@expo/vector-icons";

import { handleLogFormChange } from "../../store/actions/index";
import { createLog } from "../../store/actions/logs";

const LogForm = props => {
  const {
    currentLog,
    isEditing,
    isLoading,
    theme,
    handleLogFormChange
  } = props;
  let ratingArray = new Array(5);
  ratingArray.fill(0);
  ratingArray.fill(1, 0, currentLog.rating);
  return (
    <View>
      <Text>LogForm</Text>
      {ratingArray.map((star, index) =>
        star === 1 ? (
          <Ionicons name="md-star" size={32} color="yellow" key={index} />
        ) : (
          <Ionicons name="md-star-outline" size={32} color="gray" key={index} />
        )
      )}
      <Formik>
        {props => (
          <View style={theme.formView}>
            <View style={theme.formInputsContainer}>
              <Akira
                style={theme.formInput}
                label={"Comment"}
                value={currentLog.comment}
                borderColor={"lightgray"}
                inputPadding={16}
                labelHeight={24}
                labelStyle={{ color: "#870c27" }}
                onChangeText={value => handleLogFormChange("comment", value)}
                autoCapitalize={"none"}
              />
            </View>
            <Button
              onPress={
                isEditing
                  ? () => updateLog(currentLog)
                  : () => createLog(currentLog)
              }
            >
              {isEditing ? "Update" : "Save"}
            </Button>
            {/* /> */}
          </View>
        )}
      </Formik>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    logs: state.logs,
    currentLog: state.logs.currentLog,
    isLoading: state.logs.isLoading,
    isEditing: state.logs.isEditing
  };
};

export default connect(mapStateToProps, { handleLogFormChange })(
  withTheme(LogForm)
);
