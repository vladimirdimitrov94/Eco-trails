import * as request from '../servives/requester';

const BASE_URL = 'http://localhost:3030/jsonstore/trails'

export async function getAll() {

    const result = await request.get(BASE_URL);
    return result
}

export async function getTrailById(id) {

    const result = await request.get(BASE_URL + `/${id}`);
    return result
}
