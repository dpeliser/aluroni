import React from "react";
import filtros from "./filtros.json";
import styles from "./Filtros.module.scss";
import classNames from 'classnames';

type IFiltro = typeof filtros[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {
  function selecionarFiltro(item: IFiltro) {
    if (filtro === item.id) {
      return setFiltro(null);
    }
    return setFiltro(item.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((item) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === item.id
          })}
          key={item.id}
          onClick={() => selecionarFiltro(item)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
