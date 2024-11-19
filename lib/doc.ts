import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postDirectory = path.join(process.cwd(), "docs");

// Define the type of a single document
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

// Function to get documents with proper type annotations
export function getDocuments(): Document[] {
  const fileNames = fs.readdirSync(postDirectory);

  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);

    // Ensure matterResult.data is properly typed
    const data = matterResult.data as Omit<Document, "id">; // Cast to expected structure

    return {
      id,
      ...data,
    } as Document; // Ensure return value matches the Document type
  });

  return allDocuments.sort((a, b) => a.order - b.order);
}
