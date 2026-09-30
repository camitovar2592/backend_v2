import express from 'express'
import {connectDB} from './src/config/db.config.js';
import {env} from './src/config/env.config.js';
const app = express();

connectDB();

app.get('/health', (req, res)=>{
    res.send('FUNCIONA')
})




app.listen( env.PORT, ()=>{
    console.log('Server running on port 3000')
})