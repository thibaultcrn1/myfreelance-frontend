import axios from 'axios';

const API_URL = "http://localhost:3001/api";

export function generateAccessToken(refreshToken: string) {
    return axios.post(`${API_URL}/auth/refreshToken`, {
        headers: {
            authorization: 'Bearer ' + refreshToken 
        },
        withCredentials: true,
    });
}

export function forgotPassword( email: string ) {
    return axios.put(`${API_URL}/auth/forgot-password`, {
        email,
    }, { withCredentials: true });
}

export function getCategoryList() {
    return axios.get(`${API_URL}/category/get`, {
        withCredentials: true
    })
}

export function getStockList() {
    return axios.get(`${API_URL}/stock/get`, {
        withCredentials: true
    })
}

export function logout(accessToken: string) {
    return axios.delete(`${API_URL}/auth/logout`, {
        headers: {
            authorization: 'Bearer ' + accessToken
        },
        withCredentials: true
    });
}