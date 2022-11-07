import Cookies from 'js-cookie';
import {Base64} from 'js-base64';
import { Auth_Details_Cookie, Cart_Total_Cookie, Product_Info_Cookie } from '../../constants/cookies';
import { LogDebug, LogInfo, LogLog } from '../../constants/constant_vals';
import { AuthApi, MainPageApi, SearchSuggestionApi } from '../../api/api';
import history from '../../history';
import axios from 'axios';
import { BAD_REQUEST_ERROR, INTERNAL_SERVER_ERROR } from '../../constants/error_codes_http';
import { DEFAULT_SEARCH_SUGGESTION_API, SEARCH_SUGGESTION_API } from '../../constants/api_for_routes';

const {
    REACT_APP_PAYMENT_URL,
    REACT_APP_PAYMENT_PORT
} = process.env
// Action IDs
export const MANAGE_SIGN_IN= "MANAGE_SIGN_IN";
export const MANAGE_SIGN_OUT= "MANAGE_SIGN_OUT";
export const MANAGE_SIGN_IN_ERROR= "MANAGE_SIGN_IN_ERROR";
export const RESET_SIGN_IN_ERROR = "RESET_SIGN_IN_ERROR";
export const SET_G_OAUTH= "SET_G_OAUTH";
export const MANAGE_GOOGLE_AUTH_SIGN_IN= "MANAGE_GOOGLE_AUTH_SIGN_IN";
export const MANAGE_GOOGLE_AUTH_SIGN_OUT= "MANAGE_GOOGLE_AUTH_SIGN_OUT";
export const MANAGE_SIGN_UP_ERROR= "MANAGE_SIGN_UP_ERROR";
export const RESET_SIGN_UP= "RESET_SIGN_UP";
export const TAB_HOVER= "TAB_HOVER";

export const SHIPPING_ADDRESS_RECIEVED = "SHIPPING_ADDRESS_RECIEVED";
export const RESET_SHIPPING_ADDRESS = "RESET_SHIPPING_ADDRESS";
export const SHIPPING_OPTION_RECIEVED = "SHIPPING_OPTION_RECIEVED";
export const RESET_SHIPPING_OPTION = "RESET_SHIPPING_OPTION";
export const PAYMENT_DATA_RECIEVED = "PAYMENT_DATA_RECIEVED";
export const PAYMENT_RESPONSE = "PAYMENT_RESPONSE";
export const PAYMENT_RESPONSE_ERROR = "PAYMENT_RESPONSE_ERROR";
export const RESET_PAYMENT_RESPONSE = "RESET_PAYMENT_RESPONSE";
export const RESET_PAYMENT_RESPONSE_ERROR = "RESET_PAYMENT_RESPONSE_ERROR";

export const LOAD_HOME_PAGE = "LOAD_HOME_PAGE";
export const LOAD_FILTERED_PRODUCTS = "LOAD_FILTERED_PRODUCTS";
export const LOAD_FILTER_ATTRIBUTES = "LOAD_FILTER_ATTRIBUTES";
export const REMOVE_FILTER_ATTRIBUTES = "REMOVE_FILTER_ATTRIBUTES";
export const LOAD_SHOPPING_BAG = "LOAD_SHOPPING_BAG";
export const RESET_SHOPPING_BAG = "RESET_SHOPPING_BAG";
export const LOAD_TABS_DATA = "LOAD_TABS_DATA";

export const SELECT_PRODUCT_DATA = "SELECT_PRODUCT_DATA";

export const SEARCH = "SEARCH";
export const SEARCH_ERROR = "SEARCH_ERROR";

