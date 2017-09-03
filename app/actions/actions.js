import fetch from 'isomorphic-fetch';

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const INVALIDATE_CATEGORY = 'INVALIDATE_CATEGORY';

export const REQUEST_SINGLE_PRODUCT = 'REQUEST_SINGLE_PRODUCT';
export const RECEIVE_SINGLE_PRODUCT = 'RECEIVE_SINGLE_PRODUCT';

// show loading
function requestCategories() {
    return {
        type: REQUEST_CATEGORIES
    };
}

function receiveCategories(json) {
    return {
        type: RECEIVE_CATEGORIES,
        categories: json.data,
    };
}

export function fetchCategories() {
    return dispatch => {
        dispatch(requestCategories());
        return fetch('http://localhost:5000/categories')
            .then(response => response.json())
            .then(json => dispatch(receiveCategories(json)));
    };
}

// show loading
function requestProducts(categoryId = '1') {
    return {
        type: REQUEST_PRODUCTS,
        categoryId
    };
}

function receiveProducts(categoryId, json) {
    return {
        type: RECEIVE_PRODUCTS,
        categoryId,
        items: json.data,
        receivedAt: Date.now()
    };
}

function fetchProducts(categoryId = '1') {
    return dispatch => {
        dispatch(requestProducts(categoryId));
        return fetch('http://localhost:5000/items')
            .then(response => response.json())
            .then(json => dispatch(receiveProducts(categoryId, json)));
    };
}

function shouldFetchProducts(state, categoryId = '1') {
    const items = state.itemsByCategory[categoryId];

    if (!items) {
        return true;
    } else if (items.isFetching) {
        return false;
    }

    return items.didInvalidate;
}

export function selectCategory(categoryId = '1') {
    return {
        type: SELECT_CATEGORY,
        categoryId
    };
}

export function invalidateCategory(categoryId = '1') {
    return {
        type: INVALIDATE_CATEGORY,
        categoryId
    };
}

export function fetchProductsIfNeeded(categoryId = '1') {
    return (dispatch, getState) => {
        if (shouldFetchProducts(getState(), categoryId)) {
            return dispatch(fetchProducts(categoryId));
        }
    };
}

