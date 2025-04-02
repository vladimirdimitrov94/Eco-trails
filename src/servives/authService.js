import * as request from './requesterService';

const BASE_URL = 'http://localhost:3030/users';

export async function login(email, password) {

    const authData = await request.post(`${BASE_URL}/login`, { email, password })

    return authData;

}

export async function register(email, password) {

    const body = { email, password }
    const authData = await request.post(`${BASE_URL}/register`, { email, password });

    return authData;
}