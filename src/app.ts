

import express from 'express';
import cors from 'cors';
import authProfileRouter from './routes/authProfileRoute';


const app = express();

app.use(express.json());

// Health check route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// API routes
app.use('/', authProfileRouter);


export default app;
