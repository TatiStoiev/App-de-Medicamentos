"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkInsert('pacientes', [
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
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('pacientes', {});
    }),
};
