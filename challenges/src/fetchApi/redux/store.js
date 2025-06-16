import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features";

export default configureStore({ reducer: reducer });
