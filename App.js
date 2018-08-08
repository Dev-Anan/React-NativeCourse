import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import configureStore from "./src/store/configureStore";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";

const store = configureStore();
//Register Screen
Navigation.registerComponent(
  "ReactNativeCourse.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "ReactNativeCourse.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "ReactNativeCourse.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "ReactNativeCourse.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "ReactNativeCourse.SideDrawer",
  () => SideDrawer
);
//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "ReactNativeCourse.AuthScreen",
    title: "Login"
  }
});
