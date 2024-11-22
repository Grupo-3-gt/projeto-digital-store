import { useContext, useEffect } from "react";
import "./style.css";
import { ProductContext } from "../../contexts/ProductsContext";

function FilterProducts({ openFilter, setOpenFilter }) {
  const { filterProductsObj, setFilterProductsObj, resetFilter } =
    useContext(ProductContext);

  function valueInputMark(event) {
    const value = event.target.value;
    const currentMark = filterProductsObj.mark;
    if (event.target.checked) {
      setFilterProductsObj((prevState) => ({
        ...prevState,
        mark: [...currentMark, value],
      }));
    } else {
      setFilterProductsObj((prevState) => ({
        ...prevState,
        mark: currentMark.filter((item) => item !== value),
      }));
    }
  }

  function valueInputCategory(event) {
    const value = event.target.value;
    const currentCategory = filterProductsObj.category;
    if (event.target.checked) {
      setFilterProductsObj((prevState) => ({
        ...prevState,
        category: [...currentCategory, value],
      }));
    } else {
      setFilterProductsObj((prevState) => ({
        ...prevState,
        category: currentCategory.filter((item) => item !== value),
      }));
    }
  }

  function valueInputGender(event) {
    const value = event.target.value;
    const currentGender = filterProductsObj.gender;
    if (event.target.checked) {
      setFilterProductsObj((prevState) => ({
        ...prevState,
        gender: [...currentGender, value],
      }));
    } else {
      setFilterProductsObj((prevState) => ({
        ...prevState,
        gender: currentGender.filter((item) => item !== value),
      }));
    }
  }

  function valueInputState(event) {
    const value = event.target.value;

    setFilterProductsObj((prevState) => ({
      ...prevState,
      state: [value],
    }));
  }

  useEffect(() => {
    return () => {
      resetFilter();
    };
  }, []);

  return (
    <aside
      className={`filter-container ${openFilter ? "filter-display" : ""}`}
    >
      <div className="filter-box">
        <div className="header-filter">
          <h2>Filtrar por</h2>
          <button onClick={() => setOpenFilter(false)}>X</button>
        </div>
        <div className="filter-group">
          <h3>Marca</h3>
          <div className="filter-item">
            <input
              onChange={valueInputMark}
              id="adidas"
              type="checkbox"
              value="adidas"
            />
            <label htmlFor="adidas">Adidas</label>
          </div>
          <div className="filter-item">
            <input
              onChange={valueInputMark}
              type="checkbox"
              value="balenciaga"
            />
            <label>Balenciaga</label>
          </div>
          <div className="filter-item">
            <input onChange={valueInputMark} type="checkbox" value="k-swiss" />
            <label>K-Swiss</label>
          </div>
          <div className="filter-item">
            <input onChange={valueInputMark} type="checkbox" value="nike" />
            <label>Nike</label>
          </div>
          <div className="filter-item">
            <input onChange={valueInputMark} type="checkbox" value="puma" />
            <label>Puma</label>
          </div>
        </div>
        <div className="filter-group">
          <h3>Categoria</h3>
          <div className="filter-item">
            <input
              onChange={valueInputCategory}
              type="checkbox"
              value="1"
            />
            <label>Esporte e lazer</label>
          </div>
          <div className="filter-item">
            <input
              onChange={valueInputCategory}
              type="checkbox"
              value="2"
            />
            <label>Casual</label>
          </div>
          <div className="filter-item">
            <input
              onChange={valueInputCategory}
              type="checkbox"
              value="3"
            />
            <label>Utilitário</label>
          </div>
          <div className="filter-item">
            <input
              onChange={valueInputCategory}
              type="checkbox"
              value="4"
            />
            <label>Corrida</label>
          </div>
        </div>
        <div className="filter-group">
          <h3>Gênero</h3>
          <div className="filter-item">
            <input
              onChange={valueInputGender}
              type="checkbox"
              value="masculino"
            />
            <label>Masculino</label>
          </div>
          <div className="filter-item">
            <input
              onChange={valueInputGender}
              type="checkbox"
              value="feminino"
            />
            <label>Feminino</label>
          </div>
          <div className="filter-item">
            <input onChange={valueInputGender} type="checkbox" value="unisex" />
            <label>Unissex</label>
          </div>
        </div>
        <div className="filter-group">
          <h3>Estado</h3>
          <div className="filter-item">
            <input
              onChange={valueInputState}
              name="estado"
              type="radio"
              value="novo"
            />
            <label>Novo</label>
          </div>
          <div className="filter-item">
            <input
              onChange={valueInputState}
              name="estado"
              type="radio"
              value="usado"
            />
            <label>Usado</label>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default FilterProducts;
