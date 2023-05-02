import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${alexandria.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
