<!-- @format -->

## Install Dependencies

run

npm install --legacy-peer-deps

### explanation

next has the lastest react version (19). I worked with react bootstrap as a UI library, to ensure they won't have dependency issues, we need to run the flag --legacy-peer-deps

## Getting Started

First, run the development server:

```bash
npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
```

## visit the page Online [URL](https://next-crud-test-pg55i8ga4-malejandro80s-projects.vercel.app)

## folder Structure

- **`components/`**: Contains reusable and modular UI components. These include buttons, forms, tables, and other building blocks for the user interface.
- **`constants/`**: Houses constant values used across the project, such as error messages, URLs, or reusable string literals, to maintain consistency.

- **`context/`**: Contains the setup for the Context API, used for global state management. This is ideal for sharing state between components without prop drilling.

- **`hooks/`**: Includes custom React hooks that encapsulate reusable logic, such as form handling or API calls.

- **`services/`**: Provides functions to handle communication with APIs or external data sources, including CRUD operations and data-fetching utilities.

- **`types/`**: Contains TypeScript type definitions and interfaces, ensuring strong typing and better code reliability throughout the project.
