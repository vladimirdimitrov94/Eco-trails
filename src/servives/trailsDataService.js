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

async function getUserTrails(userId) {

    const result = await request.get(`${BASE_URL}?where=_ownerId%3D%22${userId}%22`);    
    return result
}

async function addTrail(trailData) {
    const result = await request.post(BASE_URL, trailData);    
    return result
}

 async function deleteTrail(id) {
    await request.del(BASE_URL + `/${id}`);
}

async function editTrail(id, trailData){
    await request.put(BASE_URL + `/${id}`, trailData);
}

const trailsData = {
    getAll,
    getTrailById,
    getUserTrails,
    addTrail,
    deleteTrail,
    editTrail
}

export default trailsData