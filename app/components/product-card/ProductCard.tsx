export const ProductCard = ({ product }: any) => {
    return (
        <div>
            <img src={product.image} />
            <p>{product.title}</p>
        </div>
    );
};
