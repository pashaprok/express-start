import express, { Application } from 'express';
import cors from 'cors';
import { catchErrors } from './middlewares/catchErrors';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes here
// app.use('/--route-path', routeHandler);

app.use(catchErrors);

export default app;
