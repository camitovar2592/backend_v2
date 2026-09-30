import express from 'express';
import {connectDB} from './src/config/db.config.js';
import {env} from './src/config/env.config.js';
import { usersRouter } from './src/routes/users.routes.js';
const app = express();

connectDB();

app.use(express.json());

app.use(usersRouter);

app.get('/health', (req, res)=>{
    res.send('FUNCIONA');
});

app.listen( env.port, ()=>{
    console.log('Server running on port 3000')
})