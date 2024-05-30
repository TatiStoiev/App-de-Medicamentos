import { QueryInterface } from 'sequelize';
export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('pacientes', [
        {
            "nome": "João Silva",
            "email": "joao.silva@example.com",
            "senha": "senha123"
          },
          {
            "nome": "Maria Oliveira",
            "email": "maria.oliveira@example.com",
            "senha": "senha456"
          },
          {
            "nome": "Pedro Santos",
            "email": "pedro.santos@example.com",
            "senha": "senha789"
          },
          {
            "nome": "Ana Costa",
            "email": "ana.costa@example.com",
            "senha": "senhaabc"
          }
        ], {});
    },
    down: async (queryInterface: QueryInterface) => {
      await queryInterface.bulkDelete('pacientes', {});
    },
  };
