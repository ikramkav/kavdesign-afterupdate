// "use client";

// import { Provider } from "react-redux";
// import { store } from "../app/store/redux/store";

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <Provider store={store}>{children}</Provider>;
// }

"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../app/store/redux/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {/* PersistGate delays rendering until persisted state is loaded */}
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
