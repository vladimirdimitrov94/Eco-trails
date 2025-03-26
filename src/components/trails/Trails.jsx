import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Trails() {

    const [trails, setTrails] = useState([])

    useEffect (() => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/trails');
            const result = await response.json();

            setTrails((Object.values(result)))
        })();
    },[])

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {trails.map((trail) => (
                        <Link key={trail._id} to={trail._id} className="group">
                            <img
                                src={trail.imageUrl}
                                className="aspect-square w-full rounded-lg bg-gray-700 object-cover group-hover:opacity-75 xl:aspect-7/8"
                            />
                            <h3 className="mt-4 text-sm  text-gray-700">{trail.name}</h3>
                            <p className="mt-1 text-sm text-gray-500">Трудност: {trail.difficulty}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
