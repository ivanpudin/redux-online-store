import { Button } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { addToCart } from '../features/cartSlice'

const Product = (props) => {
    const { image, title, price, rating, description } = props;
    const product = props;
    const dispatch = useAppDispatch();

    const handleAddProduct = () => {
        dispatch(addToCart(product))
    }

    return (
        <section className="Detail">
            <article className="Detail-thumbnail">
                <img src={image} alt={title}></img>
            </article>

            <article className="Detail-info">
                <div className="Detail-info-header">
                    <h2>{title}</h2>
                </div>
                <div className="Detail-info">
                    <span className="Detail-info-price">{price} €</span>
                    <span className="Detail-info-rating">Rating: {rating.rate}</span>
                </div>
                <p className="Detail-info-description">{description}</p>
                <Button variant='primary' onClick={handleAddProduct}>Add to cart</Button>
            </article>
        </section>
    );
};

export default Product;
