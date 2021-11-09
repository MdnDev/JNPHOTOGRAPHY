import { EXPO_LIST_REQUEST, EXPO_LIST_SUCCESS, EXPO_LIST_FAIL, EXPO_DETAILS_REQUEST,EXPO_DETAILS_SUCCESS, EXPO_DETAILS_FAIL, EXPO_DELETE_REQUEST, EXPO_DELETE_SUCCESS, EXPO_DELETE_FAIL, EXPO_CREATE_RESET, EXPO_CREATE_FAIL, EXPO_CREATE_SUCCESS, EXPO_CREATE_REQUEST, EXPO_UPDATE_REQUEST, EXPO_UPDATE_SUCCESS, EXPO_UPDATE_FAIL, EXPO_UPDATE_RESET } from '../constants/expoConstants';

export const expoListReducer = (state = { expos: []}, action) => {
    switch (action.type) {
        case EXPO_LIST_REQUEST:
            return { loading: true, expos: [] }
        case EXPO_LIST_SUCCESS:
            return { loading: false, expos: action.payload }
        case EXPO_LIST_FAIL:
            return { loading: false, error: action.payload }
            default:
                return state
    }
};

export const expoDetailReducer = (state = { expo: { reviews: [] } }, action) => {
    switch (action.type) {
        case EXPO_DETAILS_REQUEST:
            return { loading: true, ...state }
        case EXPO_DETAILS_SUCCESS:
            return { loading: false, expo: action.payload }
        case EXPO_DETAILS_FAIL:
            return { loading: false, error: action.payload }
            default:
                return state
    }
};

export const expoDeleteReducer = (state = {} , action) => {
    switch (action.type) {
        case EXPO_DELETE_REQUEST:
            return { loading: true }
        case EXPO_DELETE_SUCCESS:
            return { loading: false, success: true }
        case EXPO_DELETE_FAIL:
            return { loading: false, error: action.payload }
            default:
                return state
    }
};

export const expoCreateReducer = (state = {} , action) => {
    switch (action.type) {
        case EXPO_CREATE_REQUEST:
            return { loading: true }
        case EXPO_CREATE_SUCCESS:
            return { loading: false, success: true, expo: action.payload }
        case EXPO_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case EXPO_CREATE_RESET:
            return {}
            default:
                return state
    }
};

export const expoUpdateReducer = (state = { expo: {} } , action) => {
    switch (action.type) {
        case EXPO_UPDATE_REQUEST:
            return { loading: true }
        case EXPO_UPDATE_SUCCESS:
            return { loading: false, success: true, expo: action.payload }
        case EXPO_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case EXPO_UPDATE_RESET:
            return { expo: {}}
            default:
                return state
    }
};