import { Container } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import Product from "./Product";

const Cart = () => {
    const cartItems = useAppSelector(state => state.cart);
    
    return (
        <Container>
            {cartItems.length === 0 && <p>Your cart is empty</p>}
            {cartItems.map((item) => (
                <Product {...item}/>
            ))}
        </Container>
    );
};

export default Cart;
