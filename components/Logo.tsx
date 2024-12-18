import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div className="lg:flex">
      <Link href="/">
        <Image
          className="h-6 w-auto"
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={24}
        />
      </Link>
    </div>
  );
};

export default Logo;
