interface ContentPageProps {
  params: {
    contentId: string;
  };
}

const ContentPage = async ({ params }: ContentPageProps) => {
  const { contentId } = await params;

  return <div className="">{contentId}</div>;
};

export default ContentPage;
