const Product = (props) => {
    const { image, title } = props;

    return (
        <section className="Detail">
            <article className="Detail-thumbnail">
                <img src={image} alt={title}></img>
            </article>
        </section>
    );
};

export default Product;
