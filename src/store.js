import { configureStore } from "@reduxjs/toolkit";
import canvasStore from "./stores/canvasStore";

export default configureStore({
  reducer: { canvas: canvasStore },
});
