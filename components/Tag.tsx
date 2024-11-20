import Link from "next/link";

interface TagProps {
  tag: string; // Define the type for the `tag` prop
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <Link
      key={tag}
      href={`/tags/${tag}`}
      className="bg-gray-200 p-1 rounded-md mr-2 text-xs"
    >
      {tag}
    </Link>
  );
};

export default Tag;
