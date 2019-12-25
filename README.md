# Angular & NodeJS

## This project has made to develop NodeJS api server and Angular application under the same workplace.

### It's benefits:
    -only one node_modules is needed for the backend and the frontend
    -the angular dev envirenment passing all api request to node, so you don't need to add CORS in dev mode
    -it's easy to define common interfaces
    -predefined scripts help to develop and build product application

### Start frontend:
    Run `npm run serve:frontend` to start frontend development environment. It does an `ng serve` under the hood. It listens for changes in frontend/src/* and common/* directories.

### Start backend:
    Run `npm run serve:backend` to start backend development environment. It does an `node index.js` (wich is the entry point of the backend) under the hood. It listens for changes in backend/src/* and common/* directories.

### Build application:
    Run `npm run build` to build both frontend and backend. The out files goes to dist directory, separted by main directories (common, fronend, backend).
    Once you have builded the code of backend, you can start in by `node dist/backend/indes.js` or just simplie `node dist/backend`.

### Run application in production mode:
    Run `npm run prod`, it builds all the backend and frontend files (does an `npm run build` under the hood), and starts the backend (without listen changes). It hosts the frontend's code too.

### Publish application:
    After you build the application by `npm run build`, you can publish it. You have to copy your dist directory where-ever you want. The entry point of the application is dist/backend/index.js