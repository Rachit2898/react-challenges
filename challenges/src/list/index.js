import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import List from "./app";

function Index() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}

export default Index;
