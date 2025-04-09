import { useState, useEffect } from 'react';

import trailsData from '../servives/trailsDataService';

export function useGetAllTrails() {


    const [trails, setTrails] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await trailsData.getAll();
            setTrails((Object.values(result)));
        })();
    }, [])

    return [trails, setTrails];
};

export function useGetOneTrail(id) {

    const [trail, setTrail] = useState({});


    useEffect(() => {
        (async () => {
            const result = await trailsData.getTrailById(id);
            setTrail((result));
        })();
    }, [id])

    return [trail, setTrail];
};

export function useGetUserTrails(userId) {


    const [trails, setTrails] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await trailsData.getUserTrails(userId);
            setTrails((Object.values(result)));
        })();
    }, [])

    return [trails, setTrails];
};


export function useAddTrail() {

    async function trailCreateHandler(trailData) {
        const result = await trailsData.addTrail(trailData);

        return result
    }

    return trailCreateHandler;

};
