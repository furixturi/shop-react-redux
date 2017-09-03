import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    fetchCategories,
    fetchProductsIfNeeded
} from '../actions/actions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchCategories());
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedCategoryId !== prevProps.selectedCategoryId) {
            const { dispatch, selectedCategoryId } = this.props;
            dispatch(fetchProductsIfNeeded(selectedCategoryId));
        }
    }

    render() {
        const { categories, products } = this.props;
        return (
            <div>
                {categories.isFetching && categories.items.length === 0 && <h2>Loading categories</h2>}
                {products.isFetching && products.items.length === 0 && <h2>Loading products</h2>}
                {categories.items.lengh > 0 && <h2>categories loaded</h2>}
                {products.items.lengh > 0 && <h2>categories loaded</h2>}
            </div>
        );
    }
}

App.propTypes = {
    selectedCategoryId: PropTypes.string.isRequired,
    categories: PropTypes.object.isRequired,
    products: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    const { categories, selectedCategoryId } = state;
    const products = state.productsByCategory[selectedCategoryId] || {
        isFetching: true,
        items: []
    };

    return {
        selectedCategoryId,
        categories,
        products
    };
}

export default connect(mapStateToProps)(App);
