import * as request from './requesterService';

const BASE_URL = 'http://localhost:3030/data/trails'

async function getAll() {

    const result = await request.get(BASE_URL);
    return result
}

async function getTrailById(id) {

    const result = await request.get(BASE_URL + `/${id}`);
    return result
}

async function addTrail(trailData) {
    await request.post(BASE_URL, trailData)
}

const trailsData = {
    getAll,
    getTrailById,
    addTrail
}

export default trailsData