## 🌐 [English Version of README](README_EN.md)

# SuaTmb

O **SuaTmb** é um projeto de site para calcular a Taxa de Metabolismo Basal (TMB) e ajudar no planejamento de dietas. O site permite aos usuários inserir dados pessoais e informações sobre seu nível de atividade física para calcular suas necessidades calóricas diárias e recomendações nutricionais.

## 🔨 Funcionalidades do Projeto

- **Cálculo de TMB**: Calcula a Taxa de Metabolismo Basal com base em dados como idade, peso, altura e gênero.
- **Planejamento de Dieta**: Oferece recomendações de macronutrientes com base nas necessidades diárias e objetivos de dieta.
- **Interface Amigável**: Formulários e resultados apresentados de maneira clara e intuitiva.
- **Responsividade**: Design adaptável para diferentes tamanhos de tela, incluindo dispositivos móveis.

### Exemplo Visual do Projeto

![image](https://github.com/user-attachments/assets/59017e54-7088-4cf7-8fd3-37ed89d62f34)

## ✔️ Técnicas e Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript.
- **SASS**: Pré-processador CSS para estilos mais organizados e avançados.

## 📁 Estrutura do Projeto

- **public/**
    - `favicon.svg`: Ícone do site.
    - `index.html`: Arquivo HTML principal.
    - `manifest.json`: Arquivo de manifesto para Progressive Web App (PWA).
    - `robots.txt`: Arquivo para controle de indexação pelos motores de busca.

- **src/**
    - `App.css`: Estilos globais da aplicação.
    - `App.test.tsx`: Testes para o componente `App`.
    - `App.tsx`: Componente principal da aplicação.
    - `components/`: Componentes reutilizáveis
        - `Footer.tsx`: Componente de rodapé.
        - `Header.tsx`: Componente de cabeçalho.
    - `index.css`: Estilos globais de entrada.
    - `index.tsx`: Ponto de entrada da aplicação.
    - `logo.svg`: Logo do site.
    - `Pages/`: Páginas do site
        - `About.tsx`: Página sobre o projeto.
        - `Contact.tsx`: Página de contato.
        - `FAQ.tsx`: Perguntas frequentes.
        - `Form.tsx`: Formulário para cálculo de TMB.
        - `Home.tsx`: Página inicial.
        - `Privacy.tsx`: Política de privacidade.
        - `Results.tsx`: Página de resultados do cálculo.
        - `Terms.tsx`: Termos e condições.
    - `react-app-env.d.ts`: Definições de ambiente para o React.
    - `reportWebVitals.ts`: Relatórios de métricas de performance.
    - `scripts/`: Scripts auxiliares.
    - `setupTests.ts`: Configurações para testes.
    - `styles/`: Arquivos SASS para estilização
        - `About.sass`: Estilos para a página sobre.
        - `App.sass`: Estilos principais da aplicação.
        - `Contact.sass`: Estilos para a página de contato.
        - `FAQ.sass`: Estilos para a página de FAQ.
        - `Footer.sass`: Estilos para o rodapé.
        - `Form.sass`: Estilos para o formulário.
        - `Header.sass`: Estilos para o cabeçalho.
        - `Privacy.sass`: Estilos para a página de privacidade.
        - `Results.sass`: Estilos para a página de resultados.
        - `Terms.sass`: Estilos para a página de termos.
        - `_mixins.sass`: Mixins SASS reutilizáveis.
        - `_variables.sass`: Variáveis SASS para temas e estilos.

- **.gitignore**: Arquivo que define quais arquivos e diretórios devem ser ignorados pelo Git.
- **directory_listing.txt**: Lista de diretórios e arquivos do projeto.
- **LICENSE**: Arquivo de licença do projeto.
- **package-lock.json**: Gerenciador de pacotes e suas versões.
- **package.json**: Arquivo que gerencia dependências e scripts do projeto.
- **README.md**: Documentação do projeto.
- **tsconfig.json**: Configurações do TypeScript.

## 🛠️ Abrir e Rodar o Projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**:
    - O [Node.js](https://nodejs.org/) é necessário para rodar o projeto. Você pode verificar se já o tem instalado com:
      ```bash
      node -v
      ```
    - Se não estiver instalado, baixe e instale a versão recomendada.

2. **Clone o Repositório**:
    - Copie a URL do repositório e execute o comando abaixo no terminal:
      ```bash
      git clone <URL_DO_REPOSITORIO>
      ```
    - Navegue até o diretório do projeto:
      ```bash
      cd nome-do-repositorio
      ```

3. **Instale as Dependências**:
    - No diretório do projeto, execute o comando:
      ```bash
      npm install
      ```

4. **Inicie o Servidor de Desenvolvimento**:
    - Para rodar o projeto localmente, use:
      ```bash
      npm start
      ```
    - O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

5. **Construa o Projeto para Produção**:
    - Para criar uma versão otimizada do projeto, execute:
      ```bash
      npm run build
      ```

6. **Rodar Testes**:
    - Para executar os testes do projeto, use:
      ```bash
      npm test
      ```

## 🌐 Deploy

O projeto está hospedado em [https://suatmb.netlify.app](https://suatmb.netlify.app). Para atualizações e manutenção, consulte a documentação da Netlify ou o repositório do projeto.

