import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SignUp from "../screens/Auth/SignUp";
import Confirm from "../screens/Auth/Confirm";
import LogIn from "../screens/Auth/LogIn";
import AuthHome from "../screens/Auth/AuthHome";

//참고 : https://reactnavigation.org/docs/en/stack-navigator.html

const AuthNavigation = createStackNavigator(
  {
    LogIn,
    AuthHome,
    SignUp,
    Confirm
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default createAppContainer(AuthNavigation);
