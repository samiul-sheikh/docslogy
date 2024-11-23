import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc.util";
import ContentDisplay from "@/components/ContentDisplay";

interface CategoriesPageProps {
  params: {
    name: string;
  };
}

const CategoriesPage = async ({ params }: CategoriesPageProps) => {
  const { name } = await params;
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByCategory(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default CategoriesPage;
