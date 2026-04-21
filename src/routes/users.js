import express from 'express';  
import {  createUser,deleteUser,getAllUsers, singleUser, updateUser,  } from '../controllers/user.js';
import protect from '../middleware/auth.js';
import authorize from '../middleware/authorize.js';

const userRoutes = express.Router();

userRoutes.get('/getAllUsers',protect,authorize("admin","seller"),getAllUsers);
userRoutes.post('/createUser',protect,authorize("admin"), createUser);
userRoutes.get('/getsingleUser/:id',protect,authorize("admin"), singleUser);
userRoutes.put('/updateUser/:id',protect,authorize("admin"), updateUser);
userRoutes.delete('/deleteUser/:id',protect,authorize("admin"), deleteUser);


export default userRoutes;
