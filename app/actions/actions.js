import fetch from 'isomorphic-fetch';

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const INVALIDATE_CATEGORY = 'INVALIDATE_CATEGORY';

export const REQUEST_SINGLE_ITEM = 'REQUEST_SINGLE_ITEM';
export const RECEIVE_SINGLE_ITEM = 'RECEIVE_SINGLE_ITEM';

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
function requestItems(categoryId = '1') {
    return {
        type: REQUEST_ITEMS,
        categoryId
    };
}

function receiveItems(categoryId, json) {
    return {
        type: RECEIVE_ITEMS,
        categoryId,
        items: json.data,
        receivedAt: Date.now()
    };
}

function fetchItems(categoryId = '1') {
    return dispatch => {
        dispatch(requestItems(categoryId));
        return fetch('http://localhost:5000/items')
            .then(response => response.json())
            .then(json => dispatch(receiveItems(categoryId, json)));
    };
}

function shouldFetchItems(state, categoryId = '1') {
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

export function fetchItemsIfNeeded(categoryId = '1') {
    return (dispatch, getState) => {
        if (shouldFetchItems(getState(), categoryId)) {
            return dispatch(fetchItems(categoryId));
        }
    };
}

