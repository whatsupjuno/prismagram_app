import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

import AuthButton from "../../components/AuthButton";
import constants from "../../constants";

export default ({ navigation }) => (
  <View>
    <Image resizeMode={"contain"} source={require("../../assets/logo.png")} />
    <AuthButton
      text={"Create New Account"}
      onPress={() => navigation.navigate("SignUp")}
    />
    <Touchable onPress={() => navigation.navigate("LogIn")}>
      <LoginLink>
        <LoginLinkText>Log in</LoginLinkText>
      </LoginLink>
    </Touchable>
  </View>
);

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.Image`
  width: ${constants.width / 2.5};
`;

const Touchable = styled.TouchableOpacity``;

const LoginLink = styled.View``;

const LoginLinkText = styled.Text`
  color: ${props => props.theme.blueColor};
  font-weight: 600;
  margin-top: 20px;
`;
