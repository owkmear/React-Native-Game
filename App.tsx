import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { NativeBaseProvider } from "native-base";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { setupStore } from "./store/store";
import "./i18n";

const store = setupStore();
const persistor = persistStore(store);

// TODO: delete after deploy to production
persistor.purge();
persistor.flush();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>
        <SafeAreaProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </PersistGate>
          </Provider>
        </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}
