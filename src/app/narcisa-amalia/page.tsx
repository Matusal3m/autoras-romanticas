import Image from "next/image";

const NarcisaAmaliaPage = () => {
  return (
    <main className="main">
      <figure className="image-container w-[200px] h-[257px]">
        <Image
          src={"/narcisa-amalia.jpeg"}
          alt="Narcisa Amália"
          height={200}
          width={200}
          className="image"
        />
      </figure>
      <h1 className="author-name">Narcisa Amália</h1>
      <p className="comum-paragraph">
        Narcisa Amália de Campos nasceu em 3 de abril de 1852 em São João da
        Barra, norte do Rio de Janeiro, filha do poeta Jácome de Campos e da
        professora Narcisa Inácia de Campos. Foi a primeira mulher a se tornar
        jornalista no Brasil e teve muito reconhecimento se comparada às
        mulheres de sua época, foi considerada uma pioneira da área. Na
        Gazetinha de Rezende (RJ), Narcisa publicou artigos em defesas de ideais
        republicanos, abolicionistas, feministas e democratas, temas esses que
        também abordava em suas obras.
      </p>
      <h1 className="literature-title">Trechos de obras</h1>

      <h2 className="literature-name">Fantasia</h2>

      <p className="comum-paragraph"></p>

      <div className="text-quote">
        <p>
          E bela a cecém do vale Quando desponta mimosa, Sobre o caule,
          melindrosa, ao rutilar do arrebol; Quando a gota etérea e pura Que
          chora o céu sobre a terra, O lindo seio descerra Aos frouxos raios do
          sol.
        </p>
        <p>
          E bela a meiga criança Sentindo à luz da existência, Co&apos;a alma -
          toda Inocência, E a face-toda rubor! Os róseos lábios ungidos Por mim
          acentos-suaves Como o gorjeio das aves, Como o suspiro de amor!..
        </p>
        <p>
          Des&apos;brocha o lírio, mais alvo Que o tênue floco de neve; A
          viração fresca e leve Lhe oscula as pétalas-feliz; Ternos carmes the
          murmura A namorada corrente, Que se deriva indolente Por sobre o
          flóreo tapiz.
        </p>
        <p>
          Assim a virgem formosa Torna-se mais sedutora, Quando a poesia enflora
          Sua beldade ideal! Quando no brilho fulgente Dos olhos vividos, belos,
          Su&apos;alma ardente de anelos Mostra candor divinal!
        </p>
        <p>
          Então, se a fita a miséria Sente no seio a esperança, A um seu sorriso
          a criança Ligeira tenta sorrir Aos lábios casto-delírio Implora a
          audaz borboleta; O mesmo altivo poeta Pede-lhe um raio de amor!...
        </p>
        <p>
          E tudo, tudo que a cerca De medrosos juramentos, Vê, nos vagos
          pensamentos, A candidez que seduz! E tudo, tudo o que sofre Vê que, à
          imagem de Maria, A virgem-flor de poesia- Deus fez repleta de luz!
        </p>
        <p>
          Que o Senhor a ti, ó virgem, -Simbolo de amor e candura- Poupe a taça
          da amargura Que a meu lábio não poupou! Que se desdobre nitente A fita
          de tua vida, De tantos sonhos-tecida Quantos o céu me negou!
        </p>
      </div>

      <h2 className="literature-name">Julia e Augusta</h2>

      <p className="comum-paragraph"> </p>

      <div className="text-quote">
        <p>
          São duas rosas se expandindo rúbidas No brando caule com suave
          encanto;
        </p>
        <p>
          São duas nuvens deslizando túmidas Do campo aéreo no azulado manto.
        </p>
        <p>
          São duas ondas marulhosas, flácidas, Que o tíbio sopro do favônio
          frisa;
        </p>
        <p>
          São duas conchas deslumbrantes, nítidas, Do mar na praia refulgente e
          lisa.
        </p>
        <p>
          São duas auras, perfumosas, tépidas, Beijando as pétalas de uma flor
          pendida, São duas rolas revelando timidas No torso curvo do escarcéu
          da vida.
        </p>
        <p>
          Duas auroras ressurgindo límpidas Por entre as trevas que a tumulta
          encerra;
        </p>
        <p>
          Graças libradas sobre o espaço,fulgidas, A cuja sombra se conchega a
          terra!
        </p>
        <p>
          Uma-os rútilos das pupilas vividas Vela nos prantos de gazil ternura;
        </p>
        <p>
          Na cor mimosa da Moema indígena Concentra o ardor da tropical natura!
        </p>
        <p>
          Outra, revela nos olhares lânguidos Toda a pureza da celeste estância;
        </p>
        <p>
          À tez formada de açucenas úmidas Rouba o outono a festival fragrância!
        </p>
        <p>
          Ambas-cingidas de virginea auréola Firmes caminham na escabrosa
          trilha! Feliz daquele que sorvesse em ósculos O afeto imenso que em
          seus olhos brilha.
        </p>
      </div>

      <h1 className="literature-title">Links para obras</h1>

      <ul className="literature-list">
        <li className="literature-link">
          <a href="https://www.academia.edu/54386190/Nebulosas_de_Narcisa_Am%C3%A1lia">
            Nebulosas
          </a>
        </li>
      </ul>
    </main>
  );
};

export default NarcisaAmaliaPage;
