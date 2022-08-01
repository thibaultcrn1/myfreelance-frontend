import axios from 'axios';

const API_URL = "http://localhost:3001/api";

export function register( firstname: string, lastname: string, email: string, password: string ) {
    return axios.post(`${API_URL}/auth/register`, {
        firstname,
        lastname,
        email,
        password
    }, { withCredentials: true });
}

export function login( email: string, password: string ) {
    return axios.post(`${API_URL}/auth/login`, {
        email,
        password
    }, { withCredentials: true });
}

export function userInfo( accessToken: string ) {
    return axios.get(`${API_URL}/auth/users`, {
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    })
}

export function logout() {

}