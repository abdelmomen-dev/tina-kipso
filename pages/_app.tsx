import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useEffect, useMemo } from "react";
import { ScreenPlugin, TinaCMS, TinaProvider } from "tinacms";
import { useApollo } from "../apolloClient";
import "../styles/scss/style.scss";

const TopDish = () => <span>📡</span>;

const MainScreenPlugin: ScreenPlugin<any> = {
  name: "اعدادات برمجية",
  Component: () => <h1>Hello اعدادات</h1>,
  Icon: () => <span>🌁</span>,
  layout: "popup",
  __type: "screen",
};

const TopDishWidget = {
  __type: "toolbar:widget",
  name: "howdy",
  weight: 5,
  component: TopDish,
};

function MyApp({ Component, pageProps }: AppProps) {
  const isAdmin = true;
  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: process.env.NODE_ENV !== "production" && isAdmin,
      toolbar: {
        buttons: {
          save: "حفظ",
          reset: "اعادة تعيين",
        },
      },
      sidebar: true,
    });
  }, []);
  cms.plugins.add(TopDishWidget);
  cms.plugins.add(MainScreenPlugin);
  /*
  const plugins = cms.plugins.all("screen");
  cms.plugins.remove(plugins[0]);
  console.log("screen plugins", plugins);
  */
  // Or
  if (cms.screens.find("Media Manager")) {
    cms.screens.remove("Media Manager");
  }
  const client = useApollo(pageProps.initialState);
  useEffect(() => {
    setTimeout(() => {
      const plugin = cms.screens.find("اعدادات برمجية");
      // Currently can't triiger show screen
      console.log(plugin);
    }, 200);
  }, []);
  //
  /* Log all events
  cms.events.subscribe("*", (event) => {
    console.log(event);
  });
  */
  return (
    <ApolloProvider client={client}>
      <TinaProvider cms={cms}>
        <Component {...pageProps} />
      </TinaProvider>
    </ApolloProvider>
  );
}
export default MyApp;
