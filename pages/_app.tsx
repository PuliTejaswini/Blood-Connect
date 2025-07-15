import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const ComponentToRender = Component as any;
  return <ComponentToRender {...pageProps} />;
}
