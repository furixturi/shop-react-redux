import { combineReducers } from 'redux';
import {
    REQUEST_CATEGORIES,
    RECEIVE_CATEGORIES,
    SELECT_CATEGORY,
    REQUEST_PRODUCTS,
    RECEIVE_PRODUCTS,
    REQUEST_SINGLE_PRODUCT,
    RECEIVE_SINGLE_PRODUCT
} from '../actions/actions';

function isFetchingCategories(state = false, action) {
    switch (action.type) {
        case REQUEST_CATEGORIES:
            return true;
        case RECEIVE_CATEGORIES:
            return false;
        default:
            return state;
    }
}

function isFetchingProducts(state = false, action) {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return true;
        case RECEIVE_PRODUCTS:
            return false;
        default:
            return state;
    }
}

function isFetchingProduct(state = false, action) {
    switch (action.type) {
        case REQUEST_SINGLE_PRODUCT:
            return true;
        case RECEIVE_SINGLE_PRODUCT:
            return false;
        default:
            return state;
    }
}

function categories(state = [], action) {
    switch (action.type) {
        case REQUEST_CATEGORIES:
            return state;
        case RECEIVE_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}

function selectedCategoryId(state = '1', action) {
    switch (action.type) {
        case SELECT_CATEGORY:
            return action.categoryId;
        default:
            return state;
    }
}

function products(state = [], action) {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return state;
        case RECEIVE_PRODUCTS:
            return action.products;
        default:
            return state;
    }
}

function product(state = null, action) {
    switch (action.type) {
        case REQUEST_SINGLE_PRODUCT:
            return state;
        case RECEIVE_SINGLE_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    isFetchingCategories,
    isFetchingProducts,
    isFetchingProduct,
    categories,
    products,
    selectedCategoryId,
    product
});

export default rootReducer;

