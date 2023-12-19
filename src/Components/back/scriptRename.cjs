const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.post("/renomear", (req, res) => {
  const { codigos } = req.body;
  const pasta = "../img"; // Substitua pelo caminho real da sua pasta

  codigos.forEach((codigo) => {
    const antigoNome = `${codigo.codigoFornecedor}.jpg`;
    const novoNome = `${codigo.codigoInterno}.jpg`;

    const antigoCaminho = path.join(pasta, antigoNome);
    const novoCaminho = path.join(pasta, novoNome);

    // Renomeia o arquivo
    fs.rename(antigoCaminho, novoCaminho, (err) => {
      if (err) {
        console.error(`Erro ao renomear ${antigoCaminho}: ${err.message}`);
      } else {
        console.log(`Arquivo ${antigoCaminho} renomeado para ${novoCaminho}`);
        // Aqui você pode realizar operações adicionais após o arquivo ser renomeado
      }
    });
  });

  res.json({ message: "Operação de renomeação concluída com sucesso." });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
