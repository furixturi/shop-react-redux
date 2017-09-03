import { combineReducers } from 'redux';
import {
    REQUEST_CATEGORIES,
    RECEIVE_CATEGORIES,
    SELECT_CATEGORY,
    REQUEST_PRODUCTS,
    RECEIVE_PRODUCTS,
    INVALIDATE_CATEGORY
} from '../actions/actions';

function categories(state, action) {
    switch (action.type) {
        case REQUEST_CATEGORIES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CATEGORIES:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.categories
            });
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

function products(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case INVALIDATE_CATEGORY:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_PRODUCTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.items,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

function productsByCategory(state = {}, action) {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
        case REQUEST_PRODUCTS:
        case INVALIDATE_CATEGORY:
            return Object.assign({}, state, {
                [action.categoryId]: products(state[action.categoryId], action)
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    categories,
    productsByCategory,
    selectedCategoryId
});

export default rootReducer;

