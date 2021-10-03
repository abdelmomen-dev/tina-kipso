import type { NextPage } from "next";
import { InlineForm, InlineText } from "react-tinacms-inline";
import { FormOptions, useForm, usePlugin } from "tinacms";
import AboutTwoAlter from "../components/AboutTwoAlter";
import CountDownAlter from "../components/CountDownAlter";
import CourseCatAlter from "../components/CourseCatAlter";
import CourseOne from "../components/CourseOne";
import FooterAlter from "../components/FooterAlter";
import Layout from "../components/Layout";
import NavOneAlter from "../components/NavOneAlter";
import SliderOneAlter from "../components/SliderOneAlter";
import Topbar from "../components/Topbar";
import VideoTwoAlter from "../components/VideoTwoAlter";
import { parseMdFile } from "../helpers/markown";
import { getAllProducts } from "../helpers/product";

const Home: NextPage = ({ mdFile }: any) => {
  const [_, form] = useForm({
    initialValues: {
      ...mdFile,
      title: "مع دورات اليقين التدريبية مهمتنا هي زيادة المعرفة للجميع",
      innerTitle: "تجربة",
      countDownSct: {
        tagline: "احصل علي دورات مجانية عند التسجيل",
        header: "قم بالتسجيل الآن",
      },
    },
    id: mdFile.fileName,
    label: mdFile.fileName,
    fields: [
      {
        name: "innerTitle",
        label: "ما هو",
        component: "text",
      },
    ],
    onSubmit: (formState: any) => {
      console.log(formState);
      return;
    },
  } as FormOptions<any, any>);
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
      mdFile: parseMdFile("pages/home.md"),
      products: getAllProducts(),
    },
  };
};
export default Home;
export { getStaticProps };
