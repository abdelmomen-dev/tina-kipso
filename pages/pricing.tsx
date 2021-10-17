import { GetStaticProps } from "next";
import { InlineForm } from "react-tinacms-inline";
import { useForm, usePlugin } from "tinacms";
import FooterAlter from "../components/FooterAlter";
import Layout from "../components/Layout";
import NavOneAlter from "../components/NavOneAlter";
import PageHeader from "../components/PageHeader";
import PricingAlter from "../components/PricingAlter";
import { getPricingForm } from "./forms/forms";

const PricingPage = () => {
  const [_, form] = useForm(getPricingForm());
  usePlugin(form);
  return (
    <>
      <InlineForm form={form}>
        <Layout pageTitle="الدورات التدريبية … التسعير">
          <NavOneAlter />
          <PageHeader formID={form.id} />
          <PricingAlter />
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

export default PricingPage;
