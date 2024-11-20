import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

interface Document {
  id: string;
  title: string;
  date: string;
  parent: string | null;
  order: number;
  author: string;
  category: string;
  tags: string[];
}

// Type for the return value of `getDocumentContent`
interface DocumentContent extends Document {
  contentHtml: string;
}

const postDirectory = path.join(process.cwd(), "docs");

export function getDocuments(): Document[] {
  const fileNames = fs.readdirSync(postDirectory);

  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);

    // Validate that `matterResult.data` has the expected structure
    const data = matterResult.data as Omit<Document, "id">;

    return {
      id,
      ...data,
    } as Document;
  });

  return allDocuments.sort((a, b) => a.order - b.order);
}

export function getDocumentContent(id: string): DocumentContent {
  const fullPath = path.join(postDirectory, `${id}.md`); // Use template literal correctly
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  // Process the markdown content to HTML
  const processContent = remark().use(html).processSync(matterResult.content);
  const contentHtml = processContent.toString();

  // Validate that `matterResult.data` has the expected structure
  const data = matterResult.data as Omit<Document, "id">;

  return {
    id,
    contentHtml,
    ...data,
  };
}
