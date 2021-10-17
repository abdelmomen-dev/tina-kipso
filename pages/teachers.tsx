import { GetStaticProps } from "next";
import { InlineForm } from "react-tinacms-inline";
import { useForm, usePlugin } from "tinacms";
import CallToActionTeachers from "../components/CallToActionTeachers";
import Layout from "../components/Layout";
import NavOneAlter from "../components/NavOneAlter";
import PageHeader from "../components/PageHeader";
import TeachersAlter from "../components/TeachersAlter";
import { getTeachersForm } from "./forms/forms";

const TeachersPage = () => {
  const [_, form] = useForm(getTeachersForm());
  usePlugin(form);
  return (
    <>
      <InlineForm form={form}>
        <Layout pageTitle="الدورات التدريبية … المعلمين">
          <NavOneAlter />
          <PageHeader formID={form.id} />
          <TeachersAlter />
          <CallToActionTeachers />
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

export default TeachersPage;
