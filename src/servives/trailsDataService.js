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
    const result = await request.post(BASE_URL, trailData);    
    return result
}

 async function deleteTrail(id) {
    await request.del(`http://localhost:3030/data/trails/${id}`);
}

async function editTrail(id, trailData){
    await request.put(`http://localhost:3030/data/trails/${id}`, trailData);
}

const trailsData = {
    getAll,
    getTrailById,
    addTrail,
    deleteTrail,
    editTrail
}

export default trailsData