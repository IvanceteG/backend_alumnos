import Alumno from '../models/Alumno.js';

export const getAllAlumnos = async (req, res) => {
  const alumnos = await Alumno.find().sort({ createdAt: -1 });
  res.json(alumnos);
};

export const getAlumnoById = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  if (!alumno) return res.status(404).json({ error: 'Alumno no encontrado' });
  res.json(alumno);
};

export const createAlumno = async (req, res) => {
  const alumno = await new Alumno(req.body).save();
  res.status(201).json(alumno);
};

export const updateAlumno = async (req, res) => {
  const alumno = await Alumno.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!alumno) return res.status(404).json({ error: 'Alumno no encontrado' });
  res.json(alumno);
};

export const deleteAlumno = async (req, res) => {
  const alumno = await Alumno.findByIdAndDelete(req.params.id);
  if (!alumno) return res.status(404).json({ error: 'Alumno no encontrado' });
  res.json({ message: 'Alumno eliminado', alumno });
};
