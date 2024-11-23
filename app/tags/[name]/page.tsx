import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc.util";
import ContentDisplay from "@/components/ContentDisplay";

interface TagsPageProps {
  params: {
    name: string;
  };
}

const TagsPage = async ({ params }: TagsPageProps) => {
  const { name } = await params;
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByTag(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default TagsPage;
