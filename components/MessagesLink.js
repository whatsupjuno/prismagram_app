import React from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";

export default withNavigation(({ navigation }) => (
  <Container onPress={() => navigation.navigate("MessageNavigation")}>
    <Text>Messages</Text>
  </Container>
));

const Container = styled.TouchableOpacity``;
const Text = styled.Text``;
