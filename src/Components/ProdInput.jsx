import React, { useRef } from "react";
import style from "../css/Prodinput.module.css";

const ProdInput = ({ codigo, setCodigos, codigos, id }) => {
  const ref = useRef();

  function handleChange(event) {
    if (event.key === "Enter") {
      const novoCodigo = {
        id: id,
        codigoInterno: event.target.value,
        codigoFornecedor: codigo,
      };
      setCodigos((prevCodigos) => [...prevCodigos, novoCodigo]);
    }
  }

  console.log(codigos);

  return (
    <li className={style.input}>
      <p>{codigo}</p>
      <input ref={ref} onKeyDown={handleChange} type="text" name="" id="" />
    </li>
  );
};

export default ProdInput;
