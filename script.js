// ==========================================================
// CONFIGURAÇÃO
// ==========================================================
// A API_KEY não fica neste arquivo — ela vem do config.js,
// que não é enviado ao GitHub (veja o .gitignore).
// Se está vendo "API_KEY is not defined", confira se criou
// o config.js a partir do config.example.js.

// units=metric -> temperatura em Celsius
// lang=pt_br   -> descrição do clima em português
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// ==========================================================
// REFERÊNCIAS DOS ELEMENTOS DO HTML
// ==========================================================
const form = document.getElementById("form-busca");
const inputCidade = document.getElementById("input-cidade");
const mensagemErro = document.getElementById("mensagem-erro");
const resultado = document.getElementById("resultado");

const nomeCidadeEl = document.getElementById("nome-cidade");
const temperaturaEl = document.getElementById("temperatura");
const descricaoEl = document.getElementById("descricao");
const sensacaoEl = document.getElementById("sensacao");
const umidadeEl = document.getElementById("umidade");
const ventoEl = document.getElementById("vento");

// ==========================================================
// EVENTO: usuário envia o formulário de busca
// ==========================================================
form.addEventListener("submit", async (evento) => {
  evento.preventDefault(); // impede a página de recarregar

  const cidade = inputCidade.value.trim();
  if (!cidade) return;

  buscarClima(cidade);
});

// ==========================================================
// FUNÇÃO PRINCIPAL: busca o clima na API
// ==========================================================
async function buscarClima(cidade) {
  // Monta a URL da requisição com os parâmetros necessários
  const url = `${BASE_URL}?q=${encodeURIComponent(cidade)}&appid=${API_KEY}&units=metric&lang=pt_br`;

  try {
    const resposta = await fetch(url);

    // Se a cidade não existir, a API retorna erro 404
    if (!resposta.ok) {
      throw new Error("Cidade não encontrada");
    }

    const dados = await resposta.json();
    mostrarResultado(dados);

  } catch (erro) {
    mostrarErro();
    console.error(erro);
  }
}

// ==========================================================
// ATUALIZA A TELA COM OS DADOS DO CLIMA
// ==========================================================
function mostrarResultado(dados) {
  // Esconde a mensagem de erro (caso estivesse visível)
  mensagemErro.classList.add("escondido");

  // Preenche os campos com os dados vindos da API
  nomeCidadeEl.textContent = `${dados.name}, ${dados.sys.country}`;
  temperaturaEl.textContent = `${Math.round(dados.main.temp)}°C`;
  descricaoEl.textContent = dados.weather[0].description;
  sensacaoEl.textContent = `${Math.round(dados.main.feels_like)}°C`;
  umidadeEl.textContent = `${dados.main.humidity}%`;
  ventoEl.textContent = `${Math.round(dados.wind.speed * 3.6)} km/h`; // API retorna m/s, convertendo pra km/h

  // Mostra a seção de resultado
  resultado.classList.remove("escondido");
}

// ==========================================================
// MOSTRA MENSAGEM DE ERRO E ESCONDE O RESULTADO ANTERIOR
// ==========================================================
function mostrarErro() {
  resultado.classList.add("escondido");
  mensagemErro.classList.remove("escondido");
}
