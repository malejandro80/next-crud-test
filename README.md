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

Open [https://next-crud-test-pg55i8ga4-malejandro80s-projects.vercel.app](online URL) visit the page Online

##folder Structure

src/
├── app/
│ ├── components/ # Reusable React components
│ ├── constants/ # Constant values (e.g., messages, URLs)
│ ├── context/ # Context API providers and consumers
│ ├── hooks/ # Custom React hooks
│ ├── services/ # API service functions
│ └── types/ # TypeScript type definitions
