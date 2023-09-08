const Product = (props) => {
    const { image, title, price, rating, description } = props;

    console.log('Props:', props);

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
            </article>
        </section>
    );
};

export default Product;
