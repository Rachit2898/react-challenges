import "./App.css";
import Index from "./fetchApi/screens";
import { Provider } from "react-redux";
import store from "./fetchApi/redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Index />
      </Provider>
    </div>
  );
}

export default App;
