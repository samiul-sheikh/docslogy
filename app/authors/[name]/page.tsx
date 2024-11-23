import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc.util";
import ContentDisplay from "@/components/ContentDisplay";

interface AuthorPageProps {
  params: {
    name: string;
  };
}

const AuthorPage = async ({ params }: AuthorPageProps) => {
  const { name } = await params;
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByAuthor(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default AuthorPage;
