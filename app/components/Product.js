import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className={'product' + (this.props.isSoldOut ? ' sold-out' : '')}>
                <div className = "image-container">
                    <img src={this.props.image} />
                </div>
                <div className = "info-container">
                    <div className="product-name">{this.props.name}</div>
                    <div className="price">{this.props.price}</div>
                    {this.props.like_count > 0 &&
                        <div className="like-count">
                            <span href="#" className="icon icon-heart icon-button"></span>
                            {this.props.like_count}</div>
                    }
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    price: PropTypes.string.isRequired,
    isSoldOut: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired
};

export default Product;
