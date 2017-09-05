import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

class ProductsList extends React.Component {
    render() {
        const productComponents = this.props.products.map((product) => {
            return (
                <Product key = {product.id}
                    isSoldOut = {product.isSoldOut}
                    image = {product.image}
                    name = {product.name}
                    like_count = {product.like_count}
                    price = {product.price} />
            );
        });

        return (
            <div className="products-list">{productComponents}</div>
        );
    }
}

ProductsList.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductsList;

