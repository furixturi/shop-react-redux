import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    fetchCategories
} from '../actions/actions';

import Home from '../components/Home';

class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        this.props.dispatch(fetchCategories());
    }

    render() {
        const { categories, products, isFetchingCategories, isFetchingProducts } = this.props;

        return (
            <div>
                {!isFetchingCategories && products.length > 0 &&
                 !isFetchingProducts && products.length > 0 &&
                    <Home categories={categories} products={products} />
                };
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
