import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from '.';

  class sequelizePaciente extends Model<InferAttributes<sequelizePaciente>,InferCreationAttributes<sequelizePaciente>> {
    declare id: CreationOptional<number>; 
    declare nome: string;
    declare email: string; 
    declare senha: string;
  }

  sequelizePaciente.init({
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
      },
    }, {
        sequelize: db, 
        modelName: 'pacientes',
        tableName: 'pacientes', 
        timestamps: false, 

  })

  export default sequelizePaciente;

