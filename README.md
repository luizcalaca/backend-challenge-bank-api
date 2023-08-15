# Description

### Crie 3 rotas: com Javascript e Express.js rodando na porta 4000

1 - Cadastrar conta e para isso deve ser utilizar um array contas = [] com número, nome da pessoa e saldo

2 - Autenticar, em que, será retornado um token

3 - Realizar o débito entre conta, em que, deverá ser informado no corpo da requisição, a conta de origem, a conta de destino e o dinheiro a ser transferido, assim deverá ser debitado da conta de origem e creditado na conta de destino. Para fazer essa operação o usuário deverá ter um token, ou seja, deverá estar autenticado.

### Validações:

1 - Se o req.body no momento do cadastro estiver vazio enviar o status 400

2 - Se o user já existir no array de contas no momento do cadastro, então, enviará o status 409

3 - ao autenticar, o token deverá ser salvo dentro do array de contas, em um campo token = [].

3 - Se não houver o token no headers com o nome 'authentication-headers' no momento da transferência entre contas, então, deverá enviar o status 401

4 - Para todos os elementos que terminarem com sucesso o que é previsto em seu endpoint deverá enviar o status 200
\*Há outras validações que estão implicítas e podem ser feitas

```javascript
Exemplo de um objeto a ser salvo em contas = []:

const contas = [
{ numero: 12345, saldo: 1000, user: jorge},
{ numero: 54321, saldo: 500, user: maria },
{ numero: 98765, saldo: 2500, user: teresa },
];
```

SUA TAREFA É VERIFICAR O QUE O CÓDIGO ATUAL JÁ FAZ E ENTÃO ACRESCENTAR AS OUTRAS REGRAS RESTANTES

---
