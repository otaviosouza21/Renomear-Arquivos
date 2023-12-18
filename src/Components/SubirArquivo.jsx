import React from "react";
/* import style from "../estilo/css/SubirArquivo.module.css"; */
import ExcelConverter from "./ExcelConverter.jsx";

const SubirArquivo = () => {
  const [mandaFile, setMandaFile] = React.useState(null);


  // coleta o arquivo excel e grava a data da ultima modificação
  function handleChange(event) {
    const file = event.target.files[0];
    setMandaFile(file);
  }

  return (
    <div>
      <input
        id="fileInput"
        accept=".xlsx, .xls, .csv"
        type="file"
        onChange={handleChange}
      />

      {mandaFile && <ExcelConverter file={mandaFile} />}
    </div>
  );
};

export default SubirArquivo;
