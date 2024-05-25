import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-blue-800 text-clamp p-4 h-[10vh] flex justify-center items-center mb-4">
      <Link href={"/"}>
        <h1 className="md:text-3xl text-2xl font-bold text-white ">Romantismo Feminino no Brasil</h1>
      </Link>
    </header>
  );
};

export default Header;
