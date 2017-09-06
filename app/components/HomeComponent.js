import React from 'react';
import PropTypes from 'prop-types';

import Categories from './Categories';
import ProductsList from './ProductsList';

import '../styles/components/HomeComponent.scss';

class HomeComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <header>
                    <div className="ui-bar">
                        <a href="#" className="icon icon-nudge icon-button">navi</a>
                        <input type="text" placeholder="検索" />
                        <a href="#" className="icon icon-bell icon-button">notification</a>
                        <a href="#" className="icon icon-checkmark icon-button">checked</a>
                    </div>
                    <Categories categories = {this.props.categories}
                        selectedCategoryId = {this.props.selectedCategoryId} />
                    <a href="#" className="icon icon-arrow new-products-button">新しい商品</a>
                </header>
                <ProductsList products = {this.props.products} />
                <footer>
                    <a href="#" className="icon icon-camera sell-button rounded "><span>出品</span></a>
                </footer>
            </div>
        );
    }
}

HomeComponent.propTypes = {
    products: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    selectedCategoryId: PropTypes.string.isRequired
};

export default HomeComponent;
