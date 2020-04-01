const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const reponse = await request(app).post('./ongs').send({
            nome: "APAD",
            email: "aaaaa@teste.com",
            whatsapp: "4777477744",
            city: "Duque de Caxias",
            uf: "RJ"
        });

        expect(reponse.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});