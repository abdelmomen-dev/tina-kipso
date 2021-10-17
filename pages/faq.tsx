import { GetStaticProps } from "next";
import { InlineForm } from "react-tinacms-inline";
import { useForm, usePlugin } from "tinacms";
import FaqAlter from "../components/FaqAlter";
import FooterAlter from "../components/FooterAlter";
import Layout from "../components/Layout";
import NavOneAlter from "../components/NavOneAlter";
import PageHeader from "../components/PageHeader";
import { getFAQForm } from "./forms/forms";

const FaqPage = () => {
  const [_, form] = useForm(getFAQForm());
  usePlugin(form);
  return (
    <>
      <InlineForm form={form}>
        <Layout pageTitle="الدورات التدريبية … الاسئلة المتكررة">
          <NavOneAlter />
          <PageHeader formID={form.id} />
          <FaqAlter />
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

export default FaqPage;
