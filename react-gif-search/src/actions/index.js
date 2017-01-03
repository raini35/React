import request from 'superagent'; 
import { browserHistory } from 'react-router'; 
import Firebase from 'firebase'; 

export const OPEN_MODAL = 'OPEN_MODAL'; 
export const CLOSE_MODAL = 'CLOSE_MODAL'; 
export const REQUEST_GIFS = 'REQUEST_GIFS'; 
export const SIGN_IN_USER = 'SIGN_IN_USER'; 
export const SIGN_OUT_USER = 'SIGN_OUT_USER'; 
export const AUTH_ERROR = 'AUTH_ERROR'; 
export const AUT_USER = 'AUTH_USER'; 

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

const config = {
	apiKey: "AIzaSyCEhLBBBWEFfUSaSovEjlQsR00Puq2rbAk",
    authDomain: "react-gif-search-cd422.firebaseapp.com",
    databaseURL: "https://react-gif-search-cd422.firebaseio.com",
    storageBucket: "react-gif-search-cd422.appspot.com",
    messagingSenderId: "170432762457"
}; 

Firebase.initializeApp(config); 

export function requestGifs(term = null) {
	return function(dispatch) {
    	request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`).then(response => {
			dispatch({
				type: REQUEST_GIFS, 
				payload: response
			});
		});	
	}
}

export function openModal(gif) {
	return {
		type: OPEN_MODAL, 
		gif
	}
}

export function closeModal() {
	browserHistory.push('/favorites'); 
	
	return {
		type: CLOSE_MODAL
	}
}

export function signUpUser(credentials) {
	return function(dispatch) {
		Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
			.then(response => {
				dispatch(authUser());
				browserHistory.push('/favorites');
		})
			.catch(error => {
				console.log(error);
				dispatch(authError(error));
		});
	}
}

export function signInUser(credentials) {
	return function(dispatch) {
		Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(response => {
				dispatch(authUser());
				browserHistory.push('/favorites');
		})
			.catch(error => {
				dispatch(authError(error));
		});
	}
}

export function signInUser() {
	browserHistory.push('/'); 
	return {
		type: SIGN_IN_USER
	}
}

export function signOutUser() {
	return {
		type: SIGN_OUT_USER
	}
}

export function authUser() {
	return {
		type: AUTH_USER
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR, 
		payload: error
	}
}