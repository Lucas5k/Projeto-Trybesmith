import express from 'express';
import routerProduct from './Router/routerProduct';
import routerUser from './Router/routerUser';
import routerOrder from './Router/routerOrder';
import routerLogin from './Router/routerLogin';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);
app.use('/users', routerUser);
app.use('/orders', routerOrder);
app.use('/login', routerLogin);

export default app;
