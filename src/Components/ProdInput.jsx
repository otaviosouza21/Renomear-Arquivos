import React, { useRef } from "react";
import style from "../css/Prodinput.module.css";

const ProdInput = ({ relacaoCodigos, setCodigos, codigos, id }) => {

  React.useEffect(() => {
    const novoCodigo = {
      id: id,
      codigoInterno: relacaoCodigos.legado,
      codigoFornecedor: relacaoCodigos.fornecedor,
    };

    setCodigos((prevCodigos) => [...prevCodigos, novoCodigo]);
  }, []);

  return (
    <li className={style.input}>
      <p>{relacaoCodigos.fornecedor}</p>
      <input
        value={relacaoCodigos.legado}
        type="text"
        name=""
        id=""
      />
    </li>
  );
};

export default ProdInput;
