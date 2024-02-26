# Ensolvers Notes App

## Description

This simple web application allows users to manage notes. It includes a backend built with NestJS and TypeORM, and a frontend built with Vite and React.

## Requirements

Make sure you have the following tools and versions installed before running the app:

- **Node.js**: The application is built using Node.js. It is recommended to use the LTS version. The version used is Node.js 8.17 20.9.0. [Download Node.js](https://nodejs.org/)

- **npm**: Node.js package manager. Make sure you have npm installed. The version used is npm 8.17. [npm installation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- **TypeScript**: The backend application is written in TypeScript. It is recommended to install TypeScript globally. The version used is TypeScript 5.1. [TypeScript Installation](https://www.typescriptlang.org/download)

- **NestJS CLI**: Command line tool for NestJS. Make sure you have the NestJS CLI installed globally. The version used is 10.0.0. [NestJS CLI Installation](https://docs.nestjs.com/cli/overview)

- **MySQL**: Database used by the backend. Make sure you have MySQL installed and configured. [Download MySQL](https://dev.mysql.com/downloads/)

## Setting

###Backend

1. Open a terminal in the `backend` directory.
2. Run `npm install` to install the dependencies.
3. Run `npm run build` to build the application.
4. Run `npm run typeorm migration:run` to apply the migrations and create the database.

### Frontend

1. Open a terminal in the `frontend` directory.
2. Run `npm install` to install the dependencies.

## Execution

###Backend

1. Open a terminal in the `backend` directory.
2. Run `npm start` to start the backend development server.

### Frontend

1. Open another terminal in the `frontend` directory.
2. Run `npm run dev` to start the frontend development server.

The application will be available at `http://localhost:5173`.
