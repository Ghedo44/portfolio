# Portfolio Website

Welcome to my portfolio website! This site showcases my projects, skills, and background as an Aerospace Engineering student with a passion for coding. It is built using Angular and Tailwind CSS, hosted on GitHub Pages, and uses Firebase to handle the "Contact Me" form.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Deployment](#deployment)
- [Contact](#contact)
- [Contributing](#contributing)
- [License](#license)

## About

This website is designed to provide an overview of my academic background, coding projects, and professional interests. It includes a detailed portfolio of my work and an easy way to get in touch with me.

## Features

- **Home Page:** An introduction to who I am and my interests.
- **Projects:** A showcase of my projects with descriptions, technologies used, and links to the code and live demos.
- **Skills:** A summary of my technical skills.
- **Career:** An overview of my academic background and professional interests.
- **Contact Me:** A form powered by Firebase for visitors to send me messages directly.

## Technologies Used

- **Frontend:**
  - [Angular](https://angular.dev/): A platform for building mobile and desktop web applications.
  - [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces.

- **Backend:**
  - [Firebase](https://firebase.google.com/): Used for handling form submissions.

- **Hosting:**
  - [GitHub Pages](https://pages.github.com/): Hosting the website.
  - [GitHub Actions](https://github.com/features/actions): Automating the deployment process.

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ghedo44/portfolio.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a file named `environment.ts` inside the `src/environments` directory. This file should contain your Firebase and any other API keys. **Note:** This file should not be committed to version control.

   You can use Angular's schematic to create the file:

   ```bash
   ng g environments
   ```

    Then, add your Firebase configuration to the `environment.ts` file:

   ```typescript
   // src/environments/environment.ts
   export const environment = {
     production: false,
     firebaseConfig: {
       apiKey: "YOUR_FIREBASE_API_KEY",
       authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
       projectId: "YOUR_FIREBASE_PROJECT_ID",
       storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
       messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
       appId: "YOUR_FIREBASE_APP_ID"
     }
   };
   ```

   Also, create a `environment.prod.ts` for the production environment:

   ```typescript
   // src/environments/environment.prod.ts
   export const environment = {
     production: true,
     firebaseConfig: {
       apiKey: "YOUR_FIREBASE_API_KEY",
       authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
       projectId: "YOUR_FIREBASE_PROJECT_ID",
       storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
       messagingSenderId: "YOUR FIREBASE_MESSAGING_SENDER_ID",
       appId: "YOUR_FIREBASE_APP_ID"
     }
   };
   ```

5. **Serve the application locally:**
   ```bash
   ng serve
   ```

   The website should now be running at `http://localhost:4200`.

### .gitignore

Ensure that your `environment.ts` files are not tracked by version control by adding the following lines to your `.gitignore` file:

```
# Angular environment files
/src/environments/environment.ts
/src/environments/environment.prod.ts
```

## Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions. The deployment process is triggered on every push to the `main` branch. Make sure to set your environment variables in your GitHub repository settings under "Secrets and variables" for the deployment to work correctly.

To manually deploy the project, you can run:

```bash
ng build --prod
```

This will generate the `dist/` directory with the production build, which can then be pushed to the `gh-pages` branch of your repository.

## Contact

Feel free to reach out to me through the contact form on the website.

## Contributing

I appreciate any suggestions and corrections to the site! If you want to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for visiting my portfolio website! I hope you find it informative and engaging. Any feedback or suggestions are highly appreciated.