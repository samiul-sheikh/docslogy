import ContentDisplay from "@/components/ContentDisplay";

interface ContentPageProps {
  params: {
    contentId: string;
  };
}

const ContentPage = async ({ params }: ContentPageProps) => {
  const { contentId } = await params;

  return <ContentDisplay id={contentId} />;
};

export default ContentPage;