export const ADD_TO_CART = "ADD_TO_CART";
export const RESET_ADD_TO_CART = "RESET_ADD_TO_CART";
export const CART_TOTAL = "CART_TOTAL";
export const RESET_CART_TOTAL = "RESET_CART_TOTAL";
export const SAVE_FILTER_Q_STATUS = "SAVE_FILTER_Q_STATUS";
export const RESET_FILTER_Q_STATUS = "RESET_FILTER_Q_STATUS";
export const DELIVERY_CHARGES = "DELIVERY_CHARGES";
export const RESET_DELIVERY_CHARGES = "RESET_DELIVERY_CHARGES";
export const SAVED_SORTED_LIST = "SAVED_SORTED_LIST";
export const ADD_SELECTED_CATEGORY = "ADD_SELECTED_CATEGORY";
export const REMOVE_SELECTED_CATEGORY = "REMOVE_SELECTED_CATEGORY";
export const RESET_SELECTED_CATEGORY = "RESET_SELECTED_CATEGORY";
export const LOAD_SELECTED_CATEGORY_FROM_URL = "LOAD_SELECTED_CATEGORY_FROM_URL";
export const SELECT_SORT = "SELECT_SORT";
export const RESET_SELECT_SORT = "RESET_SELECT_SORT";
export const CLEAR_ALL_FILTERS = "CLEAR_ALL_FILTERS";
export const SELECT_PRODUCT_PAGE = "SELECT_PRODUCT_PAGE";
export const RESET_SELECT_PRODUCT_PAGE = "RESET_SELECT_PRODUCT_PAGE";

export const SignIn = formValues => async dispatch => {

    if(LogInfo){
        console.info(`[ACTION]: SignIn API called, formValues = ${formValues}`)
    }

    const user_hash = Base64.encode(`${formValues.user_name}:${formValues.password}`);
    AuthApi.defaults.headers.common['Authorization'] = `Basic ${user_hash}`
    const response = await AuthApi.post('/authenticate').catch(err => {
        if(LogInfo){
            console.info(`[ACTION]: dispatch MANAGE_SIGN_IN_ERROR err.message = ${err.message}`)
        }
        dispatch({type: MANAGE_SIGN_IN_ERROR, payload: err.message});
    });

    if(response){
        if(response.data.jwt){
            if(LogInfo){
                console.info(`[ACTION]: dispatch MANAGE_SIGN_IN response.data.jwt = ${response.data.jwt}`)
            }
            dispatch({type: MANAGE_SIGN_IN, payload: response.data});
            Cookies.set(Auth_Details_Cookie, response.data, {expires: 2});//2 days for expiry
            history.push('/');
        } else {
            if(LogInfo){
                console.info(`[ACTION]: dispatch MANAGE_SIGN_IN_ERROR response.data.error = ${response.data.error}`)
            }
            dispatch({type: MANAGE_SIGN_IN_ERROR, payload: response.data.error});
        }
    }

}

export const SignOut = () => {
    if(LogInfo){
        console.info(`[ACTION]: signOut, Cookie is removed...`)
    }
    Cookies.remove(Auth_Details_Cookie)
    return {
        type: MANAGE_SIGN_OUT
    }
}

export const SignInUsingGoogleOAuth = googleAuth => async dispatch => {
    if(LogInfo){
        console.info(`[SignInUsingGoogleOAuth], googleAuth = ${googleAuth}`)
    }

    // if already not signed in
    if(googleAuth && !googleAuth.isSignedIn.get()){
        if(LogInfo){
            console.info(`[SignInUsingGoogleOAuth], user has not signed in yet`)
        }
        // signing in-
        googleAuth.SignIn(JSON.parse(googleAuth.currentUser.get().getId())).then(async () => {
                // sign in worked - 
                if(googleAuth.isSignedIn.get()){
                    if(LogInfo){
                        console.info(`[SignInUsingGoogleOAuth], user Signed in`)
                    }

                    dispatch({
                        type: MANAGE_GOOGLE_AUTH_SIGN_IN,
                        payload: {
                            first_name: googleAuth.currentUser.get().getBasicProfile().getGivenName(),
                            G_OAuth: googleAuth
                        }
                    })
                    history.push("/");
                }
            }
        )
    }
}

export const SignOutUsingGoogleOAuth = googleAuth => async dispatch => {
    if(LogInfo){
        console.info(`[SignOutUsingGoogleOAuth], googleAuth = ${googleAuth},` +
            `googleAuth.isSignedIn.get() = ${googleAuth.isSignedIn.get()}`)
    }

    // can be done only when alreasy signed in
    if (googleAuth && googleAuth.isSignedIn.get()){
        if(LogInfo){
            console.info(`[SignOutUsingGoogleOAuth], user trying to signout`)
        }
        googleAuth.SignOut().then(() => {
            if(!googleAuth.isSignedIn.get()){
                if(LogInfo){
                    console.info(`[SignOutUsingGoogleOAuth], user Signed out`)
                }
                dispatch({
                    type: MANAGE_GOOGLE_AUTH_SIGN_OUT,
                    payload: null
                })
            }
        });
        
    }
}

