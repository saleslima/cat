"use strict";

const questions = [
  { aula: 1, q: "Na ciência econômica, o problema fundamental que exige escolhas é:", o: ["A abundância ilimitada de recursos", "A escassez diante de necessidades humanas amplas", "A ausência de tecnologia", "A existência exclusiva de bens públicos"], a: 1, e: "A economia é conhecida como ciência da escassez porque os recursos produtivos são limitados, enquanto as necessidades e os desejos são amplos." },
  { aula: 1, q: "Quais são os quatro fatores produtivos destacados no material?", o: ["Terra, capital, trabalho e tecnologia", "Moeda, crédito, juros e câmbio", "Preço, demanda, oferta e lucro", "Consumo, poupança, tributos e exportação"], a: 0, e: "Os fatores produtivos básicos apresentados são terra, capital, trabalho e tecnologia, cuja alocação eficiente é central para a economia." },
  { aula: 1, q: "A Fisiocracia defendia como principal fonte de riqueza:", o: ["O comércio exterior", "A emissão de moeda", "A terra e a atividade agrícola", "A indústria pesada"], a: 2, e: "Os fisiocratas consideravam a terra cultivável e a agricultura como a fonte essencial da riqueza, subordinada a uma ordem natural." },
  { aula: 1, q: "O Plano de Metas, associado ao governo Juscelino Kubitschek, ficou conhecido pelo lema:", o: ["Crescer sem endividar", "Cinquenta anos em cinco", "Exportar é o que importa", "Brasil acima da inflação"], a: 1, e: "O Plano de Metas buscava acelerar a modernização e a industrialização brasileira, sintetizadas no lema “cinquenta anos em cinco”." },
  { aula: 1, q: "A política de substituição de importações buscava principalmente:", o: ["Estimular a importação de bens de consumo", "Produzir internamente bens antes importados", "Eliminar a produção industrial nacional", "Fixar o câmbio sem intervenção estatal"], a: 1, e: "A substituição de importações procura reduzir a dependência externa por meio da produção nacional de mercadorias anteriormente compradas no exterior." },
  { aula: 1, q: "Uma característica central do Plano Cruzado foi:", o: ["A criação imediata do real", "O congelamento de preços e salários", "A privatização completa das estatais", "A adoção do câmbio flutuante puro"], a: 1, e: "O Plano Cruzado tentou conter a inflação por medidas heterodoxas, entre elas o congelamento de preços e salários." },
  { aula: 1, q: "O Plano Real diferenciou-se por combinar ajuste e estabilização com a criação da:", o: ["ORTN", "URV", "BTN", "OTN"], a: 1, e: "A Unidade Real de Valor (URV) funcionou como unidade de conta de transição antes da introdução do real, ajudando a romper a inércia inflacionária." },

  { aula: 2, q: "O custo de oportunidade corresponde:", o: ["Ao custo contábil total de uma empresa", "Ao valor da melhor alternativa abandonada ao fazer uma escolha", "Somente aos juros pagos em um empréstimo", "À diferença entre receita e imposto"], a: 1, e: "Toda escolha implica renúncia. O custo de oportunidade é o benefício da melhor alternativa que deixou de ser escolhida." },
  { aula: 2, q: "Mantidas as demais condições, quando o preço de um bem aumenta, a quantidade demandada tende a:", o: ["Aumentar", "Permanecer sempre igual", "Diminuir", "Tornar-se necessariamente zero"], a: 2, e: "Pela lei da demanda, preço e quantidade demandada normalmente variam em sentidos opostos, ceteris paribus." },
  { aula: 2, q: "Um deslocamento da curva de demanda para a direita pode ocorrer por:", o: ["Queda da renda, no caso de um bem normal", "Aumento da renda, no caso de um bem normal", "Aumento do custo de produção", "Redução do número de consumidores"], a: 1, e: "Para bens normais, o aumento da renda eleva a demanda em cada nível de preço, deslocando sua curva para a direita." },
  { aula: 2, q: "O preço de equilíbrio de mercado é aquele em que:", o: ["A demanda é sempre maior que a oferta", "A oferta é sempre maior que a demanda", "Quantidade ofertada e quantidade demandada se igualam", "O governo define a margem de lucro"], a: 2, e: "No equilíbrio, não há excesso de oferta nem escassez: a quantidade que os produtores desejam vender coincide com a que os consumidores desejam comprar." },
  { aula: 2, q: "Uma demanda é considerada elástica quando, em valor absoluto:", o: ["A elasticidade-preço é maior que 1", "A elasticidade-preço é igual a zero", "A elasticidade-preço é menor que 1", "O preço não varia"], a: 0, e: "Elasticidade-preço da demanda maior que 1 indica que a quantidade reage proporcionalmente mais que a variação do preço." },
  { aula: 2, q: "Bens com poucos substitutos próximos tendem a apresentar demanda:", o: ["Mais elástica", "Mais inelástica", "Perfeitamente elástica", "Necessariamente unitária"], a: 1, e: "Quando há poucos substitutos, o consumidor tem menor capacidade de trocar de produto após uma alta de preço, tornando a demanda mais inelástica." },
  { aula: 2, q: "No curto prazo, um fator de produção é considerado fixo quando:", o: ["Não pode ser alterado dentro do período analisado", "Seu preço é definido pelo governo", "Não participa da produção", "Sua produtividade é sempre zero"], a: 0, e: "No curto prazo, pelo menos um fator não pode ser ajustado rapidamente, como a capacidade física de uma fábrica." },
  { aula: 2, q: "O custo marginal representa:", o: ["O custo médio de toda a produção", "O acréscimo no custo total causado pela produção de uma unidade adicional", "A soma de todos os custos fixos", "A receita perdida pela empresa"], a: 1, e: "Custo marginal mede quanto o custo total aumenta quando a empresa produz uma unidade adicional." },
  { aula: 2, q: "A receita total de uma empresa é calculada por:", o: ["Preço × quantidade vendida", "Custo fixo + custo variável", "Lucro ÷ quantidade", "Preço − custo médio"], a: 0, e: "A receita total é o valor obtido nas vendas: preço unitário multiplicado pela quantidade comercializada." },

  { aula: 3, q: "Um monopólio caracteriza-se por:", o: ["Muitos vendedores de produto homogêneo", "Um único vendedor com barreiras à entrada", "Poucos compradores e muitos vendedores", "Livre entrada e informação perfeita"], a: 1, e: "No monopólio há um único ofertante relevante e barreiras que dificultam ou impedem a entrada de concorrentes." },
  { aula: 3, q: "No oligopólio, uma decisão de preço de uma empresa:", o: ["Não afeta as concorrentes", "Depende da interdependência estratégica entre poucas empresas", "É sempre determinada pelo consumidor", "É impossível por lei"], a: 1, e: "Como poucas firmas concentram o mercado, cada uma considera as prováveis reações das demais ao definir preços, produção ou estratégia." },
  { aula: 3, q: "Cartel é:", o: ["Uma associação de consumidores", "Um acordo entre produtores para coordenar decisões e elevar lucros", "Uma empresa pública sem concorrência", "Uma regra de livre entrada"], a: 1, e: "O cartel coordena políticas de empresas concorrentes, como preços ou quantidades, para reproduzir resultados próximos aos de um monopólio." },
  { aula: 3, q: "A concorrência monopolista combina:", o: ["Um vendedor e produto sem substitutos", "Muitas empresas e produtos diferenciados", "Poucas empresas e produto necessariamente homogêneo", "Muitos compradores e um único empregador"], a: 1, e: "Na concorrência monopolista existem muitos vendedores, mas cada um diferencia seu produto por marca, qualidade, localização ou outros atributos." },
  { aula: 3, q: "Na concorrência perfeita, a empresa individual é tipicamente:", o: ["Formadora de preço", "Tomadora de preço", "Única fornecedora", "Controladora da demanda total"], a: 1, e: "Como há muitas empresas e produto homogêneo, nenhuma firma isolada consegue alterar o preço de mercado; ela aceita o preço vigente." },
  { aula: 3, q: "Uma barreira à entrada pode ser:", o: ["Patente ou elevado investimento inicial", "Informação perfeita", "Grande número de vendedores", "Produto homogêneo por si só"], a: 0, e: "Patentes, economias de escala, controle de recursos e altos investimentos iniciais podem impedir ou dificultar a entrada de novos concorrentes." },

  { aula: 4, q: "Em economia industrial, empresa ou firma é entendida como:", o: ["O conjunto de todas as empresas de um país", "A unidade que organiza recursos para produzir", "Somente uma fábrica estatal", "O mercado consumidor final"], a: 1, e: "A firma é a unidade primária de ação que coordena recursos e fatores de produção para produzir bens ou serviços." },
  { aula: 4, q: "Economia de escala ocorre quando:", o: ["O custo médio aumenta com a produção", "O custo médio diminui à medida que a escala produtiva cresce", "A empresa produz apenas um item", "A demanda deixa de existir"], a: 1, e: "Há economia de escala quando o aumento do volume permite diluir custos ou ganhar eficiência, reduzindo o custo médio." },
  { aula: 4, q: "Economia de escopo ocorre quando:", o: ["Produzir conjuntamente dois ou mais produtos é mais barato que produzi-los separadamente", "A empresa vende apenas no mercado local", "Os custos fixos desaparecem", "Todas as empresas adotam o mesmo preço"], a: 0, e: "A economia de escopo resulta do compartilhamento de recursos, distribuição, marca ou tecnologia entre diferentes produtos." },
  { aula: 4, q: "No modelo de Cournot, as empresas competem principalmente escolhendo:", o: ["Quantidade", "Salário", "Publicidade apenas", "Taxa de câmbio"], a: 0, e: "No modelo de Cournot, cada firma escolhe sua quantidade considerando como dada a quantidade esperada da rival." },
  { aula: 4, q: "No modelo de Bertrand, a variável estratégica central é:", o: ["Quantidade", "Preço", "Número de empregados", "Taxa de imposto"], a: 1, e: "Bertrand modela a concorrência oligopolista baseada em preços, diferentemente de Cournot, centrado em quantidades." },
  { aula: 4, q: "No modelo de Stackelberg, existe:", o: ["Simultaneidade completa sem liderança", "Uma empresa líder que decide antes da seguidora", "Apenas um consumidor", "Preço obrigatoriamente fixado pelo Estado"], a: 1, e: "Stackelberg é um jogo sequencial em que a firma líder escolhe primeiro e a seguidora reage à decisão observada." },
  { aula: 4, q: "No dilema dos prisioneiros, o resultado de estratégias individualmente racionais pode ser:", o: ["Coletivamente inferior a uma solução cooperativa", "Sempre o melhor possível para todos", "Irrelevante para oligopólios", "Igual ao monopólio natural"], a: 0, e: "O dilema mostra que incentivos individuais podem levar a um equilíbrio pior para todos do que a cooperação, questão relevante em decisões estratégicas." },

  { aula: 5, q: "A política fiscal utiliza principalmente:", o: ["Gastos públicos e tributação", "Apenas reservas cambiais", "Somente a taxa de juros interbancária", "Patentes e marcas"], a: 0, e: "A política fiscal altera receitas tributárias e despesas governamentais para influenciar demanda, atividade econômica e contas públicas." },
  { aula: 5, q: "Uma política fiscal expansionista pode envolver:", o: ["Redução de gastos e aumento de impostos", "Aumento de gastos ou redução de impostos", "Venda obrigatória de moeda estrangeira", "Elevação de barreiras à entrada"], a: 1, e: "Para estimular a demanda agregada, o governo pode ampliar despesas ou reduzir tributos, embora isso possa pressionar o resultado fiscal." },
  { aula: 5, q: "A política monetária está relacionada ao controle de:", o: ["Moeda, crédito e taxa de juros", "Quantidade de fábricas", "Patentes industriais", "Salário de cada empresa privada"], a: 0, e: "A autoridade monetária administra liquidez, crédito e juros para influenciar inflação e nível de atividade." },
  { aula: 5, q: "Em geral, uma elevação da taxa Selic tende a:", o: ["Baratear imediatamente todo crédito", "Desestimular crédito e consumo, ajudando a conter a inflação", "Aumentar automaticamente a oferta de todos os bens", "Eliminar o risco cambial"], a: 1, e: "Juros maiores encarecem o crédito e elevam o incentivo à poupança, reduzindo a demanda, embora também possam desacelerar a atividade." },
  { aula: 5, q: "A política cambial trata principalmente:", o: ["Da relação entre a moeda nacional e moedas estrangeiras", "Da fixação do salário mínimo apenas", "Dos custos internos de produção", "Da estrutura de monopólio"], a: 0, e: "A política cambial envolve o regime e as intervenções que afetam a taxa de câmbio e, por consequência, comércio exterior e fluxos financeiros." },
  { aula: 5, q: "Uma desvalorização da moeda nacional tende, tudo o mais constante, a:", o: ["Baratear importações", "Tornar exportações mais competitivas e importações mais caras", "Eliminar a inflação", "Reduzir o preço doméstico de todos os insumos importados"], a: 1, e: "Com a moeda nacional mais barata, produtos domésticos ficam relativamente mais baratos para estrangeiros, enquanto bens importados custam mais em moeda local." },
  { aula: 5, q: "A regulação econômica busca, entre outros objetivos:", o: ["Corrigir falhas de mercado e proteger o interesse público", "Eliminar toda iniciativa privada", "Impedir qualquer inovação", "Substituir todos os preços por escambo"], a: 0, e: "A regulação pode enfrentar monopólios, assimetria de informação, externalidades e outras falhas, equilibrando eficiência e interesse coletivo." },

  { aula: 6, q: "O Produto Interno Bruto (PIB) mede:", o: ["O estoque total de dinheiro do país", "O valor dos bens e serviços finais produzidos no território em determinado período", "Somente as exportações", "A riqueza acumulada de todas as famílias"], a: 1, e: "O PIB contabiliza o valor da produção final realizada dentro do território em um período, evitando dupla contagem de bens intermediários." },
  { aula: 6, q: "A diferença essencial entre PIB nominal e PIB real é que o PIB real:", o: ["Considera apenas o setor público", "Desconta o efeito das variações de preços", "Inclui somente importações", "É sempre menor que zero"], a: 1, e: "O PIB real usa preços constantes para separar a variação da quantidade produzida do efeito da inflação." },
  { aula: 6, q: "Inflação é definida como:", o: ["Queda isolada no preço de um produto", "Aumento generalizado e persistente do nível de preços", "Aumento exclusivo do salário mínimo", "Crescimento real do PIB"], a: 1, e: "Inflação não é a alta pontual de um item, mas a elevação disseminada e continuada do nível geral de preços." },
  { aula: 6, q: "Recessão econômica é normalmente associada a:", o: ["Expansão sustentada da atividade", "Queda relevante da atividade econômica", "Inflação necessariamente igual a zero", "Aumento automático da produtividade"], a: 1, e: "Recessão corresponde a uma contração da atividade, normalmente acompanhada por redução da produção, renda e emprego." },
  { aula: 6, q: "O risco-país procura refletir:", o: ["A probabilidade percebida de inadimplência ou instabilidade nos investimentos de um país", "A quantidade de empresas registradas", "O custo de produção agrícola", "A inflação de um único município"], a: 0, e: "O indicador expressa o prêmio exigido por investidores diante do risco soberano, político e econômico em comparação com ativos considerados mais seguros." },
  { aula: 6, q: "Indicadores econômicos são úteis à gestão empresarial porque:", o: ["Garantem lucro em qualquer situação", "Ajudam a interpretar o ambiente externo e antecipar tendências", "Eliminam a necessidade de planejamento", "Substituem todos os dados internos"], a: 1, e: "Indicadores informam o passado e o presente e ajudam a projetar tendências, oferecendo suporte — não garantia — às decisões e estratégias empresariais." }
];

