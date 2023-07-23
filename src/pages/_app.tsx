import "@/styles/globals.css";
import type { AppProps } from "next/app";
import useFontSize from "./font/fontSize";

export default function App({ Component, pageProps }: AppProps) {
  useFontSize();
  return <Component {...pageProps} />;
}
