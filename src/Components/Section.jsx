import React from "react";
import ProdInput from "./ProdInput";
import style from "../css/Section.module.css";
import Renomear from "./Renomear";

const Section = ({ produtos }) => {
  const [filtro, setFiltro] = React.useState(null);
  const [codigos, setCodigos] = React.useState([]);
  const [renomear, setRenomear] = React.useState(false);

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

  function handleClick() {
    setRenomear(true);
  }

  return (
    <div className={style.section}>
      Fornecedor:
      <select onChange={handleChange} name="" id="">
        {arraySemDuplicatas &&
          arraySemDuplicatas.map((prod, id) => {
            return (
              <option key={id} value={prod["Nome Fornecedor"]}>
                {prod["Nome Fornecedor"]}
              </option>
            );
          })}
      </select>
      <button onClick={handleClick}>Renomear</button>
      <ul className={style.sectionList}>
        {filtro &&
          filtro.map((prod, id) => {
            const relacaoCodigos = {
              fornecedor: prod["Produto Fornecedor"],
              legado: prod["Cód. Legado"],
            };

            return (
              <ProdInput
                key={id}
                id={id}
                relacaoCodigos={relacaoCodigos}
                setCodigos={setCodigos}
                codigos={codigos}
                renomear={renomear}
              />
            );
          })}
      </ul>
      {renomear && <Renomear codigos={codigos} />}
    </div>
  );
};

export default Section;
