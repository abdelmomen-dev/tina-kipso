import fs from "fs";
import { join } from "path";
import { dataDirectory, parseMdFile } from "./markown";

const productsDirectory = join(dataDirectory, "products");
const getAllProductSlugs = () => {
  return fs.readdirSync(productsDirectory).filter((f) => f.endsWith(".md"));
};
const getAllProducts = () => {
  return getAllProductSlugs().map((f) => parseMdFile(`products/${f}`));
};
export { getAllProductSlugs, getAllProducts };
