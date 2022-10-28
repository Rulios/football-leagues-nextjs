This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Description
This is the deliverable made by Robert Lu Zheng as the final project to the Next.JS Rootlab session. 

## Description of the project
This project consist of a football (soccer for those in the U.S xd) website bootstrapped with Next.JS. 
The website displays the football leagues, once clicked, it will show all the teams belonging to that league. 
When clicking the team, it will navigate to another page that will showcase a brief and basic description of the team. 


The features of NextJS that cover this project are: 
- NextJS Project Structure
    - _app, pages
- Pages

- Routing
    - Static and dynamic routing
    
- Components
    - Use of high and low level components
    
- Data fetching
    - Static site generation w/ Dynamic routing
    
- Image optimization
    - Usage of the <Image> component provided by Next.js

- Middleware
    - Rewriting and redirecting to the correct URLs when mistyped or in another language (e.g. Spanish). 


First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Second, rename the .env.example file to .env.local

```
.env.example ---> .env.local
```

Third, run the "mock" API server: 
 
```
npm run start-api
```
   

GREAT NOW Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
    

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


