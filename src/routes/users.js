import express from 'express';  
import {  createUser,deleteUser,getAllUsers, singleUser, updateUser,  } from '../controllers/user.js';
import protect from '../middleware/auth.js';


const userRoutes = express.Router();

userRoutes.get('/getAllUsers',protect,getAllUsers);
userRoutes.post('/createUser', createUser);
userRoutes.get('/getsingleUser/:id', singleUser);
userRoutes.put('/updateUser/:id', updateUser);
userRoutes.delete('/deleteUser/:id', deleteUser);


export default userRoutes;
