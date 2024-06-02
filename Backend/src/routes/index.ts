import { Router } from 'express';
import PacienteRouter from './paciente.routes';

const router = Router();

router.use('/pacientes', PacienteRouter);

export default router;
