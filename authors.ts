interface Author {
  name: string;
  imageUrl: string;
  description: string;
  authorHref: string;
  cardDescription: string;
  literaryWork: {
    title: string;
    content: string[];
  }[];
  links: {
    content: string;
    href: string;
  }[];
}

const mariaFirmina: Author = {
  name: "Maria Firmina dos Reis",
  imageUrl: "/maria-firmina.png",
  authorHref: "./maria-firmina",
  description: `Nascida no Maranhão, Maria Firmina é considerada a primeira romancista
  negra do Brasil. Foi uma importante voz de denúncia e indignação contra os
  maus-tratos sofridos pela população escravizada. Ela também foi fundadora e
  educadora da primeira escola mista no Maranhão.`,
  cardDescription: `Maranhense considerada a romancista negra do Brasil.`,
  literaryWork: [
    {
      title: "A Escrava, 1887",
      content: [
        `— Admira-me, – disse uma senhora de sentimentos sinceramente
        abolicionistas; – faz-me até pasmar como se possa sentir, e expressar sentimentos
        escravocratas, no presente século, no século dezenove! A moral religiosa e a moral
        cívica aí se erguem, e falam bem alto esmagando a hidra que envenena a família no
        mais sagrado santuário seu, e desmoraliza, e avilta a nação inteira!
        Levantai os olhos ao Gólgota, ou percorrei-os em torno da sociedade, e dizei-
        me:`,
        `— Para quê se deu em sacrifício o Homem Deus, que ali exalou seu derradeiro
        alento? Ah! Então não é verdade que seu sangue era o resgate do homem! É então
        uma mentira abominável ter esse sangue comprado a liberdade!? E depois, olhai a
        sociedade… Não vedes o abutre que a corrói constantemente!… Não sentis a
        desmoralização que a enerva, o cancro que a destrói?
      `,
      ],
    },
    {
      title: "O Proscrito",
      content: [
        "Vou deixar meus pátrios lares,",
        "Alheio clima habitar.",
        "Ver outros céus, outros mares,",
        "Noutros campos divagar;",
        "Outras brisas, outros ares,",
        "Longe do meu respirar…",
      ],
    },
    {
      title: "A Úrsula",
      content: [
        `Por qualquer modo que encaremos a escravidão, ela é, e sempre será um grande mal. Dela a decadência do comércio; porque o comércio, e a lavoura caminham de mãos dadas, e o escravo não pode fazer florescer a lavoura; porque o seu trabalho é forçado. Ele não tem futuro; o seu trabalho não é indenizado; ainda dela nos vem o opróbrio, a vergonha; porque de fronte altiva e desassombrada não podemos encarar as nações livres; por isso que o estigma da escravidão, pelo cruzamento das raças, estampa-se na fronte de todos nós. Embalde procurará um dentro nós convencer ao estrangeiro que em suas veias não gira uma só gota de sangue escravo...`,
        `E depois, o caráter que nos imprime, e nos envergonha!`,
        `O escravo é olhado por todos como vítima – e o é.`,
        `O senhor, que papel representa na opinião social?`,
        `O senhor é o verdugo – e esta qualificação é hedionda.`,
      ],
    },
  ],
  links: [
    {
      content: "A Escrava",
      href: "http://www.letras.ufmg.br/literafro/autoras/24-textos-das-autoras/977-maria-firmina-dos-reis-a-escrava",
    },
    {
      content: "O Proscrito",
      href: "http://www.letras.ufmg.br/literafro/autoras/24-textos-das-autoras/978-maria-firmina-dos-reis-o-proscrito",
    },
    {
      content: "A Úrsula",
      href: "http://www.letras.ufmg.br/literafro/autoras/24-textos-das-autoras/978-maria-firmina-dos-reis-capitulo-9-a-preta-susana",
    },
    {
      content: "Cantos a beira-mar",
      href: "https://www.literaturabrasileira.ufsc.br/documentos/?action=download&id=117651",
    },
    {
      content: 'Resenha do Conto "Gupeva"',
      href: "https://www.mariafirminaoficial.com.br/gupeva",
    },
  ],
};

