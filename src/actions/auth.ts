// import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { SubmissionError } from 'redux-form'
import { AsyncStorage } from 'react-native'
import { API_BASE_URL } from '../../config.js'
import { normalizeResponseErrors } from '../utils'
import { saveAuthToken, clearAuthToken } from '../utils/asyncstorage'

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN'
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken,
})

export const CLEAR_AUTH = 'CLEAR_AUTH'
export const clearAuth = () => ({
  type: CLEAR_AUTH,
})

export const AUTH_REQUEST = 'AUTH_REQUEST'
export const authRequest = () => ({
  type: AUTH_REQUEST,
})

export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser,
})

export const AUTH_ERROR = 'AUTH_ERROR'
export const authError = error => ({
  type: AUTH_ERROR,
  error,
})

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken)
  dispatch(setAuthToken(authToken))
  dispatch(authSuccess(decodedToken.user))
  saveAuthToken(authToken)
}

export const login = (username, password) => dispatch => {
  dispatch(authRequest())
  console.log('login action fired! API_BASE_URL', API_BASE_URL)
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(json => {
      const { authToken } = json
      //set token to async storage so you don't need to login everytime you refresh
      AsyncStorage.setItem('token', authToken)
    })
    .then(() => dispatch(authSuccess(username)))
    .catch(err => {
      const { code } = err
      const message =
        code === 401
          ? 'Incorrect username or password'
          : 'Unable to login, please try again'
      dispatch(authError(err))
      // Could not authenticate, so return a SubmissionError for Redux
      // Form
      return Promise.reject(
        new SubmissionError({
          _error: message,
        })
      )
    })
}
