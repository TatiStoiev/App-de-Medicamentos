import { IPacienteModel } from './../../interfaces/pacientes/IPacienteModel';
import sequelizePaciente from "./sequelizePaciente";
import { IPaciente } from "../../interfaces/pacientes/IPaciente";
import { data } from '../../types/PacienteTypes';
import { IPacienteSemSenha } from '../../interfaces/pacientes/IPacienteSemSenha'

export default class PacienteModel implements IPacienteModel {
    private model = sequelizePaciente; 

    async create(data: data): Promise<IPacienteSemSenha> {
        const result = await this.model.create(data);

        const { id, nome, email }: IPaciente = result;
        return { id, nome, email }
    }

    async findByEmail(email: string): Promise<IPacienteSemSenha | null> {
        const result = await this.model.findOne({ where: { email: email } })
        if (result === null) return null;

        const { id, nome } = result;
        return { id, nome, email };        
    }
}