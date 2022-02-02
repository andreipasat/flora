import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/feed-reducer';
import  Product from './Product'

const ProductsFeed = (props) => {
    const {products, error, loading} = useSelector(state => state.feed);
    //console.log(products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    if (loading) {
        return <h1>Loading ...</h1>
    }

    if (error.length) {
        return <h1>{error}</h1>
    }

    return (
        <div className="row">
            {products.map(product => 
                <Product key={product.id} name={product.name} price={product.price} image={product.image} />
            )}
        </div>
    )
}

export default ProductsFeed;