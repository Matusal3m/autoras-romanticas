import Image from "next/image";
import Link from "next/link";

interface AuthorCardProps {
  name: string;
  image: string;
  description: string;
  authorHref: string;
}

const AuthorCard = ({
  name,
  image,
  description,
  authorHref,
}: AuthorCardProps) => {
  return (
    <Link href={authorHref}>
      <div className="bg-base-100 shadow-xl flex rounded-lg overflow-hidden hover:scale-105 transition-transform">
        <div>
          <Image src={image} alt={name} width={200} height={200} />
        </div>
        <div className="w-full pl-4 py-4 flex flex-col justify-between">
          <h2 className="font-bold lg:text-2xl md:text-xl text-lg">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default AuthorCard;
