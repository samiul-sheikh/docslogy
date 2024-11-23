import { Document } from "@/type";

export function getDocumentsByCategory(
  docs: Document[],
  category: string
): Document[] {
  return docs.filter(
    (doc) => doc.category?.toLowerCase() === category.toLowerCase()
  );
}

export function getDocumentsByAuthor(
  docs: Document[],
  author: string
): Document[] {
  return docs.filter(
    (doc) => doc.author.toLowerCase() === author.toLowerCase()
  );
}

export function getDocumentsByTag(docs: Document[], tag: string): Document[] {
  return docs.filter(
    (doc) =>
      Array.isArray(doc.tags) &&
      doc.tags.some((inputTag) => inputTag.toLowerCase() === tag.toLowerCase())
  );
}