const emiliaFreitas: Author = {
  name: "Emilia Freitas",
  imageUrl: "/emilia-freitas.png",
  description:
    "Emília Freitas nasceu em 11 de janeiro de 1855, em Vila União, distrito de Aracati, no Ceará. Crescendo em um ambiente letrado, a filha do tenente-coronel Antônio José de Freitas — um abolicionista, liberal e republicano — e de Maria de Jesus — muito cuidadosa com os filhos e escravos, ensinado muitos destes a ler e escrever — teve influências que se tornariam perceptíveis em sua produção intelectual nos anos seguintes.",
  authorHref: "./emilia-freitas",
  cardDescription: "Romancista, poeta e professora brasileira.",
  literaryWork: [
    {
      title: "A rainha do Ignoto",
      content: [
        "Te souvient tu même de nos transports brulants, quand je te dis: t'aime... j'avais alors quinze ans.",
        "Le bruit de cette fête retour dans mon coeur. Le temps que je regrets C'est le temps de bonheur",
        "Au présent je souspire... Mes yeoux sont baissés, Ils Te souvient tu même de nos transports brulants, quand je te dis: t'aime j'avais alors quinze ans.",
        "Le bruit de cette fête retour dans mon coeur. Le temps que je regrets C'est le temps de bonheur.",
        "Au présent je souspire... Mes yeoux sont baissés, Ils ont craint de me dire mes beaux jours sont passés.",
        "Ma bouche em vain répète de regrets superflus! Les temps que je regret C'est le temps que n'est plus.",
      ],
    },
    {
      title: "A Rainha do Ignoo - Tradução",
      content: [
        "Você ao menos se lembra dos nossos transportes ardentes, quando eu te disse: te amo... ",
        "eu tinha quinze anos então.",
        "O som desta festa volta ao meu coração. A hora que me arrependo. É a hora da felicidade.",
        "No presente suspiro... Meus olhos estão baixos, Até se lembram de você dos nossos transportes ardentes, quando eu te digo: te amo, eu tinha quinze anos então.",
        "O som desta festa volta ao meu coração. A hora que me arrependo. É a hora da felicidade.",
        "No presente suspiro... Meus olhos estão baixos, Tiveram medo de me dizer que meus dias bons já passaram.",
        "Minha boca vaidosa repete arrependimentos supérfluos! Os tempos dos quais me arrependo Estes são os tempos que não existem mais.",
      ]
    }
  ],
  links: [
    {
      content: "Florina",
      href: "https://medium.com/@sergiobximenes/florina-um-conto-in%C3%A9dito-de-em%C3%ADlia-freitas-a-autora-de-a-rainha-do-ignoto-6ec62fe6d8cd",
    },
  ],
};

