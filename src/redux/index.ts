import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import global from "@/redux/modules/global/slice";

// 创建reducer(拆分reducer)
const reducer = combineReducers({
  global
});
// redux 持久化配置
const persistConfig = {
  key: "redux-state",
  storage: storage
};

const persistReducerConfig = persistReducer(persistConfig, reducer);

// configureStore创建一个redux数据仓库
const store = configureStore({
  // 合并多个Slice
  reducer: persistReducerConfig,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
}); //创建一个redux持久化仓库

const persistor = persistStore(store);
export { store, persistor };
