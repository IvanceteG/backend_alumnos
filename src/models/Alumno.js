import mongoose from 'mongoose';

const alumnoSchema = new mongoose.Schema({
  nombre:    { type: String, required: true, trim: true },
  apellidos: { type: String, required: true, trim: true },
  promocion: { type: String, required: true, trim: true },
  ciclo:     { type: String, required: true, enum: ['DAW', 'SMX', 'ARI', 'IEA'] },
  urlImagen: { type: String, required: true, trim: true },
}, { timestamps: true });

export default mongoose.model('Alumno', alumnoSchema);
