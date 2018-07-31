import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceSreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceSreen from "./src/screens/FindPlace/FindPlace";
import configureStore from "./src/store/configureStore";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";

const store = configureStore();
//Register Sreen
Navigation.registerComponent(
  "ReactNativeCourse.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "ReactNativeCourse.SharePlaceSreen",
  () => SharePlaceSreen,
  store,
  Provider
);

Navigation.registerComponent(
  "ReactNativeCourse.FindPlaceSreen",
  () => FindPlaceSreen,
  store,
  Provider
);

Navigation.registerComponent(
  "ReactNativeCourse.PlaceeDetialScreen",
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
