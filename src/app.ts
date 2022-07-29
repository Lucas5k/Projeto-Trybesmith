import express from 'express';
import routerProduct from './Router/routerProduct';
import routerUser from './Router/routerUser';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);
app.use('/users', routerUser);

export default app;