export const SignUp = formValues => async dispatch =>{
    if(LogInfo){
        console.info(`[action]: SignUp, API = ${JSON.stringify(formValues)}.`)
    }

    const response = await AuthApi.post('/signup', {
        'username': formValues.username,
        'password': formValues.password,
        'firstname': formValues.firstName,
        'lastname': formValues.lastName,
        'email': formValues.email.toLowerCase(),
    }).catch(e => {
        if(LogInfo){
            console.info(`[ACTION]: SignUp, dispatch MANAGE_SIGN_UP_ERROR, err.message = ${e.message}.`)
        }
        dispatch({
            type: MANAGE_SIGN_UP_ERROR,
            payload: e.message
        });
    });

    if(response){
        if(response.data.account_creation_status === 'success'){
            if(LogInfo){
                console.info(`[ACTION]: dispatch MANAGE_SIGN_UP, account_creation_status = ${response.data.account_creation_status}.`)
            }
            history.push("/signin");
        } else {
            if(LogLog){
                console.log('response.data.error_msg = ' + response.data.error_msg);
            }
            if(LogInfo){
                console.info(`[ACTION]: dispatch MANAGE_SIGN_UP_ERROR response.data.error_msg = ${response.data.error_msg}.`)
            }
            dispatch({
                type: MANAGE_SIGN_UP_ERROR,
                payload: response.data.error_msg
            });
        }
    }
}

export const SetAuthDetailsUsingCookie = cookieData => {
    if(LogInfo){
        console.info(`[ACTION]: Auth using Cookie, cookieData = ${cookieData}`)
    }
    return {
        type: MANAGE_SIGN_IN,
        payload: cookieData
    }
}

export const SetShippingAddress = payload => {
    if(LogInfo){
        console.info(`[ACTION]: setShippingAddress, payload = ${JSON.stringify(payload)}`) //user input
    }
    return {
        type: SHIPPING_ADDRESS_RECIEVED,
        payload: payload
    }
}

export const SetPaymentInfo = payload => {
    if(LogInfo){
        console.info(`[ACTION]: setPaymentInfo payload = ${JSON.stringify(payload)}`)
    }
    
    return {
        type: PAYMENT_DATA_RECIEVED,
        payload: payload
    }
}

export const SendPaymentToken = (token) => async dispatch => {
    if(LogInfo){
        console.info(`[ACTION]: SendPaymentToken, Token = ${JSON.stringify(token)}`)
    }

    //id not recieved in response
    if(!token || (token && !token.hasOwnProperty("id"))) {
        if(LogInfo){
            console.info(`[ACTION]: SendPaymentToken, PAYMENT_RESPONSE_ERROR, error_msg: "unable to fetch token. Try again later"`)
        }
        dispatch({
            type: PAYMENT_RESPONSE_ERROR,
            payload: {error_msg: "unable to fetch token. Try again later"}
        })
    }

    let url 
    if(REACT_APP_PAYMENT_URL){
        url = `${REACT_APP_PAYMENT_URL}/payment`
    } else {
        url = `http://localhost:${REACT_APP_PAYMENT_PORT}/payment`
    }

    let config = {
        method: 'post',
        url: url,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(token)
    };

    if(LogInfo){
        console.info(`URL = ${config.url}`)
    }

    axios(config).then( (response) => {
        if(LogLog){
            console.log(JSON.stringify(response.data));
        }
        let PaymentResponse = {
            ...response.data,
            last4: token.card.last4,
            exp_year: token.card.exp_year, exp_month: token.card.exp_month,
            brand: token.card.brand
        }

        if(PaymentResponse.payment_failed){
            history.push(`/checkout/cancel-payment/${response.data.charge_id}`)
        } else {
            history.push(`/checkout/success-payment/${response.data.charge_id}`)
            Cookies.remove(Cart_Total_Cookie)
            Cookies.remove(Product_Info_Cookie)
        }

        dispatch({
            type: PAYMENT_RESPONSE,
            payload: {...PaymentResponse, error: false, error_msg: null}
        })

    }).catch( (e) => {
        console.error(`[ACTION]: SendPaymentToken, Error = ${e}`)
        dispatch({
            type: PAYMENT_RESPONSE_ERROR,
            payload: {error_msg: "Some Error Occured"}
        })
    });
}

