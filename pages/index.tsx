import type { NextPage } from "next";
import { InlineForm, InlineText } from "react-tinacms-inline";
import { useForm, usePlugin } from "tinacms";
import AboutTwoAlter from "../components/AboutTwoAlter";
import CountDownAlter from "../components/CountDownAlter";
import CourseCatAlter from "../components/CourseCatAlter";
import CourseOne from "../components/CourseOne";
import FooterAlter from "../components/FooterAlter";
import { getHomeForm } from "../components/forms/forms";
import Layout from "../components/Layout";
import NavOneAlter from "../components/NavOneAlter";
import SliderOneAlter from "../components/SliderOneAlter";
import Topbar from "../components/Topbar";
import VideoTwoAlter from "../components/VideoTwoAlter";
import { getAllProducts } from "../helpers/product";

const Home: NextPage = ({ mdFile }: any) => {
  /*
  const ScreenPlugin1: ScreenPlugin<any> = {
    name: "اعدادات الصفحة الرئيسية",
    Component: () => <h1>Hello اعدادات</h1>,
    Icon: () => <span>🌁</span>,
    layout: "fullscreen",
    __type: "screen",
  };
  const ScreenPlugin2: ScreenPlugin<any> = {
    ...ScreenPlugin1,
    name: "اعدادات الموقع",
    Icon: () => <>📡</>,
    Component: () => <h1>Hello Baby</h1>,
  };
  */
  //useScreenPlugin(screenPlugin);
  //useScreenPlugin(screenPlugin2);
  const [_, form] = useForm(getHomeForm(mdFile));
  usePlugin(form);
  return (
    <>
      <InlineForm form={form}>
        <Layout pageTitle="الدورات التدريبية">
          <Topbar />
          <NavOneAlter />
          <SliderOneAlter />
          <AboutTwoAlter />
          <CourseOne />
          <VideoTwoAlter />
          <CountDownAlter />
          <CourseCatAlter />
          <FooterAlter />
          <div>
            <h1 style={{ direction: "rtl" }}>
              <InlineText name="frontmatter.title" focusRing={false} />
            </h1>
          </div>
        </Layout>
      </InlineForm>
    </>
  );
};
const getStaticProps = async () => {
  return {
    props: {
      //mdFile: parseMdFile("pages/home.md"),
      mdFile: {},
      products: getAllProducts(),
    },
  };
};
export default Home;
export { getStaticProps };