const autaSouza: Author = {
  name: "Auta de Souza",
  imageUrl: "/auta-souza.jpeg",
  description:
    "Auta de Souza vive 25 anos, de 1876 a 1901 – nasce em Macaíba, Rio Grande do Norte, em 12 de setembro e morre em 7 de fevereiro. Poetisa de segunda geração romântica, é autora de Horto, de 1900, que a tornou a primeira poeta negra da literatura brasileira, ombreando em pioneirismo com a romancista maranhense Maria Firmina.",
  cardDescription: "Escritora brasileira de romances e contos.",
  authorHref: "./auta-souza",
  literaryWork: [
    {
      title: "À Alma de Minha Mãe",
      content: [
        "Partiu-se o fio branco e delicado",
        "Dos sonhos de minh’alma desditosa...",
        "E as contas do rosário assim quebrado",
        "Caíram como folhas de uma rosa.",
        "Debalde eu as procuro lacrimosa,",
        "Estas doces relíquias do Passado,",
        "Para guardá-las na urna perfumosa, ",
        "Do meu seio no cofre imaculado.",
        "Aí! se eu ao menos uma só pudesse ",
        "D’estas contas achar que me fizesse ",
        "Lembrar um mundo de alegrias doidas... ",
        "Feliz seria... Mas minh’alma atenta ",
        "Em vão procura uma continha benta: ",
        "Quando partiste m’as levaste todas! ",
      ],
    },
    {
      title: "Gentil",
      content: [
        "A essa criancinha de olhos castanhos e",
        "sorriso claro, que eu vejo sempre à",
        "tarde, descalcinha e loura, sacudindo",
        "beijos...",
        "Como é gracioso e lindo o pequenino louro",
        "Que às vezes, à tardinha, eu vejo docemente",
        "Passar junto de mim como um sorriso de ouro,",
        "Anjo que vem do Céu na luz do Sol poente.",
        "Como é gracioso e lindo! Eu cuido ver um sonho,",
        "* Um sonho cor da aurora e belo como o Mar -",
        "Quando os olhos sem luz entristecidos ponho",
        "Na pupila gentil d’aquele meigo olhar.",
        "O seu cabelo guarda a cor serena e doce",
        "Da pálida estrelinha ao despontar do dia.",
        "Talvez que um anjo diga, ao vê-lo: “desmanchou-se",
        "O louro resplendor do filho de Maria! ",
      ],
    },
    {
      title: "Oração da Noite",
      content: [
        "Ajoelhada, ó meu Deus, e as duas mãos unidas,",
        "Olhos fitos na Cruz, imploro a tua graça...",
        "Esconde-me, Jesus! da treva que esvoaça",
        "Na tristeza e no horror das noites mal dormidas,",
        "Maria! Virgem mãe das almas compungidas,",
        "Sorriso no prazer, conforto na desgraça...",
        "Recolhe essa oração que nos meus lábios passa",
        "Em palavras de fé no teu amor ungidas.",
        "Anjo de minha guarda, ó doce companheiro!",
        "Tu que levas do berço ao porto derradeiro",
        "O lúrido batel de meu sonhar sem fim,",
        "Dá-me o sono que traz o bálsamo ao tormento, ",
        "Afoga o coração no mar do esquecimento... ",
        "Abre as asas, meu anjo, e estende-as sobre mim. ",
      ],
    },
    {
      title: "Olhos de Santa",
      content: [
        "A Antônia Araújo",
        "Cheios de treva e luz, teus olhos têm a cor",
        "Das noites sem luar, ó meu divino amor!",
        "E eu amo tanto a sombra e o brilho doce e puro",
        "Dos grandes olhos teus, ó luz de meu futuro,",
        "Como adora ninh’alma os rútilos clarões",
        "Do bando virginal de suas ilusões.",
        "Olha-me sempre e sempre... Em teu olhar formoso,",
        "Minha noite e meu sol, ó Querubim piedoso!",
        "Eu quero ver à toa, eu quero ver boiar,",
        "* Como se fosse um lago o teu formoso olhar - ",
        "Todo um mundo sem fim de sonhos e quimera, ",
        "Lírios desabrochando ao sol da Primavera.",
        "Não vês? É noite, e o Céu nos mostra tanta luz ",
        "Que, olhando para cima, eu cuido que Jesus ",
        "As estrelas formou de lúridos novelos ",
        "Dos raios ideais do sol de seus cabelos... ",
        "E assim no teu olhar, doce como um jasmim, ",
        "Uma estrela se fez do nosso amor sem fim.",
        "Deixa brilhar a estrela loura e mansa, ",
        "Que nos há de guiar à Terra da Esperança. ",
      ],
    },
    {
      title: "A Eugênia",
      content: [
        "Imagem santa que entrevejo em sonho,",
        "Sempre, sempre a cantar, ",
        "Criatura inocente, anjo risonho, ",
        "Que me ensinaste a amar! ",
        "Meu doce amor! Calhandra maviosa ",
        "Que canta dentro em mim; ",
        "Minha esperança tímida e formosa, ",
        "Meu sonho de marfim! ",
        "Amaranto do Céu, flor encantada, ",
        "Mimoso colibri; ",
        "Minha açucena pálida e magoada, ",
        "Meu níveo bogari; ",
        "Gota de orvalho a tremular n’um lírio ",
        "Que mal começa a abrir; ",
        "Ó tu que apagas meu cruel martírio ",
        "E que me fazes rir; ",
        "Madressilva entreaberta, lira de ouro, ",
        "Celeste beija-flor; ",
        "Minha camélia, meu sorriso louro, ",
        "Amor de meu amor; ",
        "Guarda estes versos que só dizem mágoa ",
        "E tristezas sem fim... ",
        "Deixa-os no seio como a gota d’água ",
        "No cálix de um jasmim… ",
      ],
    },
  ],
  links: [
    {
      content: "O Horto",
      href: "http://www.santoandre.sp.gov.br/pesquisa/ebooks/366495.PDF",
    },
  ],
};

