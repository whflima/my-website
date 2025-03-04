import { MyProvider } from "@/components/MyProvider";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

import '../utils/i18n.index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </MyProvider>
  );
}
