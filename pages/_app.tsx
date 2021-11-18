import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "../utils/web3-react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;
