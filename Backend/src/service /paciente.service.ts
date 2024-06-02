import PacienteModel from "../database/models/pacienteModel";
import { ServiceResponse } from "../interfaces/ServiceResponse";
import { IPacienteModel } from "../interfaces/pacientes/IPacienteModel";
import { IPacienteSemSenha } from "../interfaces/pacientes/IPacienteSemSenha";
import { data } from "../types/PacienteTypes";

export default class PacienteService {
    constructor(
        private pacienteModel: IPacienteModel = new PacienteModel()
    ) {}
    
    public async cadastraPaciente(data: data): Promise<ServiceResponse<IPacienteSemSenha>> {
        const novoPaciente = await this.pacienteModel.create(data);
        return { status: 'SUCCESSFUL', data: novoPaciente };
    }

    public async encontraPaciente(email: string): Promise<ServiceResponse<IPacienteSemSenha>> {
        const paciente = await this.pacienteModel.findByEmail(email);
        if (!paciente) {
            return { status: 'NOT_FOUND', data: { message: 'Paciente não encontrado' } }
        }
        return { status: 'SUCCESSFUL', data: paciente }
    }
} 