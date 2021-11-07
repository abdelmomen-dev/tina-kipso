import { GetStaticProps } from "next";
import { InlineForm } from "react-tinacms-inline";
import { useForm, usePlugin } from "tinacms";
import Layout from "../components/Layout";
import NavOneAlter from "../components/NavOneAlter";
import NewsAlter from "../components/NewsAlter";
import PageHeader from "../components/PageHeader";
import { getNewsForm } from "../src/forms/forms";

const NewsPage = () => {
  const [_, form] = useForm(getNewsForm());
  usePlugin(form);
  return (
    <>
      <InlineForm form={form}>
        <Layout pageTitle="الدورات التدريبية … الاخبار">
          <NavOneAlter />
          <PageHeader formID={form.id} />
          <NewsAlter />
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

export default NewsPage;
