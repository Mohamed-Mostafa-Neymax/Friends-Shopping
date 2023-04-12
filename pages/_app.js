import { Provider } from "react-redux";

import '../styles/globals.scss';
import storeWrapper from "../store/index";

export default function App({ Component, ...rest }) {
  const { store, props } = storeWrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
