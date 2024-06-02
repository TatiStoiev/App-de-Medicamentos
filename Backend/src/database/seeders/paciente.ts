import { QueryInterface } from 'sequelize';
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS;

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('pacientes', [
        {
            "nome": "João Silva",
            "email": "joao.silva@example.com",
            "senha": bcrypt.hashSync('chang3m3', SALT_ROUNDS)
          },
          {
            "nome": "Maria Oliveira",
            "email": "maria.oliveira@example.com",
            "senha": bcrypt.hashSync('chang3m3', SALT_ROUNDS)
          },
          {
            "nome": "Pedro Santos",
            "email": "pedro.santos@example.com",
            "senha": bcrypt.hashSync('chang3m3', SALT_ROUNDS)
          },
          {
            "nome": "Ana Costa",
            "email": "ana.costa@example.com",
            "senha": bcrypt.hashSync('chang3m3', SALT_ROUNDS)
          }
        ], {});
    },
    down: async (queryInterface: QueryInterface) => {
      await queryInterface.bulkDelete('pacientes', {});
    },
  };
