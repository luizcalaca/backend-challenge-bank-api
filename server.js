const app = require('./index')
const port = 4000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });

module.exports = app