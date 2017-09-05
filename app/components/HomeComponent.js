import React from 'react';
import PropTypes from 'prop-types';

import Categories from './Categories';
import ProductsList from './ProductsList';
// import Product from './Product';

class HomeComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <header>
                    <div className = "header-bar"></div>
                    <Categories categories = {this.props.categories} />
                </header>
                <ProductsList products = {this.props.products} />
            </div>
        );
    }
}

HomeComponent.propTypes = {
    products: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
};

export default HomeComponent;
