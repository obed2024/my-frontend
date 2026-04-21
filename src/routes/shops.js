import express from 'express';
import { getAllShops, getShop, createShop, updateShop, deleteShop } from '../controllers/shop.js';
import protect from '../middleware/auth.js';
import authorize from '../middleware/authorize.js';

const shopRoutes = express.Router();

shopRoutes.get('/getAllShops',protect,authorize("admin","seller"),getAllShops);
shopRoutes.post('/createShop',protect,authorize("admin"),createShop);
shopRoutes.get('/getShop/:id',protect,authorize("admin"),getShop);
shopRoutes.put('/updateShop/:id',protect,authorize("admin","seller"),updateShop);
shopRoutes.delete('/deleteShop/:id',protect,authorize("admin"),deleteShop);

export default shopRoutes;

