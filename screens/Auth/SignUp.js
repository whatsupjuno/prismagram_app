import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation }) => (
  <View>
    <Text>Sign Up</Text>
    <TouchableOpacity onPress={() => navigation.navigate("AuthHome")}>
      <Text>Move to AuthHome</Text>
    </TouchableOpacity>
  </View>
);

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;
