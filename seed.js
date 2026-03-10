import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Alumno from './src/models/Alumno.js';

dotenv.config();

const alumnos = [
  { nombre: 'Anna',  apellidos: 'García López',    promocion: '2024/2025', ciclo: 'DAW', urlImagen: 'https://i.pravatar.cc/150?img=1' },
  { nombre: 'Marc',  apellidos: 'Martínez Puig',   promocion: '2024/2025', ciclo: 'DAW', urlImagen: 'https://i.pravatar.cc/150?img=2' },
  { nombre: 'Laia',  apellidos: 'Fernández Torres', promocion: '2024/2025', ciclo: 'SMX', urlImagen: 'https://i.pravatar.cc/150?img=3' },
  { nombre: 'Pau',   apellidos: 'Soler Vidal',      promocion: '2023/2024', ciclo: 'ARI', urlImagen: 'https://i.pravatar.cc/150?img=4' },
  { nombre: 'Marta', apellidos: 'Roca Mas',         promocion: '2023/2024', ciclo: 'DAW', urlImagen: 'https://i.pravatar.cc/150?img=5' },
  { nombre: 'Jordi', apellidos: 'Camps Sala',       promocion: '2023/2024', ciclo: 'IEA', urlImagen: 'https://i.pravatar.cc/150?img=6' },
  { nombre: 'Sara',  apellidos: 'Pons Oliver',      promocion: '2022/2023', ciclo: 'SMX', urlImagen: 'https://i.pravatar.cc/150?img=7' },
  { nombre: 'Oriol', apellidos: 'Bosch Nadal',      promocion: '2022/2023', ciclo: 'DAW', urlImagen: 'https://i.pravatar.cc/150?img=8' },
];

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Conectado a MongoDB Atlas');

  await Alumno.deleteMany({});
  console.log('Colección limpiada');

  await Alumno.insertMany(alumnos);
  console.log(`${alumnos.length} alumnos insertados`);

  await mongoose.disconnect();
  console.log('Desconectado');
};

seed().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
