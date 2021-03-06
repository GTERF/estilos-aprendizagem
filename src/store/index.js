import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    estiloAprendizagem: [
      {text: 'Não tenho horário fixo para acessar a internet.', value: '1'},
      {text: 'Estou seguro(a) do que é bom e do que é mau, do que está bem e do que está mal.', value: '2'},
      {text: 'Muitas vezes faço, sem olhar as consequências.', value: '3'},
      {text: 'Normalmente, resolvo os problemas metodicamente e passo a passo', value: '4'},
      {text: 'Creio que a formalidade corta e limita a atuação espotânea das pessoas.', value: '5'},
      {text: 'Interessa-me saber quais são os sistemas de valores de outros e com que critérios atuam.', value: '6'},
      {text: 'Penso que agir intuitivamente pode ser sempre tão válido como atuar reflexivamente.', value: '7'},
      {text: 'Creio que o mais importante é que as coisas funcionem.', value: '8'},
      {text: 'Procuro estar atento(a) ao que acontence aqui e agora.', value: '9'},
      {text: 'Agrada-me quando tenho tempo para preparar meu trabalho e realizá-lo com consciência.', value: '10'},
      {text: 'Estou seguindo, porque quero, uma ordem na alimentação, no estudo, fazendo exercícios regurlamente.', value: '11'},
      {text: 'Quando escuto uma nova ideia, em seguida, começo a pensar como colocá-la em prática.', value: '12'},
      {text: 'Prefiro ideias originais e novas mesmo que não sejam práticas.', value: '13'},
      {text: 'Admito e me ajusto às normas somente se servem para atingir meus objetivos.', value: '14'},
      {text: 'Normalmente me dou bem com pessoas reflexivas, e me custa sintonizar com pessoas demasiadamente espontâneas e imprevisíveis.', value: '15'},
      {text: 'Escuto com mais frequência do que falo.', value: '16'},
      {text: 'Prefiro as coisas estruturadas às desordenadas.', value: '17'},
      {text: 'Quando possuo qualquer informação, trato de interpretá-la bem antes de manisfestar alguma conclusão.', value: '18'},
      {text: 'Antes de fazer algo, estudo com cuidado suas vantagens e incovenientes.', value: '19'},
      {text: 'Estimula-me o fato de fazer algo novo e diferente. ', value: '20'},
      {text: 'Quase sempre procuro ser coerente com meus critérios e escala de valores. Tenho princípios e sigo.', value: '21'},
      {text: 'Em uma discussão, não gosto de rodeios.', value: '22'},
      {text: 'Não me agrada envolvimente afetivo no ambiente de trabalho. Prefiro manter relações distantes.', value: '23'},
      {text: 'Gosto mais de pessoas realistas e concretas do que as teóricas.', value: '24'},
      {text: 'É difícil ser criativo(a) e romper estruturas.', value: '25'},
      {text: 'Gosto de estudar perto de pessoas espotâneas e divertidas.', value: '26'},
      {text: 'Na maioria das vezes expresso abertamente o que sinto.', value: '27'},
      {text: 'Gosto de analisar e esmiuçar as coisas.', value: '28'},
      {text: 'Me incomoda o fato das pessoas não tomarem as coisas a sério.', value: '29'},
      {text: 'Atrai-me experimentar e praticar as últimas técnicas e novidades.', value: '30'},
      {text: 'Sou cauteloso(a) na hora de tirar conclusões.', value: '31'},
      {text: 'Prefiro contar com o maior número de fonte de informações. Quanto mais dados tiver reunido para refletir, melhor.', value: '32'},
      {text: 'Tenho tendência de ser perfeccionista.', value: '33'},
      {text: 'Prefiro ouvir a opinião dos outros antes de expor a minha.', value: '34'},
      {text: 'Gosto de levar a vida espontaneamente e não ter que planejá-la.', value: '35'},
      {text: 'Nas discussões gosto de observar como atuam os outros participantes.', value: '36'},
      {text: 'Sinto-me incomodado(a) com pessoas caladas e demasiadamente analíticas.', value: '37'},
      {text: 'Julgo com frequência as ideias dos outros, por seu valor prático.', value: '38'},
      {text: 'Angustio-me se me obrigam a acelerar muito o trabalho para cumprir um prazo.', value: '39'},
      {text: 'Nas reuniões apoio as ideias práticas e realistas.', value: '40'},
      {text: 'É melhor aproveitar o momento presente o que deleitar-se pensando no passado ou futuro.', value: '41'},
      {text: 'Incomodam-me as pessoas que sempre desejam apressar as coisas.', value: '42'},
      {text: 'Apoio ideias novas e espontâneas nos grupos de discussão.', value: '43'},
      {text: 'Penso que são mais consistentes as decisões fundamentadas em uma minuciosa análise do que as baseadas na intuição.', value: '44'},
      {text: 'Detecto frequentemente a inconsistência e os pontos frágeis nas argumentações dos outros.', value: '45'},
      {text: 'Creio que é preciso transpor as normas muito mais vezes do que cumpri-las.', value: '46'},
      {text: 'Frequentemente, percebo outras formas melhores e mais práticas de fazer as coisas.', value: '47'},
      {text: 'No geral, falo mais do que escuto.', value: '48'},
      {text: 'Prefiro distanciar-me dos fatos e observá-los a partir de outras perspectivas.', value: '49'},
      {text: 'Estou convencido (a) de que se devem impor a lógica e a razão.', value: '50'},
      {text: 'Gosto de buscar novas experiências.', value: '51'},
      {text: 'Gosto de experimentar e aplicar as coisas.', value: '52'},
      {text: 'Penso que devemos chegar logo ao âmago, ao centro das questões.', value: '53'},
      {text: 'Procuro sempre chegar a conclusões e ideias claras.', value: '54'},
      {text: 'Prefiro discutir questões concretas e não perder tempo com falas vazias.', value: '55'},
      {text: 'Incomodo-me quando dão explicações irrelevantes e incoerentes.', value: '56'},
      {text: 'Comprovo antes se as coisas funcionam realmente.', value: '57'},
      {text: 'Faço vários borrões antes da redação final de um trabalho.', value: '58'},
      {text: 'Sou consciente de que nas discussões ajudo a manter os outros centrados nos temas, evitando divagações.', value: '59'},
      {text: 'Observo que, com frequência, sou um (a) dos (as) mais objetivos e ponderados nas discussões.', value: '60'},
      {text: 'Quando algo vai mal, não dou importância e trato de fazê-lo melhor.', value: '61'},
      {text: 'Desconsidero as ideias originais e espontâneas se não as percebo práticas.', value: '62'},
      {text: 'Gosto de analisar diversas alternativas antes de tomar uma decisão.', value: '63'},
      {text: 'Com frequência, olho adiante para prever o futuro.', value: '64'},
      {text: 'Nos debates e discussões prefiro desempenhar um papel secundário a ser o(a) líder ou o(a) que mais participa.', value: '65'},
      {text: 'Incomodam-me as pessoas que não atuam com lógica.', value: '66'},
      {text: 'Incomoda-me ter que planejar e prever coisas.', value: '67'},
      {text: 'Creio que o fim justifica os meios em muitos casos.', value: '68'},
      {text: 'Costumo refletir sobre os assuntos e problemas.', value: '69'},
      {text: 'O trabalho consciente me traz satisfação e orgulho.', value: '70'},
      {text: 'Diante dos acontecimentos trato de descobrir os princípios e teorias em que se baseiam.', value: '71'},
      {text: 'Com o intuito de conseguir o objetivo que pretendo, sou capaz de ferir sentimentos alheios.', value: '72'},
      {text: 'Não me importa fazer todo o necessário para que o meu trabalho seja efetivado.', value: '73'},
      {text: 'Com frequência, sou uma das pessoas que mais animam as festas.', value: '74'},
      {text: 'Aborreço-me, frequentemente, com o trabalho metódico e minucioso.', value: '75'},
      {text: 'As pessoas, com frequência, crêem que sou pouco sensível a seus sentimentos.', value: '76'},
      {text: 'Costumo deixar-me levar por minhas intuições.', value: '77'},
      {text: 'Nos trabalhos de grupo, procuro que se siga um método e uma ordem.', value: '78'},
      {text: 'Com frequência, me interessa saber o que as pessoas pensam.', value: '79'},
      {text: 'Evito o temas subjetivos, ambíguos e pouco claros.', value: '80'}
    ],
    espacoVirtual: [
      {text: 'Não tenho horário fixo para acessar a internet.', value: '1'},
      {text: 'Analiso sempre a qualidade do site da web que acesso.', value: '2'},
      {text: 'Abro uma tela por vez quando navego na internet.', value: '3'},
      {text: 'Gosto de localizar páginas na web com atividade de entretenimento/lazer.', value: '4'},
      {text: 'Na hora de buscar informação sobre um tema que me interesso busco em mais de uma página da web.', value: '5'},
      {text: 'Nas páginas da internet vejo primeiro a imagem e depois o texto escrito.', value: '6'},
      {text: 'Tenho estratégia própria de busca para encontrar materiais na internet.', value: '7'},
      {text: 'Realizo com frequência compras pela internet.', value: '8'},
      {text: 'Planejo encontros pessoais e profissionais com outras pessoas na internet.', value: '9'},
      {text: 'Na página da web observo o texto escrito e depois a imagem.', value: '10'},
      {text: 'Busco novas página web com frequência.', value: '11'},
      {text: 'Elaboro materiais de vários formatos digitais e os coloco online em um site pessoal ou em sites que publicam páginas web.', value: '12'},
      {text: 'Termino minha pesquisa na internet quando encontro o primeiro site sobre o tema investigado.', value: '13'},
      {text: 'Busco informação em internet para refletir e gerar ideias próprias e novas.', value: '14'},
      {text: 'Na internet busco imagens significativa que me fazem refletir.', value: '15'},
      {text: 'Utilizo palavras técnicas na internet, como, por exemplo, site, web, chatear, hiperlink, etc., tanto na escrita como na conversa cotidiana.', value: '16'},
      {text: 'Planejo o tempo de navegação na internet coordenando-o com o tempo de trabalho de outras outras atividades.', value: '17'},
      {text: 'Planejo a pesquisa que realizo na internet.', value: '18'},
      {text: 'Gosto do excesso de informações que posso encontrar na internet.', value: '19'},
      {text: 'Localizo sempre oportunidades na web (trabalho, curso, evento, etc.).', value: '20'},
      {text: 'Experimeto vários tipos de programas que encontro na internet.', value: '21'},
      {text: 'Uso muitas imagens que busco na web para a elaboração de materiais de trabalho.', value: '22'},
      {text: 'Utilizo as ferramentas que me oferece a internet (whatsApp, facebook, skype) para desenvolver meu trabalho e para comunicações rápidas.', value: '23'},
      {text: 'Memorizo facilmente as direções das páginas da web.', value: '24'},
      {text: 'Seleciono as informações da web baseado em conceitos conhecidos da vida cotidiana, científicos ou de experiências particulares.', value: '25'},
      {text: 'Gostaria de utilizar uma tela tátil no lugar do mouse.', value: '26'},
      {text: 'Prefiro os textos com hyperlinks.', value: '27'},
      {text: 'Sigo procedimentos fixos para abrir os programas de computadores.', value: '28'},
      {text: 'Realizo na internet aplicações profissionais.', value: '29'},
      {text: 'Uso a internet para me relacionar socialmente.', value: '30'},
      {text: 'Prefiro pesquisar nos sites já conhecidos.', value: '31'},
      {text: 'Participo de grupos virtuais de aprendizagem.', value: '32'},
      {text: 'Seleciono notícias da web para ler em outro momento.', value: '33'},
      {text: 'Busco textos e documentos nas bibliotecas, revistas e sites de arquivos científicos online.', value: '34'},
      {text: 'Utilizo várias páginas de internet ao mesmo tempo.', value: '35'},
      {text: 'Interpreto a informação das páginas web, observando títulos e subtítulos.', value: '36'},
      {text: 'Organizo de forma estratégica as pastas com os documentos que tenho em meu computador.', value: '37'},
      {text: 'Utilizo a internet para informar/tramitar/gestionar meus assuntos (administrativas, jurídicas, legais, etc.).', value: '38'},
      {text: 'Participo de listas de discussão.', value: '39'},
      {text: 'Escuto música na web enquanto realizo trabalhos no computador.', value: '40'}
    ]
  }
})