const anaLuisa: Author = {
  name: "Ana Luisa de Azevedo Castro",
  imageUrl: "/narcisa-villar.jpg",
  description:
    "Ana Luísa de Azevedo Castro (São Francisco do Sul, 1823 – Rio de Janeiro, 1869) foi uma escritora e educadora brasileira, considerada a primeira autora de um romance de Santa Catarina.",
  cardDescription: "Primeira escritora de Santa Catarina",
  authorHref: "./ana-luisa",
  literaryWork: [
    {
      title: "D.Narcisa de Villar",
      content: [
        `Pouco a pouco deixou de escutar: suas idéasforam-se desvanecendo do seu cerebro escandecido,
        sua memoria fracamente lhe retraçava os objectos,não fixando a vista já sobre cousa alguma, seus olhosfatigados se fecharam, e morphéo estendeu-lhe asazas beneficas trazendo-lhe um sonho de felicidade e ventura!
        `,
        `Ah! que ella nunca devèra acordar desse somno tão tranquillol.. Era já alto dia quando a donzella despertou; os penosos pensamentos da vespera acha- vam-se apagados em seu espirito, e a sua primeira vontade, acordando, foi ver seus amigos em cuja companhia ella gozava verdadeiros prazeres.`,
        `-Minha Ephigenia, disse ella á India, logo que a vio, vai chamar teu filho que lhe quero dar minhas ordens; passaremos hoje o dia nos bosques, respi- rando o aroma puro das silvas, e ouvindo o melhor cantico das avesinhas que este grosso tecto nos impede de ouvir; lá, o teu espirito se torna mais vivo, amas-me com mais ardor, diriges a teu filho caricias mais ternas! Oh! sim, lá tu és inspirada, és sublime. Mas que! não me respondes?.. voltas a cabeça?.. choras... O que tens, minha boa amiga, minha terna companheira? dize-me, conta-me o mo- tivo de tuas lagrimas?`,
        `-Leonardo ausentou-se, senhora. O senhor- grande o mandou á villa com uma grande carta ao nosso vizario.
        `,
        `Bem má companhia vinha a innocente criança bus- car, porque seus irmãos muito pouco interesse mos- travam por ella. Aborrecendo-se da sociedade de uma criança, achando fastidiosos os cuidados que ella merecia, a deixaram entregue aos famulos que os serviam, e raramente a viam. A pobre menina a prin- cipio chorou muito, porém era de genio tão docil que bem depressa se resignou á sua nova situa- ção, e por fim acostumou-se a não vêr mais seus irmãos. Havia entre as Indias que a serviam uma que se fazia notavel pelo seu caracter. Chamava-se ella Ephigenia e tinha um filho de nome Leonardo.
        `,
      ],
    },
  ],
  links: [
    {
      content: "D.Narcisa de Villar",
      href: "https://pt.scribd.com/document/486721897/Ana-Luisa-de-Azevedo-Castro-a-autora-da-novela-D-Narcisa-de-Villar-1858",
    },
  ],
};

const narcisaAmalia: Author = {
  name: "Narcisa Amália",
  imageUrl: "/narcisa-amalia.jpeg",
  description: `
  Narcisa Amália de Campos nasceu em 3 de abril de 1852 em São João da Barra, norte do
  Rio de Janeiro, filha do poeta Jácome de Campos e da professora Narcisa Inácia de
  Campos. Foi a primeira mulher a se tornar jornalista no Brasil e teve muito reconhecimento
  se comparada às mulheres de sua época, foi considerada uma pioneira da área.
  Na Gazetinha de Rezende (RJ), Narcisa publicou artigos em defesas de ideais
  republicanos, abolicionistas, feministas e democratas, temas esses que também abordava
  em suas obras.`,
  authorHref: "./narcisa-amalia",
  cardDescription:
    "Foi a primeira mulher a se tornar jornalista no Brasil.",
  literaryWork: [
    {
      title: "Fantasia",
      content: [
        `E bela a cecém do vale
        Quando desponta mimosa,
        Sobre o caule, melindrosa, 
        Ao rutilar do arrebol; 
        Quando a gota etérea e pura
        Que chora o céu sobre a terra, 
        O lindo seio descerra
        Aos frouxos raios do sol.
        `,
        `E bela a meiga criança
        Sentindo à luz da existência,
        Co'a alma - toda Inocência, 
        E a face-toda rubor! 
        Os róseos lábios ungidos 
        Por mim acentos-suaves
        Como o gorjeio das aves,
        Como o suspiro de amor!..
        `,
        `Des'brocha o lírio, mais alvo
        Que o tênue floco de neve;
        A viração fresca e leve 
        Lhe oscula as pétalas-feliz;
        Ternos carmes the murmura 
        A namorada corrente, 
        Que se deriva indolente 
        Por sobre o flóreo tapiz.
        `,
        `Assim a virgem formosa
        Torna-se mais sedutora,
        Quando a poesia enflora
        Sua beldade ideal!
        Quando no brilho fulgente
        Dos olhos vividos, belos,
        Su'alma ardente de anelos
        Mostra candor divinal!
        `,
        `Então, se a fita a miséria
        Sente no seio a esperança,
        A um seu sorriso a criança
        Ligeira tenta sorrir 
        Aos lábios casto-delírio
        Implora a audaz borboleta;
        O mesmo altivo poeta
        Pede-lhe um raio de amor!...
        `,
        `E tudo, tudo que a cerca 
        De medrosos juramentos,
        Vê, nos vagos pensamentos,
        A candidez que seduz! 
        E tudo, tudo o que sofre
        Vê que, à imagem de Maria,
        A virgem-flor de poesia-
        Deus fez repleta de luz!
        `,
        `Que o Senhor a ti, ó virgem,
        -Simbolo de amor e candura-
        Poupe a taça da amargura
        Que a meu lábio não poupou!
        Que se desdobre nitente 
        A fita de tua vida, 
        De tantos sonhos tecida
        Quantos o céu me negou!”
        `,
      ],
    },
    {
      title: "Julia e Augusta",
      content: [
        `São duas rosas se expandindo rúbidas
        No brando caule com suave encanto;
        São duas nuvens deslizando túmidas
        Do campo aéreo no azulado manto.`,
        `São duas ondas marulhosas, flácidas,
        Que o tíbio sopro do favônio frisa;
        São duas conchas deslumbrantes, nítidas,
        Do mar na praia refulgente e lisa.`,
        `São duas auras, perfumosas, tépidas,
        Beijando as pétalas de uma flor pendida, 
        São duas rolas revelando timidas 
        No dorso curvo do escarcéu da vida.`,
        `Duas auroras ressurgindo límpidas
        Por entre as trevas que a tormenta encerra;
        Graças libradas sobre o espaço,fulgidas, 
        A cuja sombra se conchega a terra!`,
        `Uma-os rútilos das pupilas vividas
        Vela nos prantos de gazil ternura;
        Na cor mimosa da Moema indígena 
        Concentra o ardor da tropical natura!`,
        `Outra, revela nos olhares lânguidos 
        Toda a pureza da celeste estância;
        À tez formada de açucenas úmidas
        Rouba o outono a festival fragrância!`,
        `Ambas-cingidas de virginea auréola
        Firmes caminham na escabrosa trilha! 
        Feliz daquele que sorvesse em ósculos
        O afeto imenso que em seus olhos brilha.`,
      ],
    },
  ],
  links: [
    {
      content: "Nebulosas",
      href: "https://www.academia.edu/54386190/Nebulosas_de_Narcisa_Am%C3%A1lia",
    },
  ],
};

export const authors = [
  mariaFirmina,
  emiliaFreitas,
  autaSouza,
  anaLuisa,
  narcisaAmalia
]