import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { addToCart, removeFromCart } from '../features/cartSlice'

const Product = (props) => {
    const { image, title, price, rating, description, quantity } = props;
    const product = props;
    const cartItems = props.cartItems;
    const dispatch = useAppDispatch();
    const location = useLocation();

    const handleAddProduct = () => {
        dispatch(addToCart(product))
    }

    const handleRemoveProduct = () => {
        dispatch(removeFromCart(product))
    }

    return (
        <section className="Detail">
            <article className="Detail-thumbnail">
                <img src={image} alt={title}></img>
            </article>

            <article className="Detail-info">
                <div className="Detail-info-header">
                    <h2>{title}</h2>
                    <h2>{quantity ? `Quantity: ${quantity}` : ""}</h2>
                </div>
                <div className="Detail-info">
                    <span className="Detail-info-price">{price} €</span>
                    <span className="Detail-info-rating">Rating: {rating.rate}</span>
                </div>
                <p className="Detail-info-description">{description}</p>
                <Button variant='primary' onClick={handleAddProduct}>Add</Button>
                {location.pathname === '/cart' && <Button variant='danger' onClick={handleRemoveProduct}>Remove</Button>}
                {(cartItems.length > 0 && cartItems.find((item) => item.id === product.id)) && <Button variant='danger' onClick={handleRemoveProduct}>Remove</Button>}
            </article>
        </section>
    );
};

export default Product;
