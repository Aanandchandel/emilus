import { configureStore } from "@reduxjs/toolkit";
import  modeSlice  from "./slices/mode/mode";
import  dataSlice  from "./slices/data/data";
export const store=configureStore({
    reducer :{mode:modeSlice,
    data:dataSlice}
})