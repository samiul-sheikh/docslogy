import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  // console.log(postDirectory);
  const fileNames = fs.readdirSync(postDirectory);
  // console.log(fileNames);
  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    // console.log(id);
    const fullPath = path.join(postDirectory, fileName);
    // console.log(fullPath);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    // console.log(fileContents);
    const matterResult = matter(fileContents);
    // console.log(matterResult);
    return {
      id,
      ...matterResult.data,
    };
  });
  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  });
  // console.log(allDocuments);
}
