import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    fetchCategories
} from '../actions/actions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchCategories());
    }

    render() {
        const { categories, products, isFetchingCategories, isFetchingProducts } = this.props;

        const categoriesState = (isFetchingCategories && categories.length === 0) ? 'Loading categories' : (categories.length + ' categories loaded');
        const productsState = (isFetchingProducts && products.length === 0) ? 'Loading products' : (products.length + ' products loaded');

        return (
            <div>
                <h2>{categoriesState}</h2>
                <h2>{productsState}</h2>
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
