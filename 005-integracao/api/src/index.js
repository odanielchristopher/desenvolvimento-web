import express from 'express';
import { alunos } from './mocks/alunos.js';
import cors from './utils/cors.js';

const app = express();

app.use(cors);

app.get('/alunos', (request, response) => {
  return response.status(200).json(alunos);
});

app.listen(3001, () => console.log('> Server started at http://localhost:3001'));