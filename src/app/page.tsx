import AuthorCard from "@/components/AuthorCard";
import { authors } from "@authors";

export default function Home() {
  return (
    <>
      <header className="w-full h-16 bg-base-300">
        <h1 className="text-3xl font-bold underline">Romantismo Feminino Brasileiro</h1>
      </header>
      <main className="w-1/2 mx-auto h-full">
        {/* introdução */}

        <h1 className="text-3xl font-bold my-4">Um espaço para obras femininas</h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, ipsum animi. Veniam incidunt laboriosam ipsam dicta,
          voluptates laudantium corrupti tempora praesentium eius nam
          consequatur quo tenetur unde eveniet totam numquam.
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          obcaecati consequatur ratione culpa enim aspernatur consequuntur
          recusandae delectus architecto, numquam amet assumenda eos aut aliquam
          nam repellat praesentium unde alias?
        </p>

        {/* autoras */}
        <h1>Coletânea de obras românticas</h1>
        <h1 className="text-3xl font-bold">
          Autoras Românticas Brasileiras
        </h1>
        <div className="">
          {authors.map((author) => (
            <AuthorCard
              key={author.name}
              name={author.name}
              image={author.imageUrl}
              description={author.cardDescription}
              authorHref={author.authorHref}
            />
          ))}
        </div>
      </main>
      <footer className="w-full h-16 mt-4 bg-base-300">Fortaleza-CE, 2024</footer>
    </>
  );
}
