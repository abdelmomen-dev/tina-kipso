import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useApollo } from "../apolloClient";
import AppContextProvider from "../src/context/AppContext";
import TinaWrapper from "../src/TinaWrapper";
import "../styles/scss/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialState);

  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <TinaWrapper>
          <Component {...pageProps} />
        </TinaWrapper>
      </AppContextProvider>
    </ApolloProvider>
  );
}
export default MyApp;
