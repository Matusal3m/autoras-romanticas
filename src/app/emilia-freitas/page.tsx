import Image from "next/image";

const EmiliaFreitasPage = () => {
  return (
    <main className="main">
      <figure className="image-container w-[200px] h-[266px]">
        <Image
          src={"/emilia-freitas.jpg"}
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

      <div className="text-quote text-center">
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
          même de nos transports brulants, quand je te dis: t&apos;aime
          j&apos;avais alors quinze ans.
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

      <p className="comum-paragraph font-black text-center my-6">Trecho traduzido</p>

      <div className="text-quote text-center">
        <p>
          Você ao menos se lembra dos nossos transportes ardentes, quando eu te
          disse: te amo... eu tinha quinze anos então.
        </p>
        <p>
          O som desta festa volta ao meu coração. A hora que me arrependo. É a
          hora da felicidade.
        </p>
        <p>
          No presente suspiro... Meus olhos estão baixos, Até se lembram de você
          dos nossos transportes ardentes, quando eu te digo: te amo, eu tinha
          quinze anos então.
        </p>
        <p>
          O som desta festa volta ao meu coração. A hora que me arrependo. É a
          hora da felicidade.
        </p>
        <p>
          No presente suspiro... Meus olhos estão baixos, Tiveram medo de me
          dizer que meus dias bons já passaram.
        </p>
        <p>
          Minha Boca vaidosa repete arrependimentos supérfluos! Os tempos dos
          quais me arrependo Estes são os tempos que não existem mais.
        </p>
      </div>

      <h1 className="literature-title">Links para obras</h1>

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
