import { GetStaticProps } from "next";
import { InlineForm } from "react-tinacms-inline";
import { useForm, usePlugin } from "tinacms";
import AboutOneAlter from "../components/AboutOneAlter";
import FooterAlter from "../components/FooterAlter";
import Layout from "../components/Layout";
import NavOneAlter from "../components/NavOneAlter";
import PageHeader from "../components/PageHeader";
import TeamOneAlter from "../components/TeamOneAlter";
import { getAboutForm } from "./forms/forms";
const AboutPage = () => {
  const [_, form] = useForm(getAboutForm());
  usePlugin(form);
  return (
    <>
      <InlineForm form={form}>
        <Layout pageTitle="الدورات التدريبية … من نحن">
          <NavOneAlter />
          <PageHeader formID={form.id} />
          <AboutOneAlter />
          <TeamOneAlter />
          <FooterAlter />
        </Layout>
      </InlineForm>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default AboutPage;
