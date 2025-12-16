// import { configureStore } from "@reduxjs/toolkit";
// import { groqApi } from "./api/groqApi";
// import promptReducer from "./promptSlice"; // this is a slice, not an API

// export const store = configureStore({
//   reducer: {
//     [groqApi.reducerPath]: groqApi.reducer, // RTK Query API reducer
//     prompt: promptReducer, // ✅ just use a key name here (no .reducer)
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(groqApi.middleware), // ✅ only API middlewares here
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { groqApi } from "./api/groqApi";
import promptReducer from "./promptSlice";
import storage from "redux-persist/lib/storage"; // default: localStorage
import { persistReducer, persistStore } from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";

// Combine reducers
const rootReducer = combineReducers({
  [groqApi.reducerPath]: groqApi.reducer,
  prompt: promptReducer,
});

// Configure persistence
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["prompt"], // only persist prompt slice
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // turn off for redux-persist
    }).concat(groqApi.middleware),
});

// Setup RTK Query listeners
setupListeners(store.dispatch);

// Persistor
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
