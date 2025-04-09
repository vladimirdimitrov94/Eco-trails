import { useState } from 'react';

import { Link, useParams, useNavigate } from 'react-router-dom';
import { useGetOneTrail } from '../../hooks/useTrails';
import { useAuthContext } from '../../contexts/AuthContext';

import trailsData from '../../servives/trailsDataService';
import { useLike } from '../../hooks/useLike';



export default function Details() {

    const { id, isAuthenticated } = useAuthContext()
    const { trailId } = useParams();
    const [trail] = useGetOneTrail(trailId)
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const { like, hasLiked, likesCount } = useLike(trailId, id);

    const handleDelete = async () => {
        try {
            await trailsData.deleteTrail(trailId);
            navigate('/trails');
        } catch (err) {
            console.log(err.message);

        }
    };

    return (
        <div className="bg-white">
            <div className="pt-6">
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">

                    <img
                        src={trail.imageUrl}
                        className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
                    />
                </div>

                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">

                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{trail.name}</h1>
                    </div>


                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="tracking-tight text-gray-800 ">{trail.location}</h1>
                    </div>



                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2>Продължителност</h2>
                        <p className="text-3xl tracking-tight text-gray-900 mb-5">{trail.length} {trail.length === 1 ? "час" : "часа"}</p>
                        <div className="mt-6 lg:row-span-3 lg:mt-0">
                            <h2>Трудност</h2>
                            <p className="text-3xl tracking-tight text-gray-900 mb-5">{trail.difficulty}/10</p>
                        </div>
                        <div className="mt-6 lg:row-span-3 lg:mt-0">
                            <h2>Харесвания</h2>
                            <p className="text-3xl tracking-tight text-gray-900 ">{likesCount}</p>
                        </div>
                    </div>
                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">

                        <div>
                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{trail.details}</p>
                            </div>


                            {isAuthenticated && trail._ownerId === id &&
                                <div className="mt-10 flex items-center gap-x-2">
                                    <Link
                                        to={`/edit/${trailId}`}
                                        className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Редактирай
                                    </Link>
                                    <button onClick={() => setShowModal(true)} className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Изтрий
                                    </button>
                                </div>
                            }
                            {isAuthenticated && trail._ownerId !== id &&
                                <div className="mt-10 flex items-center gap-x-2">

                                    <button
                                        onClick={like}
                                        disabled={hasLiked}
                                        className={`rounded-md ${hasLiked ? 'bg-gray-300' : 'bg-rose-300 hover:bg-rose-200'
                                            } px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs transition`}
                                    >
                                        {hasLiked ? 'Харесано' : 'Харесай'}

                                    </button>
                                </div>
                            }
                        </div>

                        {showModal && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
                                <div className="border-2 border-solid bg-white p-6 rounded-xl shadow-xl transform transition-all scale-100 animate-fadeIn">
                                    <p className="mb-4 text-lg font-medium">Сигурен ли си, че искаш да изтриеш тази пътека?</p>
                                    <div className="flex justify-center gap-4">
                                        <button
                                            onClick={handleDelete}
                                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                                        >
                                            Да, изтрий
                                        </button>
                                        <button
                                            onClick={() => setShowModal(false)}
                                            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
                                        >
                                            Отказ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}
