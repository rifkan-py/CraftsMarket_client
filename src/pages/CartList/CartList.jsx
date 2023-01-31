import { CartListWrapper, Container } from "./styles";
import { ReactDOM } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adjustQty, remove } from "../../app/features/cartSlice";
import { Link } from "react-router-dom";

const CartList = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <CartListWrapper>
      <Container>
        {cart.products.length !== 0 && (
          <div>
            <h1>
              Total{" "}
              {cart.products
                .map((product) => product.total)
                .reduce((a, b) => a + b, 0)}
              .00
            </h1>
            <Link to="/checkout">Check out</Link>
          </div>
        )}

        <br />

        {cart.products.length !== 0 ? (
          <table>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>description</th>
              <th>price</th>
              <th>qty</th>
              <th>Total</th>
              <th></th>
            </tr>
            {cart.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <input
                    type="number"
                    name="qty"
                    id="qty"
                    value={product.qty}
                    min={0}
                    onChange={(e) =>
                      dispatch(
                        adjustQty({ id: product.id, value: e.target.value })
                      )
                    }
                  />
                </td>
                <td>{product.total}</td>
                <td>
                  <button onClick={() => dispatch(remove(product.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        ) : (
          <div>Cart List Empty</div>
        )}
      </Container>
    </CartListWrapper>
  );
};
export default CartList;
