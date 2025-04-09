import { useState, useEffect } from 'react';
import { getAll, addLike } from '../servives/likesService';


export function useLike(trailId, userId) {
    const [likesCount, setLikesCount] = useState();
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {

        (async () => {
            try {
                const likes = await getAll(trailId);                
                setLikesCount(likes.length);
                setHasLiked(likes.some(like => like._ownerId === userId));
            } catch (err) {
                throw err
            }
        })();

    }, [trailId, userId]);

    const like = async () => {
        if (hasLiked || !userId) return;
        try {
            await addLike(trailId);
            setLikesCount(prevCount => prevCount + 1);
            setHasLiked(true);
        } catch (err) {
            throw err
        }
    };

    return {
        like,
        likesCount,
        hasLiked,
    };
}