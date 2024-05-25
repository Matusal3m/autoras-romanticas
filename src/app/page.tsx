import AuthorCard from "@/components/AuthorCard";
import { authors } from "@authors";

export default function Home() {
  return (
      <main className="lg:w-1/2 md:w-3/4 px-6 mx-auto min-h-[80vh]">

        <h1 className="xl:text-4xl md:text-3xl text-2xl font-bold mb-4">
          Um espaço para obras femininas
        </h1>

        <p className="comum-paragraph mb-4">
          Site criados pelos alunos de ensino médio da escola EEEP Paula
          Petrola, visando aumentar o alcance dos resultados do nosso trabalho
          da IV Feira de Ciências.
        </p>

        <p className="comum-paragraph">
          Por conta da escassez de informações sobre as escritoras de período
          romântico, tivemos a ideia de criar uma plataforma para divulgar os
          conteúdos dessas escritoras. Não podemos se esquecer das incríveis
          escritoras brasileiras.
        </p>

        <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold mb-12">Autoras Românticas Brasileiras</h1>
        <div className="flex flex-col gap-4 mt-4">
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
  );
}
