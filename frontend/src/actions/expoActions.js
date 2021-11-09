import axios from 'axios';
import { EXPO_CREATE_REQUEST, EXPO_CREATE_SUCCESS, EXPO_CREATE_FAIL, EXPO_LIST_REQUEST, EXPO_LIST_SUCCESS, EXPO_LIST_FAIL, EXPO_UPDATE_REQUEST, EXPO_UPDATE_SUCCESS, EXPO_UPDATE_FAIL, EXPO_DELETE_REQUEST, EXPO_DELETE_SUCCESS, EXPO_DELETE_FAIL, EXPO_DETAILS_REQUEST, EXPO_DETAILS_SUCCESS, EXPO_DETAILS_FAIL } from '../constants/expoConstants.js';

export const listExpos = () => async (dispatch) => {
    
    try {
        dispatch({ type: EXPO_LIST_REQUEST })

        const { data } = await axios.get('/api/expos')

        dispatch({
            type: EXPO_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch ({
            type: EXPO_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const listExpoDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: EXPO_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/expos/${id}`)

        dispatch({
            type: EXPO_DETAILS_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({ 
            type: EXPO_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
        
    }
}

export const deleteExpo = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EXPO_DELETE_REQUEST
        })

        const { userLogin: {userInfo }} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        await axios.delete(`/api/expos/${id}`, config)

        dispatch({
            type: EXPO_DELETE_SUCCESS
        })

    } catch (error) {
        dispatch({
            type: EXPO_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const createExpo = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: EXPO_CREATE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const { data } = await axios.post(`/api/expos`, {}, config)

        dispatch({
            type: EXPO_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: EXPO_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const updateExpo = (expo) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EXPO_UPDATE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const { data } = await axios.put(`/api/expos/${expo._id}`, expo, config)

        dispatch({
            type: EXPO_UPDATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: EXPO_UPDATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}