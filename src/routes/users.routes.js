import express from 'express';
import { getUsers, createUsers, getOneUser } from '../controllers/users.controllers.js';
export const usersRouter = express.Router();

usersRouter.get('/users', getUsers );
usersRouter.get('/users/:id', getOneUser);
usersRouter.post('/users', createUsers )