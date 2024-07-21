import styles from './product.module.scss';
import { Product } from '@/app/routing/productlist/page';
import { ProductCard } from '../product-card/ProductCard';

export const ProductList = ({ products }: any) => {
    return (
        <>
            {products.map((product: Product) => {
                return (
                    <ProductCard key={product.id} product={product} /> // { product: product }
                );
            })}
        </>
    );
};

