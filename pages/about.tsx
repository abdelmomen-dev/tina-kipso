import { GetStaticProps } from "next";
import { InlineForm } from "react-tinacms-inline";
import { useForm, usePlugin } from "tinacms";
import AboutOneAlter from "../components/AboutOneAlter";
import FooterAlter from "../components/FooterAlter";
import Layout from "../components/Layout";
import NavOneAlter from "../components/NavOneAlter";
import PageHeader from "../components/PageHeader";
import { getAboutForm } from "../src/forms/forms";
const AboutPage = ({ data }: any) => {
  const [_, form] = useForm(getAboutForm(data));
  usePlugin(form);
  return (
    <>
      <InlineForm form={form}>
        <Layout pageTitle="الدورات التدريبية … من نحن">
          <NavOneAlter />
          <PageHeader formID={form.id} />
          <AboutOneAlter />
          <FooterAlter />
        </Layout>
      </InlineForm>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await resp.json();

  return {
    props: {
      data: data,
    },
  };
};

export default AboutPage;
