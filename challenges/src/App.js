import "./App.css";
import Index from "./fetchApi/screens";
import { Provider } from "react-redux";
import store from "./fetchApi/redux/store";
import List from "./list"
import CommentSection from "./comments";
import OTP from "./otp";
function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
        {/* <Index /> */}
        {/* <List/> */}
        {/* <CommentSection/> */}
        <OTP/>
      {/* </Provider> */}
    </div>
  );
}

export default App;
