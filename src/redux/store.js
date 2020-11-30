import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import userContactsRoot from "./slice/contacts/userContactsRoot";
import userAuthRoot from "./slice/users/userAuthRoot";

const userAuthPersistConfig = {
  key: 'userAuth',
  storage,
  whitelist:['token']
}



export const store = configureStore({
  reducer: {
    userContacts:userContactsRoot,
    userAuth:persistReducer(userAuthPersistConfig,userAuthRoot)
  },
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor=persistStore(store)
