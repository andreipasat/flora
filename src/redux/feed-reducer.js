import axios from 'axios';

const FETCH_FEED = 'FETCH_FEED'
const FETCH_FEED_ERROR = 'FETCH_FEED_ERROR'
const GET_FEED = 'GET_FEED'
const GET_PRODUCT = 'GET_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

let initialState = {
    products : [],
    loading : false,
    error: ''
}

const feedReducer = (state = initialState, action) => {
    switch(action.type) {

        case FETCH_FEED: {
            return {...state, loading: action.payload}
        }

        case FETCH_FEED_ERROR: {
            return {...state, error: action.payload}
        }

        case GET_FEED :{
            return {...state, products: action.payload}
        }

        case GET_PRODUCT : {
            return {...state}
        }

        case ADD_PRODUCT : {
            return {...state}
        }

        case UPDATE_PRODUCT : {
            return {...state}
        }

        case DELETE_PRODUCT : {
            return {...state}
        }


        default : {
            return state
        }
    }
}
const fetchFeedCreator = (loading) => ({type : FETCH_FEED, payload : loading})
const fetchFeedErrorCreator = (error) => ({type : FETCH_FEED_ERROR, payload : error})
const getFeedCreator = (products) => ({type : GET_FEED, payload : products})
const addProductCreator = (product) => ({type : ADD_PRODUCT, product})
const updateProductCreator = (product) => ({type : UPDATE_PRODUCT, product})
const deleteProductCreator = (product) => ({type : DELETE_PRODUCT, product})

export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchFeedCreator(true))
            const response = await axios.get('https://bouquets.herokuapp.com/bouquets')
            dispatch(getFeedCreator(response.data))
            dispatch(fetchFeedCreator(false))
        } catch (e) {
            dispatch(fetchFeedCreator(false))
            dispatch(fetchFeedErrorCreator('Error loading data'))
        }
    }
}

export default feedReducer