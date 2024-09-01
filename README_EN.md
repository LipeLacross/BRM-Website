# YourBMR

**YourBMR** is a website project designed to calculate the Basal Metabolic Rate (BMR) and assist in diet planning. The site allows users to input personal data and information about their activity level to calculate their daily caloric needs and nutritional recommendations.

## 🔨 Project Features

- **BMR Calculation**: Computes the Basal Metabolic Rate based on data such as age, weight, height, and gender.
- **Diet Planning**: Offers macronutrient recommendations based on daily needs and diet goals.
- **User-Friendly Interface**: Forms and results presented in a clear and intuitive manner.
- **Responsiveness**: Adaptive design for various screen sizes, including mobile devices.

### Visual Example of the Project

![image](https://github.com/user-attachments/assets/59017e54-7088-4cf7-8fd3-37ed89d62f34)

## ✔️ Techniques and Technologies Used

- **React**: Library for building user interfaces.
- **TypeScript**: Language that adds static typing to JavaScript.
- **SASS**: CSS preprocessor for more organized and advanced styling.

## 📁 Project Structure

- **public/**
    - `favicon.svg`: Site icon.
    - `index.html`: Main HTML file.
    - `manifest.json`: Manifest file for Progressive Web App (PWA).
    - `robots.txt`: File for search engine crawling rules.

- **src/**
    - `App.css`: Global application styles.
    - `App.test.tsx`: Tests for the `App` component.
    - `App.tsx`: Main application component.
    - `components/`: Reusable components
        - `Footer.tsx`: Footer component.
        - `Header.tsx`: Header component.
    - `index.css`: Entry global styles.
    - `index.tsx`: Application entry point.
    - `logo.svg`: Site logo.
    - `Pages/`: Site pages
        - `About.tsx`: About the project page.
        - `Contact.tsx`: Contact page.
        - `FAQ.tsx`: Frequently asked questions.
        - `Form.tsx`: BMR calculation form.
        - `Home.tsx`: Home page.
        - `Privacy.tsx`: Privacy policy page.
        - `Results.tsx`: Results page for the calculation.
        - `Terms.tsx`: Terms and conditions.
    - `react-app-env.d.ts`: Environment definitions for React.
    - `reportWebVitals.ts`: Performance metrics reporting.
    - `scripts/`: Auxiliary scripts.
    - `setupTests.ts`: Testing setup.
    - `styles/`: SASS files for styling
        - `About.sass`: Styles for the about page.
        - `App.sass`: Main application styles.
        - `Contact.sass`: Styles for the contact page.
        - `FAQ.sass`: Styles for the FAQ page.
        - `Footer.sass`: Styles for the footer.
        - `Form.sass`: Styles for the form.
        - `Header.sass`: Styles for the header.
        - `Privacy.sass`: Styles for the privacy page.
        - `Results.sass`: Styles for the results page.
        - `Terms.sass`: Styles for the terms page.
        - `_mixins.sass`: Reusable SASS mixins.
        - `_variables.sass`: SASS variables for themes and styles.

- **.gitignore**: File that specifies which files and directories to ignore in Git.
- **directory_listing.txt**: List of project directories and files.
- **LICENSE**: Project license file.
- **package-lock.json**: Package manager and versioning.
- **package.json**: File that manages dependencies and project scripts.
- **README.md**: Project documentation.
- **tsconfig.json**: TypeScript configuration.

## 🛠️ Running the Project

To start the project locally, follow these steps:

1. **Ensure Node.js is Installed**:
    - [Node.js](https://nodejs.org/) is required to run the project. You can check if it is installed with:
      ```bash
      node -v
      ```
    - If not installed, download and install the recommended version.

2. **Clone the Repository**:
    - Copy the repository URL and run the following command in the terminal:
      ```bash
      git clone <REPOSITORY_URL>
      ```
    - Navigate to the project directory:
      ```bash
      cd repository-name
      ```

3. **Install Dependencies**:
    - In the project directory, run the command:
      ```bash
      npm install
      ```

4. **Start the Development Server**:
    - To run the project locally, use:
      ```bash
      npm start
      ```
    - The project will be available at [http://localhost:3000](http://localhost:3000).

5. **Build the Project for Production**:
    - To create an optimized version of the project, run:
      ```bash
      npm run build
      ```

6. **Run Tests**:
    - To execute the project tests, use:
      ```bash
      npm test
      ```

## 🌐 Deploy

The project is hosted at [https://suatmb.netlify.app](https://suatmb.netlify.app). For updates and maintenance, refer to Netlify documentation or the project repository.
