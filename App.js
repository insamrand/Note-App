import React from "react";
import { StyleSheet, Platform } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import HomePage from "./pages/home-page/HomePage";
import NewNotePage from "./pages/new-note-page/NewNotePage";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// import Provider Component มาใช้กับ
// store object ที่เราสร้างขึ้นมาเอง
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage
  },
  CreateNote: {
    screen: NewNotePage
  }
});
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  // Constructor method, ทำงานเป็นตัวแรกตอน class App ถูกสร้างขึ้นมาใช้งานในระบบ
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  // Life cycle method `componentDidMount()`
  // ทำงานหลังจาก App component ถูกสร้างขึ้นแสดงบนหน้าแอพแล้ว
  async componentDidMount() {
    // สั่งให้ Load font เพื่อใช้งานใน UI Component ที่สร้างด้วย Native base
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });

    // ตั้งค่า State ใหม่ เพื่อให้ App component ทำการ render ตัวเองอีกครั้ง
    this.setState({ isReady: true });
  }

  render() {
    if (this.state.isReady == false) {
      return <AppLoading />;
    }
    const { container } = styles;
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
    // <NewNotePage />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  androidContainer: {
    height: 70,
    paddingTop: Platform.OS === "android" ? 27 : 0
  }
});
