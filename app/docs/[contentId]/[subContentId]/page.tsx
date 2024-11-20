import ContentDisplay from "@/components/ContentDisplay";

interface SubContentPageProps {
  params: {
    subContentId: string;
  };
}

const SubContentPage = async ({ params }: SubContentPageProps) => {
  const { subContentId } = await params;

  return <ContentDisplay id={subContentId} />;
};

export default SubContentPage;
