import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import alumnosRoutes from './routes/alumnos.routes.js';

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Alumnos', version: '1.0.0' });
});

app.use('/api/alumnos', alumnosRoutes);

app.use((req, res) => res.status(404).json({ error: 'Ruta no encontrada' }));

const start = async () => {
  await connectDB();
  app.listen(process.env.PORT || 3001, () => {
    console.log(`🚀 Servidor en http://localhost:${process.env.PORT || 3001}`);
  });
};

start();
