import { useContext, useState } from "react";
import "./style.css";
import { ProductContext } from "../../contexts/ProductsContext";

function FilterProducts() {
    const {filterProductsArr, setFilterProductsArr} = useContext(ProductContext)

  function valueInput(event) {
    const value = event.target.value;
    if (event.target.checked) {
      setFilterProductsArr([...filterProductsArr, value]);
    } else {
      setFilterProductsArr(filterProductsArr.filter((item) => item !== value));
    }
  }

  return (
    <aside className="filter-container">
      <h2>Filtrar por</h2>
      <div className="filter-group">
        <h3>Marca</h3>
        <div className="filter-item">
          <input
            onChange={valueInput}
            id="adidas"
            type="checkbox"
            value="adidas"
          />
          <label htmlFor="adidas">Adidas</label>
        </div>
        <div className="filter-item">
          <input onChange={valueInput} type="checkbox" value="calenciaga" />
          <label>Calenciaga</label>
        </div>
        <div className="filter-item">
          <input onChange={valueInput} type="checkbox" value="k-swiss" />
          <label>K-Swiss</label>
        </div>
        <div className="filter-item">
          <input onChange={valueInput} type="checkbox" value="nike" />
          <label>Nike</label>
        </div>
        <div className="filter-item">
          <input onChange={valueInput} type="checkbox" value="puma" />
          <label>Puma</label>
        </div>
      </div>
      <div className="filter-group">
        <h3>Categoria</h3>
        <div className="filter-item">
          <input type="checkbox" value="esporte" />
          <label>Esporte e lazer</label>
        </div>
        <div className="filter-item">
          <input type="checkbox" value="casual" />
          <label>Casual</label>
        </div>
        <div className="filter-item">
          <input type="checkbox" value="utilitario" />
          <label>Utilitário</label>
        </div>
        <div className="filter-item">
          <input type="checkbox" value="corrida" />
          <label>Corrida</label>
        </div>
      </div>
      <div className="filter-group">
        <h3>Gênero</h3>
        <div className="filter-item">
          <input type="checkbox" value="masculino" />
          <label>Masculino</label>
        </div>
        <div className="filter-item">
          <input type="checkbox" value="feminino" />
          <label>Feminino</label>
        </div>
        <div className="filter-item">
          <input type="checkbox" value="unisex" />
          <label>Unisex</label>
        </div>
      </div>
      <div className="filter-group">
        <h3>Estado</h3>
        <div className="filter-item">
          <input name="estado" type="radio" value="novo" />
          <label>Novo</label>
        </div>
        <div className="filter-item">
          <input name="estado" type="radio" value="usado" />
          <label>Usado</label>
        </div>
      </div>
    </aside>
  );
}

export default FilterProducts;
