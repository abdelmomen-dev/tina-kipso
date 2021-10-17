import { GetStaticProps } from "next";
import { InlineForm } from "react-tinacms-inline";
import { useForm, usePlugin } from "tinacms";
import FooterAlter from "../components/FooterAlter";
import GalleryAlter from "../components/GalleryAlter";
import Layout from "../components/Layout";
import NavOneAlter from "../components/NavOneAlter";
import PageHeader from "../components/PageHeader";
import { getGalleryForm } from "./forms/forms";

const GalleryPage = () => {
  const [_, form] = useForm(getGalleryForm());
  usePlugin(form);
  return (
    <>
      <InlineForm form={form}>
        <Layout pageTitle="الدورات التدريبية … معرض الصور">
          <NavOneAlter />
          <PageHeader formID={form.id} />
          <GalleryAlter />
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

export default GalleryPage;