export const GetDataViaApi = (type, route, query, synchronous = true) => async dispatch => {
    if(route){
        if(query){
            route += query;
        }

        if(LogInfo){
            console.info(`[ACTION]: get data via api, Calling API = ${route}.`)
        }
        let fetch_error = false;
        if(synchronous){
            await MainPageApi.get(route).then(
                response => ProcessResponse(response, query, type, route)
            ).catch(
                e => {
                    fetch_error = true;
                }
            )
        }else{
            MainPageApi.get(route).then(
                response => ProcessResponse(response, query, type, route, dispatch)
            ).catch(
                e => {
                    fetch_error = true
                }
            );
        }

        if(fetch_error){
            if(LogInfo){
                console.info(`[action]: error in fetching response for API = ${route}`)
            }
            dispatch({
                type: type,
                payload: {isLoading: false, statusCode: INTERNAL_SERVER_ERROR}
            });
        }
    }
}

export const ProcessResponse = (response, query, type, uri, dispatch) => {
    if(LogDebug){
        console.debug(`[ACTION]: Data = ${JSON.parse(JSON.stringify(response.data))}.`);
    }
    if(response.data !== null){
        let payload = {isLoading: false, data: JSON.parse(JSON.stringify(response.data))}
        if (query) {
            dispatch({
                type: type, payload:
                    {...payload, query: query}
            });
        } else {
            dispatch({
                type: type, payload: payload
            });
        }

        if(LOAD_FILTERED_PRODUCTS.localeCompare(type) === 0
            && window.location.search.localeCompare(uri.split("/products")[1]) !== 0){
                history.push(uri)
            }

    }else{
        dispatch({
            type: type,
            payload: {isLoading: false, statusCode: BAD_REQUEST_ERROR}
        });
    }
}

export const LoadFilterAttributes = Query => dispatch => {
    if(LogInfo){
        console.info(`[ACTION]: LoadFilterAttributes, Calling Filter API, Query = ${Query}`)
    }

    if(Query){
        let uri = `/filter${Query}`
        MainPageApi.get(uri).then(response=>{
            dispatch({
                type: LOAD_FILTER_ATTRIBUTES,
                payload: JSON.parse(JSON.stringify(
                    {
                        ...response.data,
                        "query": Query.slice(3)
                    }
                ))
            });

            return JSON.parse(JSON.stringify(response.data))
        })
        .catch(e =>{
            if(LogInfo){
                console.info(`[ACTION]: error in fetching response from Filter API`)
            }
        });
    }
};

export const GetSearchSuggestions = (prefix) => async dispatch => {
    if(LogInfo){
        console.info(`[Action]: GetSearchSuggestions, calling API`)
    }

    if(prefix){
        let Error = false
        const uri = SEARCH_SUGGESTION_API + prefix
        const response = await SearchSuggestionApi.get(uri)
            .catch(e => {
                if(LogInfo){
                    console.info(`[ACTION]: error in fetching response from API = ${uri}`)
                }
                dispatch({
                    type: SEARCH_ERROR
                });
                Error = false
            });
        
        if(Error){
            return
        }

        if(LogDebug){
            console.debug(`[ACTION]: Data = ${JSON.parse(JSON.stringify(response.data))}.`)
        }
        dispatch({
            type: SEARCH, 
            payload: {data: JSON.parse(JSON.stringify(response.data))}
        });
    }
}

export const DefaultSearchSuggestions = () => dispatch => {
    if(LogInfo){
        console.info(`[actoin]: DefaultSearchSuggestions, calling API.`)
    }

    SearchSuggestionApi.get(DEFAULT_SEARCH_SUGGESTION_API)
        .then(response => {
            dispatch({
                type: SEARCH,
                payload: {data: JSON.parse(JSON.stringify(response.data))}
            });
        })
        .catch(e => {
            if(LogInfo){
                console.info(`[action]: error in fetching response for api = ${DEFAULT_SEARCH_SUGGESTION_API}`)
            }
            dispatch({
                type: SEARCH_ERROR
            });
        });
}

