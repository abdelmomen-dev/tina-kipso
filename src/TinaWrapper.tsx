import { useContext, useEffect, useMemo, useState } from "react";
import { ScreenPlugin, TinaCMS, TinaProvider } from "tinacms";
import { AppContext } from "./context/AppContext";

const TopDish = () => <span>📡</span>;

const MainScreenPlugin: ScreenPlugin<any> = {
  name: "اعدادات الموقع",
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

export default function TinaWrapper({ children }: any) {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useContext(AppContext);
  useEffect(() => {
    setIsAdmin(user?.id !== undefined);
  }, [user]);
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
  }, [isAdmin]);
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

  useEffect(() => {
    setTimeout(() => {
      const plugin = cms.screens.find("اعدادات الموقع");
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
  return <TinaProvider cms={cms}>{children}</TinaProvider>;
}
