interface SubContentPageProps {
  params: {
    subContentId: string;
  };
}

const SubContentPage = async ({ params }: SubContentPageProps) => {
  const { subContentId } = await params;

  return <div className="">{subContentId}</div>;
};

export default SubContentPage;
