import express from 'express';
import { getAllAlumnos, getAlumnoById, createAlumno, updateAlumno, deleteAlumno } from '../controllers/alumnos.controller.js';

const router = express.Router();

router.get('/', getAllAlumnos);
router.get('/:id', getAlumnoById);
router.post('/', createAlumno);
router.put('/:id', updateAlumno);
router.delete('/:id', deleteAlumno);

export default router;
