import express from 'express';

import {products,create,update,productsById,deletes} from "../controllers/homeControllers.js";




const routes = express.Router();
 
routes.get('/ ',products);
routes.post('/products',create);
routes.put('/products/:id',update);
routes.get('/products/:id',productsById);

routes.delete('/products/:id',deletes);


  
 
export default routes;
 