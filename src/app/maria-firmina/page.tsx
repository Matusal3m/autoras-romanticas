import Image from "next/image";

const MariaFirminaPage = () => {
  return (
    <main className="main">
      <figure className="image-container w-[200px] h-[267px]">
        <Image
          src={"/maria-firmina.png"}
          alt="Maria Firmina do Reis"
          fill
          className="image"
        />
      </figure>
      <h1 className="author-name">Maria Firmina do Reis</h1>
      <p className="comum-paragraph">
        Nascida no Maranhão, Maria Firmina é considerada a primeira romancista
        negra do Brasil. Foi uma importante voz de denúncia e indignação contra
        os maus-tratos sofridos pela população escravizada. Ela também foi
        fundadora e educadora da primeira escola mista no Maranhão.
      </p>
      <h1 className="literature-title">Trechos de obras</h1>

      <h2 className="literature-name">A Escrava</h2>
      <p className="comum-paragraph"></p>
      <div className="text-quote">
        <p>
          — Admira-me, – disse uma senhora de sentimentos sinceramente
          abolicionistas; – faz-me até pasmar como se possa sentir, e expressar
          sentimentos escravocratas, no presente século, no século dezenove! A
          moral religiosa e a moral cívica aí se erguem, e falam bem alto
          esmagando a hidra que envenena a família no mais sagrado santuário
          seu, e desmoraliza, e avilta a nação inteira! Levantai os olhos ao
          Gólgota, ou percorrei-os em torno da sociedade, e dizei- me:
        </p>
        <p>
          — Para quê se deu em sacrifício o Homem Deus, que ali exalou seu
          derradeiro alento? Ah! Então não é verdade que seu sangue era o
          resgate do homem! É então uma mentira abominável ter esse sangue
          comprado a liberdade!? E depois, olhai a sociedade… Não vedes o abutre
          que a corrói constantemente!… Não sentis a desmoralização que a
          enerva, o cancro que a destrói?
        </p>
      </div>

      <h2 className="literature-name">O Proscrito</h2>

      <p className="comum-paragraph"> </p>

      <div className="text-quote">
        <p>Vou deixar meus pátrios lares,</p>
        <p>Alheio clima habitar.</p>
        <p>Ver outros céus, outros mares,</p>
        <p>Noutros campos divagar;</p>
        <p>Outras brisas, outros ares,</p>
        <p>Longe do meu respirar…</p>
      </div>

      <h2 className="literature-name">A Úrsula</h2>

      <p className="comum-paragraph"></p>

      <div className="text-quote">
        <p>
          Por qualquer modo que encaremos a escravidão, ela é, e sempre será um
          grande mal. Dela a decadência do comércio; porque o comércio, e a
          lavoura caminham de mãos dadas, e o escravo não pode fazer florescer a
          lavoura; porque o seu trabalho é forçado. Ele não tem futuro; o seu
          trabalho não é indenizado; ainda dela nos vem o opróbrio, a vergonha;
          porque de fronte altiva e desassombrada não podemos encarar as nações
          livres; por isso que o estigma da escravidão, pelo cruzamento das
          raças, estampa-se na fronte de todos nós. Embalde procurará um dentro
          nós convencer ao estrangeiro que em suas veias não gira uma só gota de
          sangue escravo...
        </p>
        <p>E depois, o caráter que nos imprime, e nos envergonha!</p>
        <p>O escravo é olhado por todos como vítima – e o é.</p>
        <p>O senhor, que papel representa na opinião social?</p>
        <p>O senhor é o verdugo – e esta qualificação é hedionda.</p>
      </div>

      <h1 className="literature-title">Links para obras</h1>

      <ul className="literature-list">
        <li className="literature-link">
          <a href="http://www.letras.ufmg.br/literafro/autoras/24-textos-das-autoras/977-maria-firmina-dos-reis-a-escrava">
            A Escrava
          </a>
        </li>

        <li className="literature-link">
          <a href="http://www.letras.ufmg.br/literafro/autoras/24-textos-das-autoras/978-maria-firmina-dos-reis-o-proscrito">
            O Proscopito
          </a>
        </li>

        <li className="literature-link">
          <a href="http://www.letras.ufmg.br/literafro/autoras/24-textos-das-autoras/978-maria-firmina-dos-reis-capitulo-9-a-preta-susana">
            A Úrsula
          </a>
        </li>

        <li className="literature-link">
          <a href="https://www.literaturabrasileira.ufsc.br/documentos/?action=download&id=117651">
            Cantos a beira-mar
          </a>
        </li>

        <li className="literature-link">
          <a href="https://www.mariafirminaoficial.com.br/gupeva">Gupeva</a>
        </li>
      </ul>
    </main>
  );
};

export default MariaFirminaPage;
