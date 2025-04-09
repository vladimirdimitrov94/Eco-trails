import * as request from './requesterService';

const BASE_URL = 'http://localhost:3030/data/likes'

export async function addLike(trailId){

   await request.post(BASE_URL, {trailId});
}

export async function getAll(trailId){
    const result = await request.get(`${BASE_URL}?where=trailId%3D%22${trailId}%22`);

    const likes = Object.values(result);

    return likes
}


