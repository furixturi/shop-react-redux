import fetch from 'isomorphic-fetch';

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const REQUEST_SINGLE_PRODUCT = 'REQUEST_SINGLE_PRODUCT';
export const RECEIVE_SINGLE_PRODUCT = 'RECEIVE_SINGLE_PRODUCT';

// const dataUrlRoot = 'http://localhost:5000/'; // Ruby API Server
const dataUrlRoot = 'http://localhost:3000/'; // Node API Server

// show loading
function requestCategories() {
    return {
        type: REQUEST_CATEGORIES
    };
}

function requestProducts(categoryId = '1') {
    return {
        type: REQUEST_PRODUCTS,
        categoryId
    };
}

function requestSingleProduct() {
    return {
        type: REQUEST_SINGLE_PRODUCT
    };
}

// promise solved
function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories: categories,
    };
}

function receiveProducts(categoryId, products) {
    return {
        type: RECEIVE_PRODUCTS,
        categoryId,
        products: products
    };
}

function receiveSingleProduct(product) {
    return {
        type: RECEIVE_SINGLE_PRODUCT,
        product
    };
}

export function fetchProducts(categoryId = '1') {
    return dispatch => {
        dispatch(requestProducts(categoryId));
        return fetch(dataUrlRoot + 'items')
            .then(response => response.json())
            .then(json => {
                const rawData = json.data;
                const formattedData = rawData.map((item) => {
                    const formattedPrice = item.price.toLocaleString(undefined, {
                        style: 'currency',
                        currency: 'JPY',
                        currencyDisplay: 'symbol'
                    });
                    return Object.assign(item, {price: formattedPrice});
                });
                dispatch(receiveProducts(categoryId, formattedData));
            });
    };
}

export function selectCategory(categoryId = '1') {
    return {
        type: SELECT_CATEGORY,
        categoryId
    };
}

export function fetchCategories() {
    return dispatch => {
        dispatch(requestCategories());
        return fetch(dataUrlRoot + 'categories')
            .then(response => response.json())
            .then(json => dispatch(receiveCategories(json.data)))
            .then(() => dispatch(fetchProducts()));
    };
}

export function fetchSingleProduct(productId = '1') {
    return dispatch => {
        dispatch(requestSingleProduct());
        return fetch(dataUrlRoot + 'items/' + productId)
            .then(response => response.json())
            .then(json => {
                const rawData = json;
                const formattedPrice = rawData.price.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'JPY',
                    currencyDisplay: 'symbol'
                });
                dispatch(receiveSingleProduct(Object.assign(rawData, {price: formattedPrice})));
            });
    };
}
