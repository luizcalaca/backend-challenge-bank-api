const express = require('express');
const app = express();
const port = 4000;
const crypt = require('crypto');

app.use(express.json());

const contas = [
  { numero: 12345, saldo: 1000, user: 'jorge', token: [] },
  { numero: 54321, saldo: 500, user: 'maria', token: [] },
  { numero: 98765, saldo: 2500, user: 'teresa', token: [] },
];

app.post('/contas', (req, res) => {
  const { numero, saldo, user } = req.body;

  if (!numero || !saldo || !user) {
    return res
      .status(400)
      .send('É necessário fornecer número, saldo e usuário.');
  }

  const existingAccount = contas.find((conta) => conta.user === user);

  if (existingAccount) {
    return res.status(409).send('Essa conta já está cadastrada.');
  }

  contas.push({ numero, saldo, user, token: [] });
  return res.sendStatus(200);
});

// Rota para autenticar e obter um token
// Faça a validação se user existe
//Verificar se um user existe e então gerar o token utilizando a biblioteca crypto, com crypt.randomUUID()
// SE a conta não existe retorna que não foi encontrada
// A saída final aqui é um token, que, pode ser anexado dentro do array de contas e especificamente para um user que fez a autenticação
app.post('/auth', (req, res) => {
  const { user } = req.body;

  if (!user) return res.status(400).send('É necessário fornecer o usuário.');
});

// Rota para realizar o débito entre contas
// Se o token não for fornecido retorne uma mensagem de erro
// Se a conta de origem ou destino não existirem retorne um mensagem de erro
// Se o valor for nulo retorne uma mensagem de erro
// Se o valor a ser transferido for maior que o que há na conta de origem, então, retorne que o saldo é insuficiente
// Se a contas forem encontradas no array e o valor for possível de ser retirado da conta de origem, então, faça a operação de debitar da conta de origem e creditar na conta de destino
// Por fim, se tu ocorrer bem, retorne o status 200 ao final.
app.post('/transfer', (req, res) => {
  const { origem, destino, valor } = req.body;
  const token = req.headers['authentication-headers'];
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
