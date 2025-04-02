import * as request from './requesterService';

const BASE_URL = 'http://localhost:3030/jsonstore/trails'

async function getAll() {

    const result = await request.get(BASE_URL);
    return result
}

 async function getTrailById(id) {

    const result = await request.get(BASE_URL + `/${id}`);
    return result
}

const trailsData = {
    getAll,
    getTrailById
}

export default trailsData