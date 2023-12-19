import React from "react";

const Renomear = ({ codigos }) => {
  const handleRenomearClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/renomear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ codigos }),
      });

      if (!response.ok) {
        throw new Error(`Erro ao renomear arquivos: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data.message); // Mensagem da API
    } catch (error) {
      console.error("Erro na solicitação:", error.message);
    }
  };
  
  handleRenomearClick();

  return;
};

export default Renomear;
