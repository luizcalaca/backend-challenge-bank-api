const request = require('supertest');
const app = require('../server'); // Substitua pelo caminho correto para o seu arquivo app.js

describe('Testes de Integração', () => {
  let token;
  it('Deve cadastrar uma nova conta', async () => {
    const newAccount = {
      numero: 99999,
      saldo: 1500,
      user: 'novoUsuario',
    };

    const response = await request(app)
      .post('/contas')
      .send(newAccount);

    expect(response.status).toBe(200);
  });

  // Teste para a rota de autenticação e obtenção de token
  it('Deve autenticar e obter um token', async () => {
    const user = 'jorge';

    const response = await request(app)
      .post('/auth')
      .send({ user });

    token = response.body.token
    expect(response.status).toBe(200);
    expect(response.body.token).toBeTruthy();
  });

  // Teste para a rota de transferência entre contas
  it('Deve realizar uma transferência entre contas', async () => {
    const origin = 12345; 
    const destination = 54321; 
    const amount = 200;

    const response = await request(app)
      .post('/transfer')
      .set('authentication-headers', token)
      .send({ origin, destination, amount });

    expect(response.status).toBe(200);
  });
});
