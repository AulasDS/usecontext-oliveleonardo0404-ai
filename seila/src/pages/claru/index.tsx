import styles from './style.module.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Clarus() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const res = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,currencies')
        setProducts(res.data);
        console.log(res.data);
    }

    return (
        <>
            <h1 className={styles.products}>Lista dos produtos</h1>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                { products.map((product: any) => (
                    <div className="col" key={product.name}>
                        <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">{product.name.common} - {product.name.official}</h5>
                            <p className="card-text">{product.capital}</p>
                            <p className="card-text">Moeda:{product.currencies[0]}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </>
    );
}