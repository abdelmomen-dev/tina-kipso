import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
const dataDirectory = join(process.cwd(), "data");
const parseMdFile = (filePath: string) => {
  const fullPath = join(dataDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(fileContents);
  return {
    fileName: `${filePath.replace(".md", "")}`,
    fileRelativePath: `${filePath}`,
    frontmatter: parsed.data,
    markdownBody: parsed.content,
  };
};
export { dataDirectory, parseMdFile };
