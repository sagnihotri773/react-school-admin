import axios from 'axios';

export const BASE_URL = 'http://127.0.0.1:8000/api';

const token = localStorage.getItem('token');
var API = axios.create({
    baseURL: BASE_URL, // Replace this with your API base URL
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include user token in Authorization header
    }
});


const request = (method, url, data = null) => {
    console.log("------", data);
    const config = {
        method,
        url,
        data,
    };

    return API.request(config);
};


const get = (url) => request('GET', url);

const post = (url, data) => request('POST', url, data);

const update = (url, data) => request('PUT', url, data);

const remove = (url) => request('DELETE', url);



export default {
    get,
    post,
    update,
    remove,
    // setUserToken
};

export const postDataApi = async (endpoint, data = '', token = '') => {
    try {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios.post(`${BASE_URL}/${endpoint}`, data, { headers });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const apiRequest = async (url, method = 'GET', data = null, token = null) => {
    try {
        const response = await API.request({
            url,
            method,
            headers: token ? { 'Authorization': `Bearer ${token}` } : {},
            data
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong');
    }
};

export const login = async (data) => {
    try {
        const response = await instance(BASE_URL + '/login', 'POST', data);
        localStorage.setItem('token', response.token);
        console.log("response", response);

        return response;
    } catch (error) {
        console.log("error", error);
        throw error;
    }
};

const instance = async (url, method = 'GET', data = null, token = null) => {
    return await API.request({ url, method, headers: token ? { 'Authorization': `Bearer ${token}` } : {}, data });
}

export const postData = async (url, data, token) => {
    try {
        const response = await apiRequest(BASE_URL + url, 'POST', data, token);
        return response;
    } catch (error) {
        throw error;
    }
};



export const postDataRequest = async (url, postData) => {
    // Make the POST request to the API endpoint
    const response = await axios.post(BASE_URL + url, postData);
    // Return the response data
    return response.data;
}