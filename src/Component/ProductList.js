import React from "react";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
const ProductList = ({ produits, handelclick, title }) => {
  return (
    <div>
      <h1> {title}</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {produits.map((elm, i) => (
          <ProductCard key={i} elmp={elm} handelclick={handelclick} />
        ))}
      </div>
    </div>
  );
};
ProductList.defaultProps = {
  title: "16",
};
ProductList.propTypes = {
  title: PropTypes.string,
};
export default ProductList;
