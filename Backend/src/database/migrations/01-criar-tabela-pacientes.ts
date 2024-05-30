import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IPaciente } from '../../interfaces/pacientes/IPaciente';

export default {
    up(queryInterface: QueryInterface) {
      return queryInterface.createTable<Model<IPaciente>>('pacientes', {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
        email: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING, 
            allowNull: false,
        }   
      });
    },
    down(queryInterface: QueryInterface) {
      return queryInterface.dropTable('pacientes');
    },
  };