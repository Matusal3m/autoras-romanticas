import Image from "next/image";

const AnaLuisaPage = () => {
  return (
    <main className="main">
      <figure className="image-container w-[200px] h-[266px]">
        <Image
          src={"mulher-secXIX.svg"}
          alt="Ana Luisa de Azevedo Castro"
          fill
          className="image"
        />
      </figure>
      <h1 className="author-name">Ana Luísa de Azevedo Castro</h1>
      <p className="comum-paragraph">
        Ana Luísa de Azevedo Castro, nasceu em São Francisco do Sul, 1823, no
        Rio de Janeiro, 1869 foi uma escritora e educadora brasileira,
        considerada a primeira autora de um romance de Santa Catarina.
      </p>
      <h1 className="literature-title">Trechos de obras</h1>

      <h2 className="literature-name">D. Narcisa de Villar</h2>

      <p className="comum-paragraph">
        D. Narcisa de Villar, a primeira e única história de ficção da
        catarinense Ana Luísa de Azevedo Castro (1826 ou 1827-1869), foi a
        primeira novela de autoria de mulher brasileira.
      </p>

      <p className="comum-paragraph">
        Publicada em folhetins no jornal A Marmota, de 13 de abril a 6 de julho
        de 1858, D. Narcisa de Villar teve seu lançamento em livro no ano
        seguinte (1859).
      </p>

      <p className="comum-paragraph">
        O enredo, ambientado em Ponta Grossa e na ilha do Mel (Santa Catarina),
        centra-se no amor proibido de Narcisa por Leonardo, seu amigo indígena
        de adolescência.
      </p>

      <div className="text-quote">
        <p>
          Pouco a pouco deixou de escutar: suas idéasforam-se desvanecendo do
          seu cerebro escandecido,
        </p>
        <p>
          sua memoria fracamente lembrava os objectos,não fixando a vista j
          sobre cousa alguma, seus olhos fatigados se fecharam, e morria-seu-lhe
          asas beneficas trazendo-lhe um sonho de felicidade e ventura!
        </p>
        <p>
          Ah! que ella nunca devia acordar desse sonho tão ilusionado.. Era j
          alto dia quando a donzella despertou; os pensamentos da vespera
          acha-vam-se apagados em seu espirito, e a sua primeira vontade,
          acordando, foi ver seus amigos em cuja companhia ella gozava
          verdadeiros prazeres.
        </p>
        <p>
          Minha Ephigenia, disse ella Inda, logo que a vio, vai chamar teu filho
          que lhe quero dar minhas ordens; passaremos hoje o dia nos bosques,
          respirando o aroma puro das silvas, e ouvindo o melhor cantico das
          avesinhas que estegonso tecto nos impede de ouvir; l , o teu espirito
          se torna mais vivo, amas-me com mais ardor, diriges a teu filho
          caricias mais ternas! Oh! sim, l tu és inspirada, és sublime. Mas que!
          n m me respondes?.. voltas a cabeça?.. choras... O que tens, minha boa
          amiga, minha terna companheira? Dize-me, conta-me o mottovo de tuas
          lagrimas?
        </p>
        <p>
          Leonardo ausentou-se, senhora. O senhor-grande o mandou villa com uma
          grande carta ao nosso vizario.
        </p>
        <p>
          Bem má companhia vinha a inocente crian a bus- car, porque seus irmãos
          muito pouco interesse mos-travam por ella. Aborrecendo-se da sociedade
          de uma crian a, achando fastidiosos os cuidados que ella merecia, a
          deixaram entregue aos famulos que os serviam, e raramente a viam. A
          pobre menina a prin-cipio chorou muito, porém era de genio tão docil
          que bem depressa se reinterpretou sua nova situa- o, e por fim
          acostumou-se a n o v mais seus irmãos. Havia entre as Indias que a
          serviam uma que se fazia notavel pelo seu caracter. Chamava-se ella
          Ephigenia e tinha um filho de nome Leonardo.
        </p>
      </div>

      <h1 className="literature-title">Links para obras</h1>

      <ul className="literature-list">
        <li className="literature-link">
          <a href="https://pt.scribd.com/document/486721897/Ana-Luisa-de-Azevedo-Castro-a-autora-da-novela-D-Narcisa-de-Villar-1858">
            D. Narcisa de Villar
          </a>
        </li>
      </ul>
    </main>
  );
};

export default AnaLuisaPage;
