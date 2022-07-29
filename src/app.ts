import express from 'express';
import routerProduct from './Router/routerProduct';
import routerUser from './Router/routerUser';
import routerOrder from './Router/routerOrder';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);
app.use('/users', routerUser);
app.use('/orders', routerOrder);

export default app;
