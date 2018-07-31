import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceSreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceSreen from "./src/screens/FindPlace/FindPlace";

//Register Sreen
Navigation.registerComponent(
  "ReactNativeCourse.AuthScreen",
  () => AuthScreen
);

Navigation.registerComponent(
  "ReactNativeCourse.SharePlaceSreen",
  () => SharePlaceSreen
);

Navigation.registerComponent(
  "ReactNativeCourse.FindPlaceSreen",
  () => FindPlaceSreen
);

//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "ReactNativeCourse.AuthScreen",
    title: "Login"
  }
});
