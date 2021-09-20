import { gql } from "@apollo/client";
import React from "react";
import { initializeApollo } from "../../apolloClient";
import { parseMdFile } from "../../helpers/markown";
import { getAllProductSlugs } from "../../helpers/product";
const Product = ({ mdFile, wind }: any) => {
  return (
    <>
      <div>
        <b>title</b>: {mdFile.frontmatter.title}
      </div>
      <div>
        <b>wind desc</b>: {wind.desc}
      </div>
      <div>price: {mdFile.frontmatter.price}</div>
      <div>excerpt: {mdFile.frontmatter.except}</div>
      <div>image:{mdFile.frontmatter.image}</div>
    </>
  );
};

export default Product;

const WIND_Q = gql`
  query windFindOne($where: String!) {
    windFindOne(where: $where) {
      id
      desc
    }
  }
`;
export async function getStaticProps({ params }: any) {
  const client = initializeApollo();
  const { data } = await client.query({
    query: WIND_Q,
    variables: {
      where: `(title,eq,${params.slug})`,
    },
  });
  console.log(data);
  return {
    props: {
      wind: data.windFindOne,
      mdFile: parseMdFile(`products/${params.slug}.md`),
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: getAllProductSlugs().map((slug) => ({
      params: {
        slug: slug.replace(".md", ""),
      },
    })),
    fallback: false,
  };
}
