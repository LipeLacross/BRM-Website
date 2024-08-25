# SuaTmb

O **SuaTmb** é um projeto de site para calcular a Taxa de Metabolismo Basal (TMB) e ajudar no planejamento de dietas. O site permite aos usuários inserir dados pessoais e informações sobre seu nível de atividade física para calcular suas necessidades calóricas diárias e recomendações nutricionais.

## 🔨 Funcionalidades do Projeto

- **Cálculo de TMB**: Calcula a Taxa de Metabolismo Basal com base em dados como idade, peso, altura e gênero.
- **Planejamento de Dieta**: Oferece recomendações de macronutrientes com base nas necessidades diárias e objetivos de dieta.
- **Interface Amigável**: Formulários e resultados apresentados de maneira clara e intuitiva.
- **Responsividade**: Design adaptável para diferentes tamanhos de tela, incluindo dispositivos móveis.

### Exemplo Visual do Projeto

![Exemplo Visual do Projeto](https://suatmb.netlify.app/screenshot.png)

## ✔️ Técnicas e Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript.
- **SASS**: Pré-processador CSS para estilos mais organizados e avançados.

## 📁 Estrutura do Projeto

- **public/**
    - `favicon.svg`: Ícone do site.
    - `index.html`: Arquivo HTML principal.
    - `logo192.png`: Logo do site para dispositivos de resolução média.
    - `logo512.png`: Logo do site para dispositivos de alta resolução.
    - `manifest.json`: Arquivo de manifesto para Progressive Web App (PWA).
    - `robots.txt`: Arquivo para controle de indexação pelos motores de busca.

- **src/**
    - `App.tsx`: Componente principal da aplicação.
    - `components/`: Componentes reutilizáveis como `Footer.tsx` e `Header.tsx`.
    - `Pages/`: Páginas do site, como `Home.tsx`, `About.tsx`, `Contact.tsx`, etc.
    - `styles/`: Arquivos SASS para estilização, incluindo `App.sass`, `Footer.sass`, etc.
    - `index.tsx`: Ponto de entrada da aplicação.

- **.gitignore**: Arquivo que define quais arquivos e diretórios devem ser ignorados pelo Git.
- **package.json**: Arquivo que gerencia dependências e scripts do projeto.
- **tsconfig.json**: Configurações do TypeScript.
- **README.md**: Documentação do projeto.

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

