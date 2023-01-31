import FilterBar from "../../components/FilterBar/FilterBar";
import Product from "../../components/Product/Product";
import { products } from "../../data/products";
import { Container, ProductsWrapper } from "./styles";

const Products = () => {
  return (
    <ProductsWrapper>
      <Container>
        <FilterBar />
        <div>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </ProductsWrapper>
  );
};

export default Products;
