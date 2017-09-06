import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchSingleProduct } from '../actions/actions';
import ProductDetail from '../components/ProductDetail';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.productId = props.match.params.id;
        this.dispatch = props.dispatch;
    }

    componentDidMount() {
        this.dispatch(fetchSingleProduct(this.productId));
    }

    render() {
        const { isFetchingSingleProduct, product } = this.props;
        return (
            <div>
                { !isFetchingSingleProduct && product &&
                    <ProductDetail {...product} />
                }
            </div>
        );
    }
}

Detail.propTypes = {
    dispatch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    isFetchingSingleProduct: PropTypes.bool,
    product: PropTypes.object
};

function mapStateToProps( state ) {
    const { isFetchingSingleProduct, product } = state;
    return {
        isFetchingSingleProduct,
        product
    };
}

export default connect(mapStateToProps)(Detail);
