import React from "react";

import AuthNavigation from "../navigations/AuthNavigation";
import MainNavigation from "../navigations/MainNavigation";
import { useIsLoggedIn } from "../AuthContext";

export default () => {
  const isLoggedIn = useIsLoggedIn();
  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />;
};
