import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    fetchCategories
} from '../actions/actions';

import Product from '../components/Product';

class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchCategories());
    }

    render() {
        const { categories, products, isFetchingCategories, isFetchingProducts } = this.props;

        let categoryComponents = [];
        let productComponents = [];
        if(!isFetchingCategories && categories.length > 0) {
            categoryComponents = categories.map((category) => {
                return (
                    <li key={category.id}><a href="#">{category.name}</a></li>
                );
            });
        }

        if(!isFetchingProducts && products.length > 0) {
            productComponents = products.map((product) => {
                return (
                    <Product key = {product.id}
                        isSoldOut = {product.isSoldOut}
                        image = {product.image}
                        name = {product.name}
                        like_count = {product.like_count}
                        price = {product.price} />
                );
            });
        }

        return (
            <div>
                {(!isFetchingCategories && products.length > 0) &&
                    <ul className="categories">{categoryComponents}</ul>}
                {(!isFetchingProducts && products.length > 0) && <div>{productComponents}</div>}
            </div>
        );
    }
}

App.propTypes = {
    isFetchingCategories: PropTypes.bool,
    isFetchingProducts: PropTypes.bool,
    selectedCategoryId: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    const { isFetchingCategories, isFetchingProducts, categories, products, selectedCategoryId } = state;

    return {
        isFetchingCategories,
        isFetchingProducts,
        selectedCategoryId,
        categories,
        products
    };
}

export default connect(mapStateToProps)(App);
