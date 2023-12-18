import React from "react";
import ProdInput from "./ProdInput";
import style from "../css/Section.module.css";

const Section = ({ produtos }) => {
  const [filtro, setFiltro] = React.useState(null);
  const [codigos, setCodigos] = React.useState([]);

  const arraySemDuplicatas = produtos.filter((valor, indice, array) => {
    const indicePrimeiraOcorrencia = array.findIndex(
      (item) => item["Nome Fornecedor"] === valor["Nome Fornecedor"]
    );

    return indice === indicePrimeiraOcorrencia;
  });

  function handleChange({ target }) {
    const value = target.value;
    const filtrado = produtos.filter((prod) => {
      return prod["Nome Fornecedor"] === value;
    });
    setFiltro(filtrado);
  }

  return (
    <div className={style.section}>
      Fornecedor:
      <select onChange={handleChange} name="" id="">
        {arraySemDuplicatas &&
          arraySemDuplicatas.map((prod) => {
            return (
              <option value={prod["Nome Fornecedor"]}>
                {prod["Nome Fornecedor"]}
              </option>
            );
          })}
      </select>
      <ul className={style.sectionList}>
        {filtro &&
          filtro.map((prod, id) => {
            return (
              <ProdInput
                id={id}
                codigo={prod["Produto Fornecedor"]}
                setCodigos={setCodigos}
                codigos={codigos}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Section;
