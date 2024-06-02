import { Request, Router, Response } from 'express';
import PacienteController from '../controller/paciente.controller';

const pacienteController = new PacienteController();

const PacienteRouter = Router();

PacienteRouter.post('/', (req: Request, res: Response) => pacienteController.cadastraPaciente(req, res));
PacienteRouter.get('/login', (req: Request, res: Response) => pacienteController.encontraPaciente(req, res));

export default PacienteRouter;