import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import '../styles/components/ProductDetail.scss';

class ProductDetail extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const likeCount = this.props.like_count;
        const likeCountStr = '' + (( !isNaN(likeCount) && likeCount > 0 ) ? likeCount : '');
        const commentCount = this.props.comment_count;
        const commentCountStr = '' + (( !isNaN(commentCount) && commentCount > 0 ) ? commentCount : '');

        return (
            <div className="product-detail">
                <header className="header">
                    <Link className="icon back icon-bracket icon-button back-button" to="/">back</Link>
                    <div className="title">{this.props.name}</div>
                    <div className="buttons">
                        <a href="#" className="icon search icon-button icon-magnifier search-button">search</a>
                        <a href="#" className="icon export icon-button icon-export export-button">export</a>
                    </div>
                </header>
                <div className="detail">
                    <div className="image-container">
                        <img src={this.props.image} />
                    </div>
                    <div className="product-info">
                        <div className="product-name">{this.props.name}</div>
                        <div className="buttons">
                            <div className="left">
                                <span className="like">
                                    <a href="#" className="icon heart icon-heart button-with-icon">いいね！</a>
                                    {likeCountStr}
                                </span>
                                <span className="comment">
                                    <a href="#" className="icon comment icon-comment button-with-icon">コメント</a>
                                    {commentCountStr}
                                </span>
                            </div>
                            <div className="right">
                                <a href="#" className="icon flag icon-flag icon-button">flag</a>
                            </div>
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
    like_count: PropTypes.number,
    comment_count: PropTypes.number
};

export default ProductDetail;
