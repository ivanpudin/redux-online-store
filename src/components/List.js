import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/productsSlice";
import Product from "./Product";

const List = () => {
    const products = useAppSelector(state => state.products.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div>
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
};

export default List;
