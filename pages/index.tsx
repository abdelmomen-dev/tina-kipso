import type { NextPage } from "next";
import React from "react";
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

const Home: NextPage = ({ mdFile, products }: any) => {
  const [_, form] = useForm({
    initialValues: mdFile,
    id: mdFile.fileName,
    label: mdFile.fileName,
    fields: [],
    onSubmit: (formState: any) => {
      console.log(formState.frontmatter.title);
      return;
    },
  } as FormOptions<any, any>);
  usePlugin(form);
  return (
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
        <InlineForm form={form}>
          <h1 style={{ direction: "rtl" }}>
            <InlineText name="frontmatter.title" focusRing={false} />
          </h1>
        </InlineForm>
      </div>
    </Layout>
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