const letters = ["A", "B", "C", "D"];
const quizForm = document.getElementById("quiz-form");
const quizContainer = document.getElementById("quiz-container");
const answeredCount = document.getElementById("answered-count");
const progressBar = document.getElementById("progress-bar");
const submitButton = document.getElementById("submit-quiz");
const resetButton = document.getElementById("reset-quiz");
const resultPanel = document.getElementById("result-panel");
const toast = document.getElementById("toast");
let corrected = false;

function renderQuiz() {
  quizContainer.innerHTML = questions.map((item, index) => `
    <article class="question-card" id="question-${index + 1}" data-index="${index}">
      <div class="question-meta"><span>Questão ${index + 1}</span><span>Aula ${item.aula}</span></div>
      <h3>${item.q}</h3>
      <div class="options" role="radiogroup" aria-label="Alternativas da questão ${index + 1}">
        ${item.o.map((option, optionIndex) => `
          <label class="option" data-option="${optionIndex}">
            <input type="radio" name="q${index}" value="${optionIndex}">
            <span class="option-letter">${letters[optionIndex]})</span>
            <span>${option}</span>
          </label>
        `).join("")}
      </div>
      <p class="feedback-line"></p>
    </article>
  `).join("");
}

function getAnsweredTotal() {
  return questions.reduce((total, _, index) => total + (quizForm.querySelector(`input[name="q${index}"]:checked`) ? 1 : 0), 0);
}

function updateProgress() {
  const total = getAnsweredTotal();
  answeredCount.textContent = `${total} de ${questions.length} respondidas`;
  progressBar.style.width = `${(total / questions.length) * 100}%`;
}

quizForm.addEventListener("change", (event) => {
  if (corrected) return;
  const card = event.target.closest(".question-card");
  if (card) card.classList.remove("unanswered");
  updateProgress();
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (corrected) return;

  const unanswered = questions.map((_, index) => index).filter((index) => !quizForm.querySelector(`input[name="q${index}"]:checked`));
  document.querySelectorAll(".question-card").forEach((card) => card.classList.remove("unanswered"));

  if (unanswered.length) {
    unanswered.forEach((index) => document.getElementById(`question-${index + 1}`).classList.add("unanswered"));
    const first = document.getElementById(`question-${unanswered[0] + 1}`);
    answeredCount.textContent = `Faltam ${unanswered.length} questão${unanswered.length > 1 ? "ões" : ""}`;
    first.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  corrected = true;
  let score = 0;
  const wrong = [];

  questions.forEach((item, index) => {
    const card = document.getElementById(`question-${index + 1}`);
    const selected = Number(quizForm.querySelector(`input[name="q${index}"]:checked`).value);
    const labels = card.querySelectorAll(".option");
    const feedback = card.querySelector(".feedback-line");
    card.classList.remove("unanswered");
    labels[item.a].classList.add("is-correct-answer");

    if (selected === item.a) {
      score++;
      card.classList.add("correct");
      feedback.textContent = "Resposta correta.";
    } else {
      card.classList.add("incorrect");
      labels[selected].classList.add("is-wrong-answer");
      feedback.textContent = `Resposta incorreta. A alternativa correta é ${letters[item.a]}.`;
      wrong.push({ number: index + 1, selected, ...item });
    }
  });

  quizForm.querySelectorAll("input").forEach((input) => { input.disabled = true; });
  submitButton.classList.add("is-hidden");
  resetButton.classList.remove("is-hidden");
  showResults(score, wrong);
});

function showResults(score, wrong) {
  const percent = Math.round((score / questions.length) * 100);
  document.getElementById("score-percent").textContent = `${percent}%`;
  document.getElementById("score-fraction").textContent = `${score}/${questions.length}`;
  document.getElementById("result-message").textContent = percent > 80
    ? "Excelente resultado. Você demonstrou ótimo domínio dos conteúdos das seis aulas."
    : percent >= 60
      ? "Bom resultado. Revise as explicações abaixo para consolidar os pontos que ainda geraram dúvida."
      : "Continue estudando. Use as explicações detalhadas e os flashcards com fontes para revisar os temas que precisam de reforço.";

  document.getElementById("answer-key-grid").innerHTML = questions.map((item, index) =>
    `<div class="key-item"><span>${index + 1}.</span> <strong>${letters[item.a]}</strong></div>`
  ).join("");

  const wrongContainer = document.getElementById("wrong-answers");
  if (!wrong.length) {
    wrongContainer.innerHTML = '<div class="no-errors">Parabéns! Você não errou nenhuma questão.</div>';
  } else {
    wrongContainer.innerHTML = wrong.map((item) => `
      <article class="explanation">
        <strong>Questão ${item.number} — Aula ${item.aula}</strong>
        <div>Sua resposta: ${letters[item.selected]}. Correta: ${letters[item.a]}.</div>
        <p>${item.e}</p>
      </article>
    `).join("");
  }

  resultPanel.classList.remove("is-hidden");
  resultPanel.focus();
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });

  if (percent > 80) showToast();
}

function showToast() {
  toast.classList.add("is-visible");
  toast.setAttribute("aria-hidden", "false");
  window.setTimeout(hideToast, 7000);
}
function hideToast() {
  toast.classList.remove("is-visible");
  toast.setAttribute("aria-hidden", "true");
}
document.getElementById("toast-close").addEventListener("click", hideToast);

resetButton.addEventListener("click", () => {
  corrected = false;
  quizForm.reset();
  quizForm.querySelectorAll("input").forEach((input) => { input.disabled = false; });
  document.querySelectorAll(".question-card").forEach((card) => card.classList.remove("correct", "incorrect", "unanswered"));
  document.querySelectorAll(".option").forEach((option) => option.classList.remove("is-correct-answer", "is-wrong-answer"));
  document.querySelectorAll(".feedback-line").forEach((line) => { line.textContent = ""; });
  resultPanel.classList.add("is-hidden");
  submitButton.classList.remove("is-hidden");
  resetButton.classList.add("is-hidden");
  updateProgress();
  document.getElementById("simulado").scrollIntoView({ behavior: "smooth" });
});

renderQuiz();
updateProgress();

// Recursos PWA e tema S$S
let deferredInstallPrompt = null;
const installButtons = [
  document.getElementById('install-button'),
  document.getElementById('hero-install-button')
].filter(Boolean);
const themeToggle = document.getElementById('theme-toggle');
const themeMeta = document.getElementById('themeColorMeta');
const appToast = document.getElementById('app-toast');

function notifyApp(message) {
  if (!appToast) return;
  appToast.textContent = message;
  appToast.classList.add('is-visible');
  clearTimeout(notifyApp.timer);
  notifyApp.timer = setTimeout(() => appToast.classList.remove('is-visible'), 2800);
}

function applyTheme(theme) {
  const day = theme === 'day';
  document.body.classList.toggle('day-mode', day);
  document.documentElement.dataset.theme = day ? 'day' : 'neon';
  localStorage.setItem('sss-theme', day ? 'day' : 'neon');
  if (themeToggle) themeToggle.textContent = day ? '◐ Modo neon' : '☀ Modo dia';
  if (themeMeta) themeMeta.setAttribute('content', day ? '#f3f7ff' : '#050816');
}

applyTheme(localStorage.getItem('sss-theme') || 'neon');
themeToggle?.addEventListener('click', () => {
  const next = document.body.classList.contains('day-mode') ? 'neon' : 'day';
  applyTheme(next);
  notifyApp(next === 'day' ? 'Modo dia ativado' : 'Modo neon ativado');
});

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButtons.forEach(button => button.classList.add('is-ready'));
});

async function installPwa() {
  if (window.matchMedia('(display-mode: standalone)').matches) {
    notifyApp('O S$S já está instalado.');
    return;
  }
  if (!deferredInstallPrompt) {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    notifyApp(isIOS ? 'No iPhone: Compartilhar → Adicionar à Tela de Início.' : 'Abra o menu do navegador e escolha “Instalar aplicativo”.');
    return;
  }
  deferredInstallPrompt.prompt();
  const choice = await deferredInstallPrompt.userChoice;
  notifyApp(choice.outcome === 'accepted' ? 'Instalação iniciada.' : 'Instalação cancelada.');
  deferredInstallPrompt = null;
}
installButtons.forEach(button => button.addEventListener('click', installPwa));
window.addEventListener('appinstalled', () => notifyApp('S$S instalado com sucesso!'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => notifyApp('Não foi possível ativar o modo offline.'));
  });
}

