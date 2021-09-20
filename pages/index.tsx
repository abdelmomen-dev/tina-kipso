import type { NextPage } from "next";
import React from "react";
import { InlineForm, InlineText } from "react-tinacms-inline";
import { FormOptions, useForm, usePlugin } from "tinacms";
import { parseMdFile } from "../helpers/markown";
import { getAllProducts } from "../helpers/product";
import styles from "../styles/Home.module.css";
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
    <div className={styles.container}>
      <InlineForm form={form}>
        <h1 style={{ direction: "rtl" }}>
          <InlineText name="frontmatter.title" focusRing={false} />
        </h1>
      </InlineForm>
    </div>
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
