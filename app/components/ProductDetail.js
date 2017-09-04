import React from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="product-detail">
                <header className="header">
                    <a href="#" className="icon back icon-button back-button">back</a>
                    <div className="title">{this.props.name}</div>
                    <div className="buttons">
                        <a href="#" className="icon search icon-button search-button">search</a>
                        <a href="#" className="icon export icon-button export-button">export</a>
                    </div>
                </header>
                <div className="detail">
                    <div className="image-container">
                        <img src={this.props.image} />
                    </div>
                    <div className="product-name">{this.props.name}</div>
                    <div className="buttons">
                        <div className="left">
                            <span className="like">
                                <a href="#" className="icon heart button-with-icon">いいね！</a>
                                {this.props.like_count}
                            </span>
                            <span className="comment">
                                <a href="#" className="icon comment button-with-icon">コメント</a>
                                {this.props.comment_count}
                            </span>
                        </div>
                        <div className="right">
                            <a href="#" className="icon flag icon-button">flag</a>
                        </div>
                    </div>
                    <div className="description">
                        <div className="description-header">商品の説明</div>
                        <div className="description-body">{this.props.description}</div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="price">
                        {this.props.price}
                        <span className="small">{this.props.shippingFee}</span>
                    </div>
                    <a href="#" className="button-red">購入手続きへ</a>
                </footer>
            </div>
        );
    }
}

ProductDetail.propTypes = {
    price: PropTypes.string.isRequired,
    shippingFee: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    comment_count: PropTypes.number.isRequired
};

export default ProductDetail;