// Flashcards: perguntas exclusivas, diferentes das questões do simulado
const flashcardsData = [
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Por que a escassez é central para a ciência econômica?",
    "r": "Porque os recursos são limitados enquanto as necessidades humanas são amplas, exigindo escolhas e alocação eficiente.",
    "d": "Esse conflito obriga famílias, empresas e governos a comparar alternativas. Toda escolha envolve um trade-off e um custo de oportunidade: ao direcionar recursos para uma finalidade, outra possibilidade deixa de ser atendida.",
    "fontes": [
      "openstax_intro"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Quais são os quatro fatores produtivos destacados no material?",
    "r": "Terra, capital, trabalho e tecnologia.",
    "d": "Terra reúne recursos naturais; trabalho corresponde ao esforço humano; capital inclui máquinas, instalações e equipamentos; tecnologia representa conhecimentos e métodos que elevam a produtividade. A combinação desses fatores determina a capacidade de produção.",
    "fontes": [
      "openstax_intro"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Como a inflação reduz o poder de compra?",
    "r": "Ao elevar de forma generalizada os preços, fazendo com que a mesma renda compre menos bens e serviços.",
    "d": "Quando os preços crescem mais rápido que salários e rendimentos, a renda real diminui. O efeito costuma ser mais severo para quem possui renda fixa ou pouca capacidade de renegociar preços e salários.",
    "fontes": [
      "ipea_real",
      "bcb_monetaria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "O que defendia a escola fisiocrata?",
    "r": "Que a terra e a atividade agrícola eram a principal fonte de riqueza e seguiam uma ordem natural.",
    "d": "Os fisiocratas surgiram na França do século XVIII e criticavam o excesso de intervenção mercantilista. Para eles, a agricultura gerava um produto líquido capaz de sustentar as demais atividades econômicas.",
    "fontes": [
      "openstax_intro"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Quem foram dois nomes associados à Fisiocracia?",
    "r": "François Quesnay e Anne Robert Jacques Turgot.",
    "d": "Quesnay formulou o Tableau Économique, uma representação pioneira da circulação da renda. Turgot defendeu reformas, liberdade de comércio e menor interferência estatal em várias atividades econômicas.",
    "fontes": [
      "openstax_intro"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "O que caracteriza um ciclo econômico brasileiro?",
    "r": "O predomínio temporário de uma atividade, produto ou setor na geração de renda, exportações e investimentos.",
    "d": "Nos ciclos do açúcar, ouro, café e outros produtos, a expansão de uma atividade reorganizou trabalho, infraestrutura, crédito e comércio exterior. A concentração em um produto, porém, aumentava a exposição a crises de preço e demanda.",
    "fontes": [
      "ipea_industria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Por que a economia brasileira foi historicamente vulnerável ao exterior?",
    "r": "Porque dependeu de exportações concentradas e de importações de bens, tecnologia e insumos.",
    "d": "Essa dependência tornou renda, arrecadação e investimento sensíveis aos preços internacionais, ao câmbio e à disponibilidade de financiamento externo. Choques fora do país podiam ser rapidamente transmitidos à economia doméstica.",
    "fontes": [
      "ipea_industria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Qual foi o papel do café na economia brasileira?",
    "r": "Gerou divisas, estimulou infraestrutura, urbanização e acumulação de capital para a industrialização.",
    "d": "A renda do café financiou ferrovias, portos, bancos e atividades urbanas, especialmente no Sudeste. Também contribuiu para a formação de mercados consumidores e de capital que mais tarde apoiaram a indústria.",
    "fontes": [
      "ipea_industria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "O que significa substituição de importações?",
    "r": "Produzir internamente bens antes comprados do exterior para reduzir dependência e fortalecer a indústria nacional.",
    "d": "A estratégia normalmente combina proteção comercial, crédito, infraestrutura e investimento público ou privado. Ela pode ampliar a capacidade produtiva, mas também exige produtividade e escala para evitar uma indústria permanentemente dependente de proteção.",
    "fontes": [
      "ipea_industria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Como a crise de 1929 afetou o Brasil?",
    "r": "Reduziu a demanda e os preços do café, fragilizando o modelo agroexportador e incentivando mudanças produtivas.",
    "d": "A queda das exportações reduziu divisas e renda no setor cafeeiro. Ao mesmo tempo, a dificuldade de importar e a mudança de política econômica favoreceram a produção interna de bens antes comprados no exterior.",
    "fontes": [
      "ipea_industria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Por que planos econômicos precisam considerar as causas da inflação?",
    "r": "Porque medidas inadequadas podem controlar sintomas temporariamente sem corrigir desequilíbrios estruturais.",
    "d": "A inflação pode resultar de excesso de demanda, aumento de custos, desorganização fiscal, choques cambiais ou mecanismos de indexação. Um plano eficaz precisa identificar quais canais estão ativos e coordenar instrumentos monetários, fiscais e institucionais.",
    "fontes": [
      "ipea_real",
      "bcb_monetaria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "O que foi a inércia inflacionária?",
    "r": "A continuidade da inflação por reajustes automáticos de preços, salários e contratos baseados na inflação passada.",
    "d": "Quando contratos são reajustados pela inflação passada, a alta de preços é incorporada às decisões futuras. Mesmo após a redução do choque inicial, a indexação mantém o processo e dificulta a estabilização.",
    "fontes": [
      "ipea_real",
      "bcb_monetaria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Qual era o objetivo dos congelamentos de preços?",
    "r": "Interromper rapidamente a escalada inflacionária impedindo reajustes imediatos.",
    "d": "O congelamento buscava funcionar como um choque nominal, impedindo que empresas e trabalhadores continuassem remarcando preços e salários. Sem ajuste fiscal, monetário e de expectativas, porém, o efeito tende a ser temporário.",
    "fontes": [
      "ipea_real",
      "bcb_monetaria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Qual risco acompanha o congelamento de preços?",
    "r": "Desabastecimento, mercado paralelo e perda de rentabilidade quando preços ficam abaixo dos custos.",
    "d": "Se o preço fixado não cobre custos ou fica abaixo do equilíbrio de mercado, produtores reduzem a oferta. O resultado pode ser escassez, queda de qualidade, filas, ágio e transações informais.",
    "fontes": [
      "ipea_real",
      "bcb_monetaria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "O que foi a URV?",
    "r": "Uma unidade de valor estável usada como referência antes da criação do real para quebrar a inércia inflacionária.",
    "d": "A URV funcionou como unidade de conta estável enquanto pagamentos ainda eram feitos em cruzeiros reais. Preços e contratos passaram a ser expressos nessa referência, permitindo sincronizar valores relativos antes da conversão para o real.",
    "fontes": [
      "ipea_real",
      "bcb_monetaria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Por que o Plano Real teve uma etapa de transição?",
    "r": "Para alinhar preços e contratos gradualmente antes da nova moeda, reduzindo choques e indexação.",
    "d": "A transição separou a reorganização dos preços da troca definitiva da moeda. Isso ajudou a reduzir a indexação, alinhar contratos e construir confiança sem depender exclusivamente de um congelamento abrupto.",
    "fontes": [
      "ipea_real",
      "bcb_monetaria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Como o equilíbrio fiscal ajuda no controle da inflação?",
    "r": "Reduz a necessidade de financiamento excessivo do governo e melhora a confiança na política econômica.",
    "d": "Contas públicas mais previsíveis reduzem a percepção de que déficits serão financiados de forma inflacionária e diminuem pressões sobre juros e expectativas. O efeito depende também da qualidade do gasto, da dívida e da credibilidade das instituições.",
    "fontes": [
      "ipea_real",
      "bcb_monetaria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "O que significa conjuntura econômica?",
    "r": "O conjunto de condições econômicas de determinado período, como inflação, emprego, produção, juros e câmbio.",
    "d": "A conjuntura é um retrato do momento econômico e muda ao longo do ciclo. Sua análise combina indicadores correntes, expectativas e eventos políticos ou internacionais para avaliar riscos de curto e médio prazo.",
    "fontes": [
      "ibge_indicadores",
      "ipea_industria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Por que conhecer a história econômica ajuda na gestão financeira?",
    "r": "Permite reconhecer padrões, riscos e efeitos de políticas sobre custos, crédito, demanda e investimentos.",
    "d": "A história mostra como inflação, juros, câmbio e crises alteraram empresas e famílias em diferentes períodos. Esse repertório melhora a construção de cenários, a gestão de riscos e a escolha de políticas financeiras.",
    "fontes": [
      "ibge_indicadores",
      "ipea_industria"
    ]
  },
  {
    "aula": 1,
    "titulo": "História Econômica Brasileira",
    "q": "Como choques externos podem afetar empresas brasileiras?",
    "r": "Podem alterar câmbio, preços de insumos, crédito, exportações e confiança, exigindo ajustes financeiros.",
    "d": "O impacto ocorre por vários canais: encarecimento de importações, mudança na demanda externa, restrição de crédito e aumento da volatilidade. Empresas podem responder com hedge, diversificação de fornecedores, estoques estratégicos e revisão de preços.",
    "fontes": [
      "ibge_indicadores",
      "ipea_industria"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que a microeconomia estuda?",
    "r": "O comportamento de consumidores, empresas e mercados específicos, incluindo preços, custos, oferta e demanda.",
    "d": "Ela examina decisões tomadas sob restrições e como essas decisões interagem nos mercados. O foco inclui formação de preços, comportamento do consumidor, produção, custos, concorrência e alocação de recursos.",
    "fontes": [
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "Qual é a diferença básica entre microeconomia e macroeconomia?",
    "r": "A microeconomia analisa unidades individuais; a macroeconomia observa agregados da economia como um todo.",
    "d": "As duas áreas são complementares: decisões individuais formam resultados agregados, enquanto inflação, juros e desemprego influenciam consumidores e empresas. A diferença principal está no nível de análise.",
    "fontes": [
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "Quais perguntas fundamentais orientam a produção?",
    "r": "O que produzir, quanto produzir e como produzir.",
    "d": "Também é necessário decidir para quem produzir e quais recursos utilizar. Essas escolhas dependem de tecnologia, custos, preferências dos consumidores e objetivos da organização.",
    "fontes": [
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que é demanda?",
    "r": "A quantidade de um bem ou serviço que consumidores desejam e podem comprar em diferentes preços.",
    "d": "Desejo sem capacidade de pagamento não constitui demanda efetiva. A curva de demanda relaciona cada nível de preço à quantidade que os consumidores estão dispostos e aptos a adquirir, mantendo outros fatores constantes.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que é oferta?",
    "r": "A quantidade que produtores desejam e podem vender em diferentes preços.",
    "d": "A oferta depende da capacidade produtiva e da rentabilidade esperada. Custos, tecnologia, impostos, expectativas e número de empresas podem alterar quanto será colocado no mercado a cada preço.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que diz a lei da demanda?",
    "r": "Mantidos os demais fatores, preços maiores tendem a reduzir a quantidade demandada.",
    "d": "A relação inversa ocorre pelo efeito substituição e pelo efeito renda: preços maiores tornam o bem relativamente menos atraente e reduzem o poder de compra. A regra admite exceções raras e pressupõe que os demais fatores não mudem.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que diz a lei da oferta?",
    "r": "Mantidos os demais fatores, preços maiores tendem a aumentar a quantidade ofertada.",
    "d": "Preços mais altos podem aumentar a margem e tornar viável produzir unidades adicionais. A intensidade da resposta depende de capacidade, prazo, estoques e facilidade de ampliar a produção.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que é preço de equilíbrio?",
    "r": "O preço no qual a quantidade demandada é igual à quantidade ofertada.",
    "d": "No equilíbrio não existe pressão sistemática para o preço subir ou cair. Isso não significa estabilidade permanente, pois mudanças na oferta ou na demanda criam um novo ponto de equilíbrio.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que ocorre quando o preço está acima do equilíbrio?",
    "r": "Surge excesso de oferta, pressionando o preço para baixo.",
    "d": "O excedente aparece quando vendedores oferecem mais do que consumidores compram. Para reduzir estoques, empresas tendem a baixar preços, diminuir produção ou melhorar condições de venda.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que ocorre quando o preço está abaixo do equilíbrio?",
    "r": "Surge excesso de demanda, pressionando o preço para cima.",
    "d": "A escassez aparece quando consumidores desejam comprar mais do que está disponível. Filas, racionamento ou disputa entre compradores podem surgir até que preços, oferta ou demanda se ajustem.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que desloca a curva de demanda?",
    "r": "Mudanças em renda, preferências, população, expectativas e preços de bens relacionados.",
    "d": "Esses fatores alteram a demanda em todos os preços, deslocando a curva inteira. Uma mudança apenas no preço do próprio bem provoca movimento ao longo da curva, não deslocamento.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que desloca a curva de oferta?",
    "r": "Mudanças em custos, tecnologia, impostos, expectativas, número de produtores e condições naturais.",
    "d": "Uma redução de custos ou avanço tecnológico tende a deslocar a oferta para a direita; custos maiores fazem o contrário. É importante separar esses deslocamentos de uma simples variação na quantidade ofertada causada pelo preço do próprio produto.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que são bens substitutos?",
    "r": "Bens que atendem necessidades semelhantes, de modo que a alta do preço de um pode elevar a demanda do outro.",
    "d": "Exemplos comuns são café e chá ou marcas concorrentes de um mesmo produto. Quanto mais fácil a substituição, maior tende a ser a sensibilidade do consumidor ao preço.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que são bens complementares?",
    "r": "Bens consumidos em conjunto, de modo que a alta do preço de um pode reduzir a demanda do outro.",
    "d": "Automóvel e combustível são um exemplo: o encarecimento persistente de um pode reduzir o uso e a demanda do outro. A intensidade depende de quão indispensável é o consumo conjunto.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que mede a elasticidade-preço da demanda?",
    "r": "A sensibilidade da quantidade demandada a uma variação no preço.",
    "d": "Ela é calculada como variação percentual da quantidade dividida pela variação percentual do preço. O indicador ajuda a prever efeitos sobre receita, volume vendido e repasse de custos.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "Quando a demanda é considerada elástica?",
    "r": "Quando a quantidade demandada varia proporcionalmente mais do que o preço.",
    "d": "Em demanda elástica, um aumento de preço tende a reduzir a receita total porque a perda percentual de volume é maior. Bens com muitos substitutos e compras adiáveis costumam apresentar maior elasticidade.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "Quando a demanda é inelástica?",
    "r": "Quando a quantidade demandada varia proporcionalmente menos do que o preço.",
    "d": "Em demanda inelástica, o volume reage pouco e um aumento de preço pode elevar a receita total. Necessidades básicas, ausência de substitutos e pequena participação no orçamento favorecem esse comportamento.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que mede a elasticidade-renda?",
    "r": "Como a quantidade demandada muda diante de alterações na renda do consumidor.",
    "d": "Elasticidade-renda positiva indica bem normal; negativa indica bem inferior. Quando o crescimento da demanda supera proporcionalmente o aumento da renda, o bem pode ser classificado como superior ou de luxo.",
    "fontes": [
      "openstax_demand",
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "O que é custo de oportunidade?",
    "r": "O valor da melhor alternativa abandonada ao fazer uma escolha.",
    "d": "O custo relevante não é apenas o desembolso financeiro, mas o benefício que teria sido obtido com a melhor opção rejeitada. O conceito melhora decisões de investimento, uso do tempo e alocação de capital.",
    "fontes": [
      "openstax_micro"
    ]
  },
  {
    "aula": 2,
    "titulo": "Conceitos Microeconômicos",
    "q": "Por que incentivos são importantes na microeconomia?",
    "r": "Porque preços, impostos, subsídios e recompensas alteram decisões de consumidores e produtores.",
    "d": "Agentes respondem a mudanças nos benefícios e custos marginais. Um incentivo pode gerar efeitos desejados, mas também consequências não previstas, por isso deve ser avaliado junto ao comportamento real das pessoas.",
    "fontes": [
      "openstax_micro"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "Quais elementos definem uma estrutura de mercado?",
    "r": "Número de empresas e compradores, tipo de produto, barreiras à entrada e poder sobre preços.",
    "d": "Esses elementos determinam a intensidade da concorrência e o grau de liberdade estratégica das empresas. Também influenciam preços, inovação, lucros e facilidade de entrada de novos competidores.",
    "fontes": [
      "openstax_market",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "O que caracteriza a concorrência perfeita?",
    "r": "Muitos compradores e vendedores, produto homogêneo, informação ampla e livre entrada e saída.",
    "d": "É um modelo teórico de referência em que nenhuma empresa individual controla o preço. Na prática, poucos mercados cumprem integralmente todas essas condições, mas o modelo ajuda a comparar estruturas reais.",
    "fontes": [
      "openstax_market",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "Por que uma firma competitiva é tomadora de preço?",
    "r": "Porque sua produção individual é pequena diante do mercado e não consegue alterar o preço vigente.",
    "d": "Se cobrar acima do preço de mercado, os compradores migram para concorrentes com produto equivalente. A firma escolhe quanto produzir ao preço dado, considerando custos e capacidade.",
    "fontes": [
      "openstax_market",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "O que caracteriza um monopólio?",
    "r": "Um único vendedor, ausência de substitutos próximos e fortes barreiras à entrada.",
    "d": "O monopolista enfrenta a demanda do mercado e pode influenciar preço por meio da quantidade ofertada. Ainda assim, não possui poder ilimitado, pois enfrenta restrições de demanda, regulação e possíveis substitutos.",
    "fontes": [
      "cade",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "Quais podem ser barreiras à entrada?",
    "r": "Patentes, escala, controle de recursos, legislação, tecnologia, capital elevado e efeitos de rede.",
    "d": "Barreiras podem ser legais, tecnológicas, financeiras ou estratégicas. Quanto maiores forem os custos e riscos de entrada, mais protegido fica o poder das empresas já estabelecidas.",
    "fontes": [
      "openstax_market",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "O que é monopólio natural?",
    "r": "Mercado em que uma única empresa atende a demanda com custo médio menor que várias concorrentes.",
    "d": "Isso ocorre em setores com custos fixos muito altos e custo marginal relativamente baixo, como certas redes de infraestrutura. A regulação costuma buscar evitar abuso sem destruir os ganhos de escala.",
    "fontes": [
      "cade",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "O que caracteriza um oligopólio?",
    "r": "Poucas empresas dominam o mercado e suas decisões são estrategicamente interdependentes.",
    "d": "Como cada empresa representa parcela relevante do mercado, uma decisão de preço, capacidade ou publicidade afeta as demais. O resultado depende tanto da estratégia própria quanto da reação dos rivais.",
    "fontes": [
      "openstax_market",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "O que é interdependência estratégica?",
    "r": "A necessidade de prever e considerar as reações dos concorrentes antes de decidir.",
    "d": "Esse raciocínio é estudado pela teoria dos jogos. Uma ação lucrativa isoladamente pode provocar resposta competitiva que reduz o benefício esperado.",
    "fontes": [
      "openstax_market",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "O que é cartel?",
    "r": "Acordo entre empresas para coordenar preços, produção ou divisão de mercado e reduzir concorrência.",
    "d": "Cartéis podem envolver fixação de preços, divisão de clientes, limitação de produção ou fraude em licitações. São acordos anticompetitivos e, no Brasil, podem gerar sanções administrativas e criminais.",
    "fontes": [
      "cade",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "Por que cartéis são prejudiciais ao consumidor?",
    "r": "Porque podem elevar preços, reduzir oferta, limitar inovação e diminuir alternativas.",
    "d": "Além de transferir renda para os participantes, o cartel reduz eficiência e pode impedir concorrentes mais produtivos de crescer. O dano pode atingir governos e contribuintes quando ocorre em compras públicas.",
    "fontes": [
      "openstax_market",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "O que diferencia cartel de fusão?",
    "r": "No cartel as empresas permanecem separadas; na fusão elas se unem juridicamente.",
    "d": "A fusão é uma operação societária sujeita à análise concorrencial quando atende aos critérios legais. O cartel é uma coordenação clandestina entre concorrentes que deveriam decidir de forma independente.",
    "fontes": [
      "cade",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "O que caracteriza a concorrência monopolista?",
    "r": "Muitas empresas vendem produtos diferenciados e possuem algum poder de preço.",
    "d": "Cada empresa tenta diferenciar sua oferta por atributos reais ou percebidos. No longo prazo, a entrada de concorrentes tende a reduzir lucros acima do normal, embora a diferenciação permaneça.",
    "fontes": [
      "openstax_market",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "Como a diferenciação cria poder de mercado?",
    "r": "Ao reduzir a substituição perfeita e aumentar preferência, lealdade ou percepção de valor.",
    "d": "Marca, conveniência, qualidade e experiência reduzem a comparação baseada apenas em preço. Isso torna a demanda da empresa menos elástica, mas o poder é limitado pela existência de alternativas.",
    "fontes": [
      "cade",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "Qual é o papel da propaganda na concorrência monopolista?",
    "r": "Destacar diferenças, construir marca e reduzir a sensibilidade do consumidor ao preço.",
    "d": "A propaganda pode informar ou persuadir, reforçando diferenciação e reconhecimento. Seu retorno deve ser avaliado pelo efeito sobre aquisição, retenção, margem e valor da marca.",
    "fontes": [
      "openstax_market",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "O que é produto homogêneo?",
    "r": "Produto percebido como essencialmente igual ao dos concorrentes.",
    "d": "Quando compradores percebem produtos como equivalentes, a competição se concentra no preço e na eficiência. Commodities são o exemplo mais próximo, embora logística e qualidade ainda possam criar diferenças.",
    "fontes": [
      "openstax_market",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "O que é produto diferenciado?",
    "r": "Produto distinguido por marca, qualidade, design, localização, serviço ou atributos específicos.",
    "d": "A diferenciação pode ser horizontal, quando depende de preferência, ou vertical, quando existe percepção de qualidade superior. Ela permite segmentação e propostas de valor distintas.",
    "fontes": [
      "openstax_market",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "Por que a entrada de novas empresas reduz lucros extraordinários?",
    "r": "Porque aumenta a oferta e a concorrência, pressionando preços e participação de mercado.",
    "d": "Lucros elevados atraem novos participantes e estimulam expansão dos concorrentes existentes. A maior oferta e o aumento das opções reduzem margens até um nível compatível com risco e custo de capital.",
    "fontes": [
      "openstax_market",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "O que é poder de mercado?",
    "r": "Capacidade de influenciar preço, quantidade ou condições de venda sem perder todos os clientes.",
    "d": "Poder de mercado costuma ser avaliado com participação, barreiras, substituição e comportamento competitivo. Ter participação elevada não é automaticamente ilícito; o problema é o abuso desse poder.",
    "fontes": [
      "cade",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "Como a regulação pode atuar em monopólios?",
    "r": "Controlando tarifas, padrões de qualidade, acesso e práticas anticompetitivas.",
    "d": "A regulação pode definir tetos tarifários, metas de eficiência, universalização e padrões mínimos. Uma regulação mal desenhada, porém, pode desestimular investimento ou proteger ineficiências.",
    "fontes": [
      "cade",
      "cade_simples"
    ]
  },
  {
    "aula": 3,
    "titulo": "Estruturas de Mercado",
    "q": "Por que analisar a estrutura de mercado é importante para a gestão?",
    "r": "Ajuda a definir preços, investimentos, diferenciação, riscos competitivos e estratégia comercial.",
    "d": "A estrutura condiciona a estratégia possível: liderança em custos, diferenciação, nicho, cooperação ou expansão. Ela também ajuda a estimar reação dos rivais e riscos regulatórios.",
    "fontes": [
      "openstax_market",
      "cade_simples"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "O que é economia industrial?",
    "r": "Área que estuda empresas, setores, organização produtiva, concorrência, estratégia e desempenho dos mercados.",
    "d": "A economia industrial combina microeconomia, estratégia e análise institucional. Ela procura explicar por que setores apresentam diferentes níveis de concentração, inovação, produtividade e rentabilidade.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "Qual é a diferença entre empresa e indústria?",
    "r": "Empresa é uma unidade produtiva individual; indústria é o conjunto de empresas de um setor ou atividade.",
    "d": "Uma indústria pode conter empresas de tamanhos e modelos de negócio distintos. A análise setorial observa relações entre essas empresas, fornecedores, clientes e instituições.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "Onde se concentrou o início da industrialização brasileira?",
    "r": "Principalmente em São Paulo e no Rio de Janeiro.",
    "d": "São Paulo ganhou destaque pela renda do café, mercado consumidor, ferrovias, imigração e disponibilidade de capital. Rio de Janeiro também concentrou infraestrutura, administração e atividades manufatureiras.",
    "fontes": [
      "ipea_industria",
      "ibge_industria"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "Como imigrantes contribuíram para as primeiras fábricas?",
    "r": "Trouxeram conhecimentos técnicos e ofícios ligados a tecidos, calçados e utensílios.",
    "d": "Além de mão de obra, muitos imigrantes trouxeram conhecimento técnico, redes comerciais e experiência empresarial. Essas competências favoreceram oficinas e pequenas fábricas que posteriormente se expandiram.",
    "fontes": [
      "ipea_industria",
      "ibge_industria"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "Qual foi a importância da Era Vargas para a indústria?",
    "r": "Fortaleceu a política de substituição de importações e a formação de setores industriais nacionais.",
    "d": "O período ampliou a intervenção estatal, a infraestrutura e a indústria de base. Empresas como a Companhia Siderúrgica Nacional simbolizam a tentativa de reduzir dependências e integrar a produção nacional.",
    "fontes": [
      "ipea_industria",
      "ibge_industria"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "O que são economias de escala?",
    "r": "Queda do custo médio à medida que a produção aumenta e custos são distribuídos por mais unidades.",
    "d": "A escala surge quando custos fixos são diluídos, trabalhadores se especializam e equipamentos são utilizados com maior eficiência. Ela possui limites: complexidade e coordenação podem elevar custos em empresas grandes demais.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "O que são economias de escopo?",
    "r": "Reduções de custo obtidas ao produzir diferentes produtos usando recursos, processos ou canais compartilhados.",
    "d": "Uma empresa pode compartilhar marca, logística, tecnologia, equipe comercial ou matéria-prima entre linhas diferentes. O ganho ocorre quando produzir em conjunto custa menos do que produzir separadamente.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "O que é produtividade?",
    "r": "Relação entre a quantidade produzida e os recursos utilizados.",
    "d": "Produtividade não é simplesmente trabalhar mais, mas produzir mais valor com os mesmos recursos. Processos, capital, capacitação, gestão e tecnologia são determinantes importantes.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "Como tecnologia pode elevar competitividade?",
    "r": "Reduz custos, melhora qualidade, aumenta velocidade, precisão e capacidade de inovação.",
    "d": "A tecnologia pode automatizar tarefas, reduzir desperdícios e gerar dados para decisão. O ganho competitivo depende de integração com pessoas, processos e estratégia, não apenas da compra de equipamentos.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "Por que infraestrutura afeta a indústria?",
    "r": "Transporte, energia e comunicação deficientes elevam custos e reduzem eficiência e alcance de mercado.",
    "d": "Logística precária aumenta prazos e estoques; energia instável provoca paradas; conectividade limitada reduz coordenação. Esses custos sistêmicos afetam localização, preço final e capacidade de competir internacionalmente.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "O que é capacidade instalada?",
    "r": "O volume máximo que uma unidade produtiva pode produzir em condições normais.",
    "d": "A capacidade é estimada considerando máquinas, turnos, gargalos, manutenção e condições operacionais. Ela serve para planejar vendas, investimentos e necessidades de capital de giro.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "O que significa ociosidade industrial?",
    "r": "Uso abaixo da capacidade instalada, com máquinas, instalações e mão de obra parcialmente paradas.",
    "d": "Ociosidade aumenta o custo fixo por unidade e pode sinalizar queda de demanda ou excesso de investimento. Alguma folga, contudo, pode ser necessária para manutenção e picos de produção.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "Por que investimento de longo prazo é essencial?",
    "r": "Permite modernização, expansão, pesquisa, capacitação e ganhos sustentáveis de produtividade.",
    "d": "Investimentos industriais têm maturação longa e frequentemente são irreversíveis. Por isso, exigem projeções de demanda, análise de risco, financiamento adequado e acompanhamento de retorno.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "O que é vantagem competitiva?",
    "r": "Condição que permite à empresa criar valor superior ou operar com custo menor que concorrentes.",
    "d": "A vantagem precisa ser valiosa, difícil de imitar e sustentada por capacidades organizacionais. Pode vir de custo, tecnologia, marca, dados, distribuição, serviço ou combinação desses fatores.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "Como inovação de processo difere de inovação de produto?",
    "r": "A de processo melhora como se produz; a de produto cria ou aperfeiçoa o que é oferecido.",
    "d": "Uma nova máquina ou método pode reduzir tempo e defeitos sem alterar o produto final. Já a inovação de produto muda funcionalidades ou benefícios percebidos e pode abrir novos mercados.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "O que é cadeia produtiva?",
    "r": "Conjunto de etapas e agentes que transformam insumos até o produto chegar ao consumidor.",
    "d": "A cadeia inclui fornecedores, transformação, logística, distribuição e pós-venda. Mapear dependências e margens em cada etapa ajuda a identificar riscos, gargalos e oportunidades de integração.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "Como a concorrência externa pode estimular a indústria nacional?",
    "r": "Pressiona por produtividade, qualidade, inovação e redução de custos.",
    "d": "A competição externa revela referências de preço, qualidade e produtividade. Entretanto, a adaptação exige acesso a tecnologia, financiamento, infraestrutura e competências gerenciais.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "Qual risco existe na dependência de insumos importados?",
    "r": "Exposição a câmbio, frete, crises internacionais, atrasos e interrupções de fornecimento.",
    "d": "Variações cambiais e interrupções logísticas podem elevar custos ou parar linhas inteiras. A mitigação inclui fornecedores alternativos, contratos, nacionalização e estoques de segurança calculados.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "Por que qualificação profissional é relevante para a indústria?",
    "r": "Permite operar tecnologias, melhorar processos, reduzir erros e aumentar produtividade.",
    "d": "Tecnologias avançadas exigem capacidade de operação, manutenção e análise. Treinamento reduz falhas, melhora segurança e aumenta o retorno dos investimentos em automação.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 4,
    "titulo": "Economia Industrial e Competitiva",
    "q": "Como a gestão financeira apoia a competitividade industrial?",
    "r": "Controla custos, margens, capital de giro, investimentos, riscos e retorno de projetos.",
    "d": "A gestão financeira transforma estratégia industrial em orçamento, fluxo de caixa e critérios de investimento. Também mede custo total, ponto de equilíbrio, rentabilidade por produto e exposição a riscos.",
    "fontes": [
      "ibge_industria",
      "ibge_pia"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "Qual é o papel econômico do setor público?",
    "r": "Fornecer bens públicos, regular mercados, redistribuir renda, estabilizar a economia e corrigir falhas de mercado.",
    "d": "Além de produzir serviços, o Estado define regras e redistribui recursos por tributos e transferências. A intervenção deve comparar benefícios sociais, custos fiscais e possíveis falhas do próprio governo.",
    "fontes": [
      "bcb_monetaria",
      "openstax_macro"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "O que é política fiscal?",
    "r": "Uso de gastos públicos, tributos e endividamento para influenciar atividade econômica e contas públicas.",
    "d": "A política fiscal afeta a demanda agregada, a distribuição de renda e a trajetória da dívida. Seus efeitos dependem do momento do ciclo, da composição do gasto e de como as medidas são financiadas.",
    "fontes": [
      "tesouro_fiscal",
      "openstax_macro"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "O que é política monetária?",
    "r": "Ações sobre moeda, crédito e juros para controlar inflação e atividade econômica.",
    "d": "No Brasil, a Selic é o principal instrumento operacional da política monetária. Mudanças nos juros se transmitem ao crédito, câmbio, preços de ativos, expectativas, consumo e investimento.",
    "fontes": [
      "bcb_monetaria",
      "bcb_transmissao"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "O que é política cambial?",
    "r": "Medidas relacionadas ao valor da moeda nacional e ao funcionamento do mercado de câmbio.",
    "d": "O regime cambial pode ser fixo, flutuante ou administrado. Intervenções podem suavizar disfunções, mas não eliminam permanentemente forças de oferta e demanda por moeda estrangeira.",
    "fontes": [
      "bcb_monetaria",
      "openstax_macro"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "O que é política de rendas?",
    "r": "Medidas que afetam salários, preços e outras rendas para influenciar inflação e distribuição.",
    "d": "Ela pode incluir regras salariais, reajustes administrados e acordos de preços. Seu uso exige cautela porque controles artificiais podem gerar distorções e não substituem políticas fiscal e monetária consistentes.",
    "fontes": [
      "bcb_monetaria",
      "openstax_macro"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "Como uma alta da Selic pode afetar empresas?",
    "r": "Eleva o custo do crédito, reduz consumo e investimento e pode exigir revisão de estratégias.",
    "d": "O custo de capital e das dívidas indexadas tende a aumentar, enquanto projetos com retorno baixo perdem atratividade. Empresas também podem enfrentar queda de vendas financiadas e maior inadimplência.",
    "fontes": [
      "bcb_monetaria",
      "bcb_transmissao"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "O que caracteriza uma política fiscal expansionista?",
    "r": "Aumento de gastos ou redução de tributos para estimular demanda, produção e emprego.",
    "d": "O estímulo pode elevar produção quando há capacidade ociosa, mas também pressionar inflação, juros ou dívida. O multiplicador fiscal varia conforme confiança, abertura econômica e reação da política monetária.",
    "fontes": [
      "tesouro_fiscal",
      "openstax_macro"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "O que caracteriza uma política fiscal contracionista?",
    "r": "Redução de gastos ou aumento de tributos para conter demanda e melhorar o resultado fiscal.",
    "d": "A contração pode ajudar a estabilizar dívida e inflação, porém reduz demanda no curto prazo. O desenho deve considerar efeitos distributivos e evitar cortes que prejudiquem capacidade produtiva futura.",
    "fontes": [
      "tesouro_fiscal",
      "openstax_macro"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "Como a política monetária expansionista atua?",
    "r": "Reduz juros ou amplia liquidez e crédito para estimular consumo e investimento.",
    "d": "Crédito mais barato e maior liquidez tendem a elevar demanda agregada. Se a economia já estiver perto do limite de capacidade, o efeito adicional pode aparecer mais em preços do que em produção.",
    "fontes": [
      "bcb_monetaria",
      "bcb_transmissao"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "Como a política monetária contracionista atua?",
    "r": "Eleva juros ou restringe moeda e crédito para reduzir pressões inflacionárias.",
    "d": "A restrição monetária busca moderar a demanda e ancorar expectativas. O efeito não é imediato: os canais de transmissão operam com defasagens e atingem setores de forma desigual.",
    "fontes": [
      "bcb_monetaria",
      "bcb_transmissao"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "Como a desvalorização cambial afeta importações?",
    "r": "Torna produtos e insumos importados mais caros em moeda nacional.",
    "d": "Empresas importadoras enfrentam aumento do custo em reais, inclusive de máquinas e componentes. O repasse ao preço depende de contratos, concorrência, estoques e margem disponível.",
    "fontes": [
      "bcb_monetaria",
      "openstax_macro"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "Como a desvalorização cambial pode favorecer exportações?",
    "r": "Pode tornar produtos nacionais mais baratos para compradores estrangeiros e elevar receitas em reais.",
    "d": "Exportadores recebem moeda estrangeira e podem obter mais reais por unidade vendida. O ganho não é automático se houver insumos importados, contratos fixos ou baixa capacidade de aumentar produção.",
    "fontes": [
      "bcb_monetaria",
      "openstax_macro"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "O que é falha de mercado?",
    "r": "Situação em que o mercado não aloca recursos de forma eficiente ou socialmente desejável.",
    "d": "Exemplos incluem poder de mercado, externalidades, bens públicos e informação assimétrica. A correção adequada pode envolver regulação, tributos, subsídios, provisão pública ou melhor definição de direitos.",
    "fontes": [
      "openstax_micro",
      "cade"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "O que são externalidades?",
    "r": "Efeitos de uma atividade sobre terceiros que não são totalmente refletidos nos preços.",
    "d": "Poluição é uma externalidade negativa; vacinação pode gerar externalidade positiva. Como o agente não considera integralmente o efeito social, a quantidade produzida ou consumida pode ficar distante do nível eficiente.",
    "fontes": [
      "openstax_micro",
      "cade"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "O que são bens públicos?",
    "r": "Bens de uso coletivo, geralmente não rivais e de difícil exclusão, como defesa e iluminação pública.",
    "d": "Não rivalidade significa que o uso por uma pessoa não reduz o uso por outra; não exclusão torna difícil impedir quem não pagou. Essas características criam o problema do carona e dificultam financiamento puramente privado.",
    "fontes": [
      "openstax_micro",
      "cade"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "Por que existe regulação econômica?",
    "r": "Para proteger consumidores, limitar abusos, garantir padrões e corrigir falhas de mercado.",
    "d": "A regulação pode definir padrões, exigir transparência e preservar concorrência. Para ser eficaz, precisa de objetivos claros, fiscalização, proporcionalidade e avaliação dos efeitos sobre inovação e investimento.",
    "fontes": [
      "openstax_micro",
      "cade"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "Como tributos afetam decisões empresariais?",
    "r": "Alteram preços, custos, fluxo de caixa, investimento, localização e competitividade.",
    "d": "Além da carga nominal, importam base, créditos, cumulatividade, prazo e custo de conformidade. Alterações tributárias podem mudar preços relativos e tornar projetos antes rentáveis economicamente inviáveis.",
    "fontes": [
      "tesouro_fiscal",
      "openstax_macro"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "O que é déficit público?",
    "r": "Situação em que as despesas do governo superam suas receitas em determinado período.",
    "d": "É importante distinguir déficit primário de déficit nominal, que inclui juros. Déficits recorrentes podem elevar dívida e custo de financiamento, mas seu impacto depende do ciclo e da credibilidade fiscal.",
    "fontes": [
      "tesouro_fiscal",
      "openstax_macro"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "Por que previsibilidade regulatória é importante?",
    "r": "Reduz incerteza e melhora o planejamento de investimentos e contratos.",
    "d": "Regras estáveis reduzem o prêmio de risco e permitem projeções de longo prazo. Mudanças frequentes ou retroativas elevam custo jurídico, adiam investimentos e encurtam horizontes de planejamento.",
    "fontes": [
      "bcb_monetaria",
      "openstax_macro"
    ]
  },
  {
    "aula": 5,
    "titulo": "Política Econômica",
    "q": "Como políticas econômicas influenciam a gestão financeira?",
    "r": "Afetam juros, inflação, câmbio, demanda, custos, crédito e retorno dos investimentos.",
    "d": "A gestão deve traduzir cenários macroeconômicos em premissas de receita, custo e financiamento. Sensibilidades e testes de estresse ajudam a medir quanto o caixa e o valor dos projetos mudam em cada cenário.",
    "fontes": [
      "bcb_monetaria",
      "openstax_macro"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que são indicadores econômicos?",
    "r": "Medidas que sintetizam aspectos da economia e ajudam a avaliar passado, presente e tendências.",
    "d": "Um indicador simplifica uma dimensão complexa e precisa ser interpretado com metodologia, período e base de comparação. Nenhum dado isolado descreve toda a economia.",
    "fontes": [
      "ibge_indicadores",
      "openstax_macro"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "Por que empresas acompanham indicadores externos?",
    "r": "Para ajustar preços, estoques, crédito, investimentos, metas e estratégias diante do ambiente econômico.",
    "d": "Indicadores ajudam a antecipar demanda e custos e a comparar o desempenho da empresa com o ambiente. A utilidade aumenta quando são ligados a gatilhos de decisão previamente definidos.",
    "fontes": [
      "ibge_indicadores",
      "openstax_macro"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que mede o PIB?",
    "r": "O valor dos bens e serviços finais produzidos em uma economia durante determinado período.",
    "d": "O PIB pode ser calculado pelas óticas da produção, renda ou despesa, que devem ser consistentes entre si. Apenas bens e serviços finais entram diretamente para evitar dupla contagem.",
    "fontes": [
      "ibge_indicadores",
      "openstax_macro"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "Qual é a diferença entre PIB nominal e PIB real?",
    "r": "O nominal usa preços correntes; o real desconta o efeito da inflação.",
    "d": "O PIB real usa preços de um período de referência ou índices encadeados para medir volume. Comparar apenas valores nominais pode confundir crescimento de produção com aumento de preços.",
    "fontes": [
      "ibge_indicadores",
      "openstax_macro"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que o PIB per capita representa?",
    "r": "O PIB dividido pela população, usado como aproximação da produção ou renda média por habitante.",
    "d": "É uma média e não mostra distribuição de renda, trabalho não remunerado, qualidade ambiental ou bem-estar. Serve para comparação agregada, mas deve ser combinado com outros indicadores sociais.",
    "fontes": [
      "ibge_indicadores",
      "openstax_macro"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que mede o IPCA?",
    "r": "A variação média de preços de uma cesta de consumo das famílias abrangidas pelo índice.",
    "d": "O IPCA acompanha preços pagos por famílias dentro da população e áreas definidas pela metodologia do IBGE. Pesos diferentes na cesta fazem com que a inflação percebida por cada pessoa possa divergir do índice médio.",
    "fontes": [
      "ibge_indicadores",
      "openstax_macro"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "Por que inflação alta dificulta o planejamento?",
    "r": "Aumenta incerteza sobre custos, preços, margens, contratos e poder de compra.",
    "d": "A volatilidade encurta contratos e dificulta separar aumento real de aumento nominal. Empresas precisam atualizar premissas, proteger capital de giro e negociar mecanismos de reajuste coerentes.",
    "fontes": [
      "openstax_macro",
      "ibge_indicadores"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que é taxa de desemprego?",
    "r": "Proporção da força de trabalho que procura emprego e não encontra.",
    "d": "A taxa considera pessoas desocupadas que estão disponíveis e procurando trabalho dentro da força de trabalho. Quem não busca emprego não entra automaticamente no numerador, por isso outros indicadores também são necessários.",
    "fontes": [
      "ibge_pnad",
      "ibge_indicadores"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que a taxa Selic sinaliza?",
    "r": "O nível básico de juros da economia e a orientação da política monetária.",
    "d": "A Selic influencia financiamento, aplicações e taxa de desconto, mas as taxas finais também incorporam risco, prazo, custos e concorrência bancária. Ela é um sinal central das condições monetárias.",
    "fontes": [
      "bcb_selic",
      "bcb_transmissao"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "Como juros altos afetam o valor presente de projetos?",
    "r": "Aumentam a taxa de desconto e tendem a reduzir o valor presente dos fluxos futuros.",
    "d": "Fluxos mais distantes perdem mais valor quando a taxa de desconto sobe. Isso afeta especialmente projetos longos e empresas cujo valor depende de resultados esperados muitos anos à frente.",
    "fontes": [
      "bcb_selic",
      "bcb_transmissao"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que é taxa de câmbio?",
    "r": "Preço de uma moeda em relação a outra.",
    "d": "A cotação pode ser apresentada como reais por unidade de moeda estrangeira. Ela varia com comércio, fluxos financeiros, juros, risco e expectativas, afetando preços e competitividade.",
    "fontes": [
      "openstax_macro",
      "ibge_indicadores"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que é balança comercial?",
    "r": "Diferença entre exportações e importações de bens.",
    "d": "O saldo de bens é apenas uma parte das transações externas; serviços, rendas e transferências aparecem em outras contas. Mesmo assim, a balança comercial é relevante para geração de divisas.",
    "fontes": [
      "openstax_macro",
      "ibge_indicadores"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que significa superávit comercial?",
    "r": "Exportações superiores às importações.",
    "d": "O superávit gera entrada líquida de divisas pelo comércio de bens naquele período. Ele pode refletir exportações fortes, importações fracas ou combinação dos dois, portanto exige análise do contexto.",
    "fontes": [
      "openstax_macro",
      "ibge_indicadores"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que significa déficit comercial?",
    "r": "Importações superiores às exportações.",
    "d": "O déficit não é necessariamente negativo: pode acompanhar investimento e crescimento das importações. O risco aumenta quando é persistente e não existe financiamento externo sustentável.",
    "fontes": [
      "openstax_macro",
      "ibge_indicadores"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que é rating soberano?",
    "r": "Avaliação da capacidade e disposição de um país pagar suas obrigações.",
    "d": "Agências analisam instituições, crescimento, dívida, resultado fiscal, reservas e riscos políticos. O rating resume risco de crédito, mas não elimina a necessidade de análise própria.",
    "fontes": [
      "openstax_macro",
      "ibge_indicadores"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "Como um rebaixamento de rating pode afetar empresas?",
    "r": "Pode elevar juros, reduzir investimentos e encarecer captação externa e interna.",
    "d": "O rebaixamento pode elevar o prêmio exigido de títulos públicos e privados. Empresas sofrem por comparação de risco, custo bancário, câmbio e menor disponibilidade de capital internacional.",
    "fontes": [
      "openstax_macro",
      "ibge_indicadores"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que são indicadores antecedentes?",
    "r": "Indicadores que costumam mudar antes da atividade econômica e ajudam a antecipar tendências.",
    "d": "Exemplos incluem expectativas, novos pedidos e condições financeiras. Eles não preveem perfeitamente o futuro, mas podem sinalizar mudança antes de dados de produção e emprego.",
    "fontes": [
      "ibge_indicadores",
      "openstax_macro"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que são indicadores coincidentes?",
    "r": "Indicadores que se movem aproximadamente junto com a atividade econômica atual.",
    "d": "Produção, vendas e renda corrente costumam acompanhar o ciclo. Eles ajudam a confirmar o estado atual, embora revisões estatísticas possam alterar a leitura inicial.",
    "fontes": [
      "ibge_indicadores",
      "openstax_macro"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "O que são indicadores defasados?",
    "r": "Indicadores que confirmam movimentos depois que mudanças econômicas já ocorreram.",
    "d": "Desemprego e inadimplência podem reagir depois da produção porque contratos e decisões demoram a se ajustar. Esses indicadores são úteis para confirmar a intensidade e persistência de uma mudança.",
    "fontes": [
      "ibge_indicadores",
      "openstax_macro"
    ]
  },
  {
    "aula": 6,
    "titulo": "Conceitos Macroeconômicos",
    "q": "Como combinar indicadores melhora decisões?",
    "r": "Reduz o risco de interpretar um único dado fora de contexto e oferece visão mais completa do cenário.",
    "d": "A combinação deve considerar relações causais, defasagens e possíveis sinais contraditórios. Painéis com indicadores antecedentes, coincidentes e defasados reduzem decisões baseadas em ruído.",
    "fontes": [
      "ibge_indicadores",
      "openstax_macro"
    ]
  }
];

const flashcardSources = {
  "openstax_intro": {
    "title": "OpenStax — Principles of Economics 3e",
    "url": "https://openstax.org/books/principles-economics-3e/pages/1-introduction"
  },
  "openstax_demand": {
    "title": "OpenStax — Demand, Supply and Equilibrium",
    "url": "https://openstax.org/books/principles-economics-3e/pages/3-1-demand-supply-and-equilibrium-in-markets-for-goods-and-services"
  },
  "openstax_micro": {
    "title": "OpenStax — Principles of Microeconomics 3e",
    "url": "https://openstax.org/books/principles-microeconomics-3e/pages/index"
  },
  "openstax_market": {
    "title": "OpenStax — Monopolistic Competition and Oligopoly",
    "url": "https://openstax.org/books/principles-microeconomics-3e/pages/10-introduction-to-monopolistic-competition-and-oligopoly"
  },
  "cade": {
    "title": "CADE — Defesa da concorrência",
    "url": "https://www.gov.br/cade/pt-br/acesso-a-informacao/perguntas-frequentes/perguntas-sobre-defesa-da-concorrencia"
  },
  "cade_simples": {
    "title": "CADE Simples — conceitos concorrenciais",
    "url": "https://www.gov.br/cade/pt-br/centrais-de-conteudo/cade-simples"
  },
  "ipea_real": {
    "title": "Ipea — Plano Real e a estabilização da inflação",
    "url": "https://www.ipea.gov.br/desafios/index.php?Itemid=34&catid=29&id=3055&option=com_content&view=article"
  },
  "ipea_industria": {
    "title": "Ipea — Substituição de importações e industrialização",
    "url": "https://repositorio.ipea.gov.br/bitstreams/29ff0613-9bb8-44d1-ba33-41deddb32099/download"
  },
  "ibge_industria": {
    "title": "IBGE — Indústria e Construção",
    "url": "https://www.ibge.gov.br/estatisticas/economicas/industria.html"
  },
  "ibge_pia": {
    "title": "IBGE — Pesquisa Industrial Anual",
    "url": "https://www.ibge.gov.br/estatisticas/economicas/industria/9042-pesquisa-industrial-anual.html"
  },
  "bcb_monetaria": {
    "title": "Banco Central — Política monetária",
    "url": "https://www.bcb.gov.br/controleinflacao"
  },
  "bcb_transmissao": {
    "title": "Banco Central — Transmissão da política monetária",
    "url": "https://www.bcb.gov.br/controleinflacao/transmissaopoliticamonetaria"
  },
  "bcb_selic": {
    "title": "Banco Central — Taxa Selic",
    "url": "https://www.bcb.gov.br/controleinflacao/taxaselic"
  },
  "tesouro_fiscal": {
    "title": "Tesouro Nacional — Política fiscal",
    "url": "https://www.gov.br/tesouronacional/pt-br/estatisticas-fiscais-e-planejamento/sobre-politica-fiscal"
  },
  "ibge_indicadores": {
    "title": "IBGE — Painel de Indicadores",
    "url": "https://www.ibge.gov.br/indicadores"
  },
  "ibge_pnad": {
    "title": "IBGE — PNAD Contínua",
    "url": "https://www.ibge.gov.br/estatisticas/sociais/trabalho/17270-pnad-continua.html"
  },
  "openstax_macro": {
    "title": "OpenStax — Principles of Macroeconomics 3e",
    "url": "https://openstax.org/books/principles-macroeconomics-3e/pages/index"
  }
};

const flashcardsModal = document.getElementById('flashcards-modal');
const openFlashcardsButton = document.getElementById('open-flashcards');
const closeFlashcardsButton = document.getElementById('close-flashcards');
const flashcardElement = document.getElementById('flashcard');
const flashcardQuestion = document.getElementById('flashcard-question');
const flashcardAnswer = document.getElementById('flashcard-answer');
const flashcardDetail = document.getElementById('flashcard-detail');
const flashcardSourcesFooter = document.getElementById('flashcard-sources');
const flashcardCounter = document.getElementById('flashcard-counter');
const flashcardAulaLabel = document.getElementById('flashcard-aula-label');
const flashcardAulaSelect = document.getElementById('flashcard-aula');
const previousFlashcardButton = document.getElementById('previous-flashcard');
const nextFlashcardButton = document.getElementById('next-flashcard');
const flipFlashcardButton = document.getElementById('flip-flashcard');
const shuffleFlashcardsButton = document.getElementById('shuffle-flashcards');
let activeFlashcards = [...flashcardsData];
let flashcardIndex = 0;

function renderFlashcard() {
  const item = activeFlashcards[flashcardIndex];
  if (!item) return;
  flashcardElement.classList.remove('is-flipped');
  flashcardQuestion.textContent = item.q;
  flashcardAnswer.textContent = item.r;
  flashcardDetail.textContent = item.d || '';
  flashcardSourcesFooter.replaceChildren();
  const sourceLabel = document.createElement('span');
  sourceLabel.textContent = 'Fontes complementares:';
  flashcardSourcesFooter.appendChild(sourceLabel);
  (item.fontes || []).forEach((sourceId, sourceIndex) => {
    const source = flashcardSources[sourceId];
    if (!source) return;
    const link = document.createElement('a');
    link.href = source.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = source.title;
    flashcardSourcesFooter.appendChild(link);
    if (sourceIndex < item.fontes.length - 1) {
      flashcardSourcesFooter.appendChild(document.createTextNode(' · '));
    }
  });
  flashcardCounter.textContent = `${flashcardIndex + 1} de ${activeFlashcards.length}`;
  flashcardAulaLabel.textContent = item.titulo;
  flipFlashcardButton.textContent = 'Ver resposta';
  if (typeof flashcardAudioEnabled !== 'undefined' && flashcardAudioEnabled) {
    speakFlashcardQuestion();
  }
}

function toggleFlashcard() {
  const flipped = flashcardElement.classList.toggle('is-flipped');
  flipFlashcardButton.textContent = flipped ? 'Ver pergunta' : 'Ver resposta';
  if (typeof flashcardAudioEnabled !== 'undefined' && flashcardAudioEnabled) {
    speakText(flipped ? `Resposta. ${activeFlashcards[flashcardIndex].r} ${activeFlashcards[flashcardIndex].d || ''}` : `Pergunta. ${activeFlashcards[flashcardIndex].q}`);
  }
}

function moveFlashcard(direction) {
  flashcardIndex = (flashcardIndex + direction + activeFlashcards.length) % activeFlashcards.length;
  renderFlashcard();
}

function openFlashcards() {
  flashcardsModal.hidden = false;
  document.body.classList.add('flashcards-open');
  renderFlashcard();
  closeFlashcardsButton.focus();
}

function closeFlashcards() {
  flashcardsModal.hidden = true;
  stopSpeechAndRecognition();
  document.body.classList.remove('flashcards-open');
  openFlashcardsButton.focus();
}

openFlashcardsButton?.addEventListener('click', openFlashcards);
closeFlashcardsButton?.addEventListener('click', closeFlashcards);
flashcardElement?.addEventListener('click', event => {
  if (event.target.closest('.flashcard-sources a')) return;
  toggleFlashcard();
});
flashcardElement?.addEventListener('keydown', event => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  if (event.target.closest('.flashcard-sources a')) return;
  event.preventDefault();
  toggleFlashcard();
});
flipFlashcardButton?.addEventListener('click', toggleFlashcard);
previousFlashcardButton?.addEventListener('click', () => moveFlashcard(-1));
nextFlashcardButton?.addEventListener('click', () => moveFlashcard(1));
flashcardAulaSelect?.addEventListener('change', () => {
  const aula = flashcardAulaSelect.value;
  activeFlashcards = aula === 'all' ? [...flashcardsData] : flashcardsData.filter(item => String(item.aula) === aula);
  flashcardIndex = 0;
  renderFlashcard();
});
shuffleFlashcardsButton?.addEventListener('click', () => {
  for (let i = activeFlashcards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [activeFlashcards[i], activeFlashcards[j]] = [activeFlashcards[j], activeFlashcards[i]];
  }
  flashcardIndex = 0;
  renderFlashcard();
  notifyApp('Flashcards embaralhados.');
});
flashcardsModal?.addEventListener('click', event => {
  if (event.target === flashcardsModal) closeFlashcards();
});
document.addEventListener('keydown', event => {
  if (!flashcardsModal || flashcardsModal.hidden) return;
  if (event.key === 'Escape') closeFlashcards();
  if (event.key === 'ArrowLeft') moveFlashcard(-1);
  if (event.key === 'ArrowRight') moveFlashcard(1);
  if (event.key === ' ' && !['SELECT', 'BUTTON'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    toggleFlashcard();
  }
});


// ===== MODO ÁUDIO: leitura automática e respostas por voz =====
// Compatibilidade: Chrome/Edge desktop e Android. Em navegadores sem
// SpeechRecognition (principalmente iOS/Safari), o PWA usa botões A–D.
const quizAudioToggle = document.getElementById('quiz-audio-toggle');
const flashcardAudioToggle = document.getElementById('flashcard-audio-toggle');
const audioStatus = document.getElementById('audio-status');
const audioStatusText = document.getElementById('audio-status-text');
const audioCountdown = document.getElementById('audio-countdown');
const enableMicrophoneButton = document.getElementById('enable-microphone');
const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition || null;

let buttonAnswerFallbackEnabled = false;
let quizAudioEnabled = false;
let flashcardAudioEnabled = false;
let audioQuestionIndex = 0;
let recognition = null;
let recognitionExpected = false;
let responseTimer = null;
let countdownTimer = null;
let recognitionRestartTimer = null;
let recognitionStartTimer = null;
let audioSessionId = 0;
let microphoneAuthorized = false;
let microphoneDenied = false;
let permissionRequestInProgress = false;
// Evita recursão/duplicidade ao registrar a mesma resposta (voz e toque).
let processingChoice = false;

// Uma recusa não pode ficar gravada para sempre: no Android o usuário pode
// liberar o microfone depois, nas configurações do PWA.
localStorage.removeItem('sss-microphone-denied');

function mostrarAviso(message) {
  notifyApp(message);
  console.info(message);
}

function ativarModoRespostaPorBotoes(message = 'Resposta por voz indisponível. Use os botões A, B, C ou D.') {
  buttonAnswerFallbackEnabled = true;
  document.body.classList.add('voice-fallback-buttons');
  quizForm?.setAttribute('data-answer-mode', 'buttons');
  if (audioStatus && audioStatusText) {
    audioStatus.hidden = false;
    audioStatusText.textContent = message;
  }
  if (enableMicrophoneButton) {
    enableMicrophoneButton.hidden = !(SpeechRecognitionAPI && navigator.mediaDevices?.getUserMedia && window.isSecureContext);
    enableMicrophoneButton.textContent = '🎙 Tentar permitir microfone';
  }
}

function setAudioStatus(message, seconds = null) {
  if (!audioStatus) return;
  audioStatus.hidden = false;
  if (audioStatusText) audioStatusText.textContent = message;
  if (audioCountdown) audioCountdown.textContent = seconds === null ? '' : `${seconds}s`;
}

function showMicrophoneButton(message = 'Toque em “Permitir microfone” para responder por voz.') {
  setAudioStatus(message);
  if (enableMicrophoneButton) enableMicrophoneButton.hidden = false;
}

function hideMicrophoneButton() {
  if (enableMicrophoneButton) enableMicrophoneButton.hidden = true;
}

async function queryMicrophonePermission() {
  if (!navigator.permissions?.query) return 'unknown';
  try {
    const result = await navigator.permissions.query({ name: 'microphone' });
    return result.state;
  } catch (_) {
    return 'unknown';
  }
}

async function solicitarPermissaoMicrofone() {
  if (!SpeechRecognitionAPI) {
    ativarModoRespostaPorBotoes('Este celular não oferece reconhecimento de voz. Responda tocando em A, B, C ou D.');
    mostrarAviso('Reconhecimento por voz indisponível neste navegador.');
    return false;
  }
  if (!navigator.mediaDevices?.getUserMedia) {
    ativarModoRespostaPorBotoes('Não foi possível solicitar o microfone. Responda tocando em A, B, C ou D.');
    return false;
  }
  if (!window.isSecureContext) {
    ativarModoRespostaPorBotoes('O microfone exige HTTPS. Responda tocando em A, B, C ou D.');
    mostrarAviso('Publique o PWA em HTTPS para usar o microfone.');
    return false;
  }
  if (permissionRequestInProgress) return false;
  permissionRequestInProgress = true;
  setAudioStatus('Solicitando permissão do microfone...');
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
      }
    });
    stream.getTracks().forEach(track => track.stop());
    microphoneAuthorized = true;
    microphoneDenied = false;
    localStorage.setItem('sss-microphone-authorized', 'true');
    hideMicrophoneButton();
    document.body.classList.remove('voice-fallback-buttons');
    buttonAnswerFallbackEnabled = false;
    quizForm?.setAttribute('data-answer-mode', 'voice');
    setAudioStatus('Microfone autorizado. Preparando modo áudio...');
    mostrarAviso('Microfone ativado com sucesso.');
    return true;
  } catch (error) {
    microphoneAuthorized = false;
    microphoneDenied = error?.name === 'NotAllowedError' || error?.name === 'SecurityError';
    localStorage.removeItem('sss-microphone-authorized');
    // Só forçamos os botões quando o acesso foi realmente negado. Em falhas
    // transitórias o SpeechRecognition ainda pode funcionar (principalmente no PC).
    if (microphoneDenied) {
      showMicrophoneButton('O microfone está bloqueado. Libere-o nas permissões do aplicativo e toque em “Tentar permitir microfone”.');
      mostrarAviso('Libere o microfone nas permissões do aplicativo para responder por voz.');
    }
    return false;
  } finally {
    permissionRequestInProgress = false;
  }
}

function getPortugueseVoice() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  return voices.find(v => /^pt-BR$/i.test(v.lang)) || voices.find(v => /^pt/i.test(v.lang)) || null;
}

function speakText(text, onEnd) {
  if (!('speechSynthesis' in window)) {
    notifyApp('Este navegador não oferece leitura por voz.');
    onEnd?.();
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;
  const voice = getPortugueseVoice();
  if (voice) utterance.voice = voice;
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    // Em celulares, o sistema precisa de uma pequena pausa para liberar o
    // foco de áudio da síntese antes de abrir o microfone.
    window.setTimeout(() => onEnd?.(), 650);
  };
  utterance.onend = finish;
  utterance.onerror = finish;
  // O sintetizador pode permanecer pausado quando um PWA Android volta do
  // segundo plano ou acaba de trocar o foco entre alto-falante e microfone.
  window.speechSynthesis.resume();
  window.speechSynthesis.speak(utterance);
}

function stopRecognition() {
  recognitionExpected = false;
  clearTimeout(recognitionRestartTimer);
  clearTimeout(recognitionStartTimer);
  recognitionRestartTimer = null;
  recognitionStartTimer = null;
  if (recognition) {
    recognition.onstart = null;
    recognition.onresult = null;
    recognition.onerror = null;
    recognition.onend = null;
    try { recognition.abort(); } catch (_) {}
    recognition = null;
  }
  clearTimeout(responseTimer);
  clearInterval(countdownTimer);
  responseTimer = null;
  countdownTimer = null;
  if (audioCountdown) audioCountdown.textContent = '';
}

function stopSpeechAndRecognition() {
  audioSessionId++;
  stopRecognition();
  window.speechSynthesis?.cancel?.();
}

function normalizeVoiceChoice(value) {
  const clean = String(value || '').toLocaleLowerCase('pt-BR')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ').trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.includes('a') || clean.includes('alternativa a') || words.includes('ah')) return 0;
  if (words.includes('b') || clean.includes('alternativa b') || words.includes('be') || words.includes('bê')) return 1;
  if (words.includes('c') || clean.includes('alternativa c') || words.includes('ce') || words.includes('cê')) return 2;
  if (words.includes('d') || clean.includes('alternativa d') || words.includes('de') || words.includes('dê')) return 3;
  return null;
}

function startTenSecondCountdown(sessionId) {
  let seconds = 10;
  setAudioStatus('Ouvindo. Diga A, B, C ou D.', seconds);
  clearInterval(countdownTimer);
  clearTimeout(responseTimer);
  countdownTimer = setInterval(() => {
    seconds--;
    if (audioCountdown) audioCountdown.textContent = `${Math.max(seconds, 0)}s`;
  }, 1000);
  responseTimer = setTimeout(() => {
    if (!quizAudioEnabled || sessionId !== audioSessionId) return;
    stopRecognition();
    speakText('Não ouvi uma alternativa. Repita A, B, C ou D.', () => listenForQuizChoice(sessionId));
  }, 10500);
}

async function listenForQuizChoice(sessionId) {
  if (!quizAudioEnabled || sessionId !== audioSessionId || document.hidden) return;
  if (!SpeechRecognitionAPI) {
    ativarModoRespostaPorBotoes('Reconhecimento de voz indisponível. Escolha tocando em A, B, C ou D.');
    return;
  }

  const permission = await queryMicrophonePermission();
  if (permission === 'denied') {
    microphoneAuthorized = false;
    microphoneDenied = true;
    showMicrophoneButton('Microfone bloqueado. Libere-o nas permissões do aplicativo e tente novamente.');
    return;
  }
  if (permission === 'granted') {
    microphoneAuthorized = true;
    microphoneDenied = false;
  }
  // Não bloqueamos quando a permissão está "prompt"/desconhecida: no desktop
  // o próprio SpeechRecognition abre o pedido de acesso; erros reais de bloqueio
  // são tratados em recognition.onerror.

  stopRecognition();
  // Pausa extra para Android/PWA instalado após a fala terminar.
  await new Promise(resolve => setTimeout(resolve, 350));
  if (!quizAudioEnabled || sessionId !== audioSessionId || document.hidden) return;

  recognition = new SpeechRecognitionAPI();
  recognition.lang = 'pt-BR';
  recognition.interimResults = false;
  recognition.maxAlternatives = 5;
  recognition.continuous = false;
  recognitionExpected = true;

  recognition.onstart = () => {
    if (!quizAudioEnabled || sessionId !== audioSessionId) return;
    clearTimeout(recognitionStartTimer);
    recognitionStartTimer = null;
    startTenSecondCountdown(sessionId);
  };

  recognition.onresult = event => {
    if (!quizAudioEnabled || sessionId !== audioSessionId) return;
    const transcripts = [];
    for (let resultIndex = 0; resultIndex < event.results.length; resultIndex++) {
      for (let altIndex = 0; altIndex < event.results[resultIndex].length; altIndex++) {
        transcripts.push(event.results[resultIndex][altIndex].transcript);
      }
    }
    const choice = transcripts.map(normalizeVoiceChoice).find(value => value !== null && value !== undefined);
    stopRecognition();
    if (choice === null || choice === undefined) {
      speakText('Não entendi. Repita A, B, C ou D.', () => listenForQuizChoice(sessionId));
      return;
    }
    registerAudioChoice(choice, sessionId);
  };

  recognition.onerror = event => {
    if (!quizAudioEnabled || sessionId !== audioSessionId) return;
    const error = event.error || 'unknown';
    stopRecognition();
    if (error === 'not-allowed' || error === 'service-not-allowed') {
      microphoneAuthorized = false;
      microphoneDenied = true;
      localStorage.removeItem('sss-microphone-authorized');
      showMicrophoneButton('Microfone bloqueado. Libere-o nas permissões do aplicativo e toque para tentar novamente.');
      buttonAnswerFallbackEnabled = true;
      document.body.classList.add('voice-fallback-buttons');
      speakText('O acesso ao microfone foi bloqueado. Responda tocando em uma alternativa.');
      return;
    }
    if (error === 'audio-capture') {
      ativarModoRespostaPorBotoes('O microfone não está disponível. Verifique se outro aplicativo está usando-o.');
      return;
    }
    if (error === 'network') {
      ativarModoRespostaPorBotoes('O reconhecimento de voz precisa de internet neste celular. Use os botões A, B, C ou D.');
      return;
    }
    if (error === 'no-speech' || error === 'aborted') {
      speakText('Não entendi. Repita A, B, C ou D.', () => listenForQuizChoice(sessionId));
      return;
    }
    ativarModoRespostaPorBotoes('Não foi possível ouvir a resposta. Use os botões A, B, C ou D.');
  };

  recognition.onend = () => {
    if (!recognitionExpected || !quizAudioEnabled || sessionId !== audioSessionId) return;
    recognitionExpected = false;
    clearTimeout(recognitionRestartTimer);
    recognitionRestartTimer = setTimeout(() => {
      if (quizAudioEnabled && sessionId === audioSessionId) {
        speakText('Não entendi. Repita A, B, C ou D.', () => listenForQuizChoice(sessionId));
      }
    }, 250);
  };

  try {
    recognition.start();
    // Alguns WebViews/PWAs Android não disparam onstart nem onerror. Nesse
    // caso, encerra a sessão presa e oferece uma nova tentativa explícita.
    recognitionStartTimer = setTimeout(() => {
      if (!recognitionExpected || !quizAudioEnabled || sessionId !== audioSessionId) return;
      stopRecognition();
      showMicrophoneButton('O microfone não iniciou. Toque para tentar novamente.');
    }, 5000);
  } catch (error) {
    stopRecognition();
    // InvalidStateError é comum no Android quando uma sessão anterior ainda
    // está encerrando. Aguarda e tenta novamente uma vez.
    recognitionRestartTimer = setTimeout(() => {
      if (quizAudioEnabled && sessionId === audioSessionId) listenForQuizChoice(sessionId);
    }, 900);
  }
}

function registerAudioChoice(choice, sessionId) {
  if (!quizAudioEnabled || sessionId !== audioSessionId || processingChoice) return;
  const input = quizForm.querySelector(`input[name="q${audioQuestionIndex}"][value="${choice}"]`);
  if (!input) return;
  processingChoice = true;
  stopRecognition();
  input.checked = true;
  // Não redisparamos "change" aqui: isso reentraria neste mesmo handler e
  // criava um laço infinito ao aceitar respostas (voz ou toque).
  input.closest('.question-card')?.classList.remove('unanswered');
  updateProgress();
  const letter = letters[choice];
  const optionText = questions[audioQuestionIndex].o[choice];
  setAudioStatus(`Resposta reconhecida: ${letter}.`);
  speakText(`Você respondeu ${letter}. ${optionText}.`, () => {
    processingChoice = false;
    if (!quizAudioEnabled || sessionId !== audioSessionId) return;
    const isAnswered = i => !!quizForm.querySelector(`input[name="q${i}"]:checked`);
    // Só encerra quando NENHUMA questão estiver em aberto.
    const remaining = questions.reduce((total, _, i) => total + (isAnswered(i) ? 0 : 1), 0);
    if (remaining === 0) {
      quizAudioEnabled = false;
      quizAudioToggle?.setAttribute('aria-pressed', 'false');
      if (quizAudioToggle) quizAudioToggle.textContent = '🔊 Ativar modo áudio';
      setAudioStatus('Todas as questões foram respondidas. Corrigindo o simulado...');
      speakText('Todas as questões foram respondidas. Agora farei a correção.', () => quizForm.requestSubmit());
      return;
    }
    // Avança para a próxima questão em aberto, retornando ao início se preciso.
    let nextIndex = -1;
    for (let step = 1; step <= questions.length; step++) {
      const candidate = (audioQuestionIndex + step) % questions.length;
      if (!isAnswered(candidate)) { nextIndex = candidate; break; }
    }
    if (nextIndex === -1) return;
    audioQuestionIndex = nextIndex;
    readCurrentQuizQuestion(sessionId);
  });
}

function readCurrentQuizQuestion(sessionId = audioSessionId) {
  if (!quizAudioEnabled || sessionId !== audioSessionId || corrected) return;
  const item = questions[audioQuestionIndex];
  const card = document.getElementById(`question-${audioQuestionIndex + 1}`);
  card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  card?.classList.add('audio-active-question');
  document.querySelectorAll('.question-card').forEach(el => {
    if (el !== card) el.classList.remove('audio-active-question');
  });
  const alternatives = item.o.map((text, index) => `Alternativa ${letters[index]}. ${text}.`).join(' ');
  setAudioStatus(`Lendo questão ${audioQuestionIndex + 1} de ${questions.length}...`);
  speakText(`Questão ${audioQuestionIndex + 1}. ${item.q}. ${alternatives}`, () => {
    if (buttonAnswerFallbackEnabled) {
      setAudioStatus('Escolha tocando em A, B, C ou D.');
      return;
    }
    listenForQuizChoice(sessionId);
  });
}

async function startQuizAudio() {
  if (corrected) {
    notifyApp('Refaça o simulado para usar o modo áudio.');
    return;
  }
  if (!('speechSynthesis' in window)) {
    notifyApp('Este navegador não suporta leitura por voz.');
    return;
  }

  // O clique neste botão é uma ação direta do usuário e, portanto, é o
  // momento correto para solicitar a permissão oficial do microfone.
  if (SpeechRecognitionAPI) {
    const permission = await queryMicrophonePermission();
    if (permission === 'granted') {
      microphoneAuthorized = true;
      microphoneDenied = false;
    } else {
      // Executado ainda a partir do toque do usuário, condição obrigatória
      // para o Android exibir a solicitação de permissão.
      await solicitarPermissaoMicrofone();
    }
  }

  if (!SpeechRecognitionAPI) {
    ativarModoRespostaPorBotoes('Este celular não suporta resposta por voz. Use os botões A, B, C ou D.');
  } else if (microphoneDenied) {
    showMicrophoneButton('Microfone bloqueado. Libere nas configurações do aplicativo e tente novamente.');
    buttonAnswerFallbackEnabled = true;
    document.body.classList.add('voice-fallback-buttons');
  }

  flashcardAudioEnabled = false;
  flashcardAudioToggle?.setAttribute('aria-pressed', 'false');
  if (flashcardAudioToggle) flashcardAudioToggle.textContent = '🔊 Áudio automático';
  stopSpeechAndRecognition();
  processingChoice = false;
  quizAudioEnabled = true;
  const firstUnanswered = questions.findIndex((_, index) => !quizForm.querySelector(`input[name="q${index}"]:checked`));
  audioQuestionIndex = firstUnanswered === -1 ? 0 : firstUnanswered;
  quizAudioToggle?.setAttribute('aria-pressed', 'true');
  if (quizAudioToggle) quizAudioToggle.textContent = '⏹ Desativar áudio';
  const sessionId = audioSessionId;
  readCurrentQuizQuestion(sessionId);
}

function stopQuizAudio(announce = true) {
  quizAudioEnabled = false;
  processingChoice = false;
  stopSpeechAndRecognition();
  quizAudioToggle?.setAttribute('aria-pressed', 'false');
  if (quizAudioToggle) quizAudioToggle.textContent = '🔊 Ativar modo áudio';
  document.querySelectorAll('.audio-active-question').forEach(el => el.classList.remove('audio-active-question'));
  if (audioStatus) audioStatus.hidden = true;
  if (announce) notifyApp('Modo áudio desativado.');
}

quizAudioToggle?.addEventListener('click', () => {
  if (quizAudioEnabled) stopQuizAudio(); else startQuizAudio();
});

enableMicrophoneButton?.addEventListener('click', async () => {
  const allowed = await solicitarPermissaoMicrofone();
  if (!allowed) return;
  if (!quizAudioEnabled) await startQuizAudio();
  else {
    const sessionId = audioSessionId;
    readCurrentQuizQuestion(sessionId);
  }
});

// Resposta por toque: sempre disponível e, no modo áudio, confirma e avança.
quizForm.addEventListener('change', event => {
  if (!quizAudioEnabled || !event.target.matches('input[type="radio"]')) return;
  const index = Number(event.target.name.replace('q', ''));
  if (index !== audioQuestionIndex) return;
  const choice = Number(event.target.value);
  if (!Number.isInteger(choice)) return;
  registerAudioChoice(choice, audioSessionId);
});

// Teclado físico/Bluetooth: A, B, C ou D.
document.addEventListener('keydown', event => {
  if (!quizAudioEnabled || corrected || /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) return;
  const key = event.key.toLowerCase();
  const choice = ['a', 'b', 'c', 'd'].indexOf(key);
  if (choice >= 0) {
    event.preventDefault();
    registerAudioChoice(choice, audioSessionId);
  }
});

function speakFlashcardQuestion() {
  if (!flashcardAudioEnabled || !activeFlashcards[flashcardIndex]) return;
  speakText(`Pergunta. ${activeFlashcards[flashcardIndex].q}`);
}

function toggleFlashcardAudio() {
  flashcardAudioEnabled = !flashcardAudioEnabled;
  if (flashcardAudioEnabled) {
    stopQuizAudio(false);
    flashcardAudioToggle?.setAttribute('aria-pressed', 'true');
    if (flashcardAudioToggle) flashcardAudioToggle.textContent = '⏹ Desativar áudio';
    speakFlashcardQuestion();
  } else {
    stopSpeechAndRecognition();
    flashcardAudioToggle?.setAttribute('aria-pressed', 'false');
    if (flashcardAudioToggle) flashcardAudioToggle.textContent = '🔊 Áudio automático';
  }
}

flashcardAudioToggle?.addEventListener('click', toggleFlashcardAudio);

// Ao voltar para o PWA, retoma a questão somente se o modo áudio estava ativo.
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    stopRecognition();
    return;
  }
  if (quizAudioEnabled && !corrected) {
    const sessionId = audioSessionId;
    setTimeout(() => readCurrentQuizQuestion(sessionId), 450);
  }
});

// Garante que qualquer reinício ou correção encerre a sessão de voz atual.
resetButton.addEventListener('click', () => stopQuizAudio(false));
quizForm.addEventListener('submit', () => stopQuizAudio(false));
window.addEventListener('pagehide', stopSpeechAndRecognition);

// Inicialização segura: evita erro em celulares sem SpeechRecognition.
(async function initializeAudioCompatibility() {
  if (!SpeechRecognitionAPI) {
    ativarModoRespostaPorBotoes('Seu navegador não oferece reconhecimento por voz. Use os botões A, B, C ou D.');
    return;
  }
  const permission = await queryMicrophonePermission();
  if (permission === 'granted') {
    microphoneAuthorized = true;
    microphoneDenied = false;
    localStorage.setItem('sss-microphone-authorized', 'true');
  } else if (permission === 'denied') {
    microphoneAuthorized = false;
    microphoneDenied = true;
    showMicrophoneButton('Microfone bloqueado. Libere nas configurações do aplicativo e toque para tentar novamente.');
    buttonAnswerFallbackEnabled = true;
    document.body.classList.add('voice-fallback-buttons');
  }
})();
