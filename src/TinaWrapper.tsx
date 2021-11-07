import { useContext, useEffect, useMemo, useState } from "react";
import { ScreenPlugin, TinaCMS, TinaProvider } from "tinacms";
import { AppContext } from "./context/AppContext";

const ScreenComponent = () => (
  <div className="w-full ">
    <div className="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
  </div>
);
const ScreenIcon = () => <span>🍄</span>;
const MainScreenPlugin: ScreenPlugin<any> = {
  name: "اعدادات الموقع",
  Component: ScreenComponent,
  Icon: ScreenIcon,
  layout: "fullscreen",
  __type: "screen",
};

const TopDishWidget = {
  __type: "toolbar:widget",
  name: "howdy",
  weight: 5,
  component: ScreenIcon,
};

export default function TinaWrapper({ children }: any) {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useContext(AppContext);
  useEffect(() => {
    setIsAdmin(user?.id !== undefined);
  }, [user]);
  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: isAdmin,
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
  }, [cms.screens]);
  //
  /* Log all events
  cms.events.subscribe("*", (event) => {
    console.log(event);
  });
  */
  return <TinaProvider cms={cms}>{children}</TinaProvider>;
}
