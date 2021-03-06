import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    fetchCategories
} from '../actions/actions';

import HomeComponent from '../components/HomeComponent';

class Home extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        this.props.dispatch(fetchCategories());
    }

    render() {
        const { categories, products, isFetchingCategories, isFetchingProducts, selectedCategoryId } = this.props;

        return (
            <div>
                {!isFetchingCategories && products.length > 0 &&
                 !isFetchingProducts && products.length > 0 &&
                    <HomeComponent
                        categories={categories} products={products}
                        selectedCategoryId={selectedCategoryId} />
                }
            </div>
        );
    }
}

Home.propTypes = {
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

export default connect(mapStateToProps)(Home);
