import { IPaciente } from "./IPaciente";
import { IPacienteSemSenha } from '../../interfaces/pacientes/IPacienteSemSenha';

export interface IPacienteModel {
    create(data: Partial<IPaciente>): Promise<IPacienteSemSenha>,
    findByEmail(email: string): Promise<IPacienteSemSenha | null>,
}