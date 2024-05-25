import Image from "next/image";

const EmiliaFreitasPage = () => {
  return (
    <main className="main">
      <figure className="image-container w-[200px] h-[197px]">
        <Image
          src={"/emilia-freitas.png"}
          alt="Emilia Freitas"
          fill
          className="image"
        />
      </figure>
      <h1 className="author-name">Emilia Freitas</h1>
      <p className="comum-paragraph">
        Emília Freitas nasceu em 11 de janeiro de 1855, em Vila União, distrito
        de Aracati, no Ceará. Crescendo em um ambiente letrado, a filha do
        tenente-coronel Antônio José de Freitas — um abolicionista, liberal e
        republicano — e de Maria de Jesus — muito cuidadosa com os filhos e
        escravos, ensinado muitos destes a ler e escrever — teve influências que
        se tornariam perceptíveis em sua produção intelectual nos anos
        seguintes.
      </p>
      <h1 className="literature-title">Trechos de obras</h1>

      <h2 className="literature-name">A rainha do Ignoto</h2>
      <p className="comum-paragraph"></p>
      <div className="text-quote">
        <p>
          Te souvient tu même de nos transports brulants, quand je te dis:
          t&apos;aime... j&apos;avais alors quinze ans.
        </p>
        <p>
          Le bruit de cette fête retour dans mon coeur. Le temps que je regrets
          C&apos;est le temps de bonheur
        </p>
        <p>
          Au présent je souspire... Mes yeoux sont baissés, Ils Te souvient tu
          même de nos transports brulants, quand je te dis: t&apos;aime j&apos;avais alors
          quinze ans.
        </p>
        <p>
          Le bruit de cette fête retour dans mon coeur. Le temps que je regrets
          C&apos;est le temps de bonheur.
        </p>
        <p>
          Au présent je souspire... Mes yeoux sont baissés, Ils ont craint de me
          dire mes beaux jours sont passés.
        </p>
        <p>
          Ma bouche em vain répète de regrets superflus! Les temps que je regret
          C&apos;est le temps que n&apos;est plus.
        </p>
      </div>

      <h1 className="literature-title">
      Links para obras
      </h1>

      <ul className="literature-list">
        <li className="literature-link">
          <a href="https://pt.scribd.com/document/435147453/A-Rainha-Do-Ignoto-Emilia-Freitas">
            A Rainha do Ignoto
          </a>
        </li>
      </ul>
    </main>
  );
};

export default EmiliaFreitasPage;
