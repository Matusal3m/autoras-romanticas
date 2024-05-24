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
    <div className="bg-base-100 shadow-xl px-4 py-2 flex">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="w-full p-0 pl-4 pt-4">
        <h2 className="text-2xl">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
