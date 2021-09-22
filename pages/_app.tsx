import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import React, { useMemo } from "react";
import { TinaCMS, TinaProvider } from "tinacms";
import { useApollo } from "../apolloClient";
import "../styles/scss/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: process.env.NODE_ENV !== "production",
      toolbar: true,
      sidebar: true,
    });
  }, []);
  const client = useApollo(pageProps.initialState);
  return (
    <ApolloProvider client={client}>
      <TinaProvider cms={cms}>
        <Component {...pageProps} />
      </TinaProvider>
    </ApolloProvider>
  );
}
export default MyApp;
