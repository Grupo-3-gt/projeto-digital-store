import "./style.css";

function DetailCard({ product }) {
  console.log(product);
  return <p>{product.nome}</p>;
}

export default DetailCard;
