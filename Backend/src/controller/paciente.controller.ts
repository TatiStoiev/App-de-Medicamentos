import { Request, Response } from 'express';
import PacienteService from '../service /paciente.service';
import mapStatusHTTP from '../utils/mapStatusHttp';

export default class PacienteController {
    constructor(
        private pacienteController = new PacienteService()
    ) {}

    public async cadastraPaciente(req: Request, res: Response) {
        const paciente = await this.pacienteController.cadastraPaciente(req.body);
        return res.status(200).json(paciente.data);
    }

    public async encontraPaciente(req: Request, res: Response) {
        const { email } = req.body;
        const paciente = await this.pacienteController.encontraPaciente(email);
        if (paciente.status === 'NOT_FOUND') {
            return res.status(mapStatusHTTP(paciente.status)).json(paciente.data);
        }
        res.status(200).json(paciente.data);
    }
}