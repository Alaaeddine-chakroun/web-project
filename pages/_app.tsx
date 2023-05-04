import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Alexandria } from "next/font/google";
import { useRef } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

const alexandria = Alexandria({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient()).current;
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${alexandria.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
