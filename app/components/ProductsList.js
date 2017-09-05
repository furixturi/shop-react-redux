import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './Product';

class ProductsList extends React.Component {
    render() {
        const productComponents = this.props.products.map((product) => {
            return (
                <Link to = {'detail/' + product.id} key = {product.id}>
                    <Product
                        isSoldOut = {product.isSoldOut}
                        image = {product.image}
                        name = {product.name}
                        like_count = {product.like_count}
                        price = {product.price} />
                </Link>
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

