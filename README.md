# 🌤️ App do Tempo

Um app simples que mostra a previsão do tempo atual de qualquer cidade do mundo, feito com HTML, CSS e JavaScript puro, consumindo a API pública da OpenWeatherMap.

## Demonstração

![Preview do projeto](preview.png)

## Funcionalidades

- 🔍 Busca o clima atual de qualquer cidade
- 🌡️ Mostra temperatura, sensação térmica, umidade e velocidade do vento
- 🇧🇷 Descrições do clima em português
- ⚠️ Tratamento de erro para cidades não encontradas

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript (Vanilla JS, sem bibliotecas)
- [OpenWeatherMap API](https://openweathermap.org/api)

## Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/app-do-tempo.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd app-do-tempo
   ```
3. Crie uma conta gratuita na [OpenWeatherMap](https://openweathermap.org/api) e pegue sua API key.
4. Copie o arquivo `config.example.js` e renomeie a cópia para `config.js`.
5. Abra o `config.js` e cole sua chave no lugar de `SUA_API_KEY_AQUI`.
6. Abra o arquivo `index.html` no navegador.

> ⚠️ Chaves novas da OpenWeatherMap podem levar até algumas horas para ativar.

## Estrutura do projeto

```
app-do-tempo/
├── index.html           # Estrutura da página
├── style.css            # Estilos visuais
├── script.js            # Lógica (busca e exibição dos dados)
├── config.example.js    # Modelo do arquivo de configuração
├── config.js            # Sua chave real (não vai para o GitHub)
├── .gitignore
└── README.md
```

## Segurança da API key

A chave da API fica isolada no `config.js`, que está listado no `.gitignore` e por isso nunca é enviado ao GitHub. Apenas o `config.example.js` (sem chave real) fica público, como modelo para quem for clonar o projeto.

## O que aprendi com este projeto

- Consumo de APIs externas com `fetch` e `async/await`
- Tratamento de erros em requisições HTTP
- Boas práticas de segurança: manter chaves sensíveis fora do controle de versão

## Possíveis melhorias futuras

- Previsão para os próximos dias, não só o momento atual
- Detectar a localização do usuário automaticamente
- Ícones diferentes de acordo com a condição do tempo

---

Feito por [seu nome] como projeto de estudo em Análise e Desenvolvimento de Sistemas.
