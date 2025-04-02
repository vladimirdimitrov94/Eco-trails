import { Link, useParams } from 'react-router-dom';
import { useGetOneTrail } from '../../hooks/useTrails';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';



export default function Details() {

    const { id } = useContext(AuthContext)
    const { trailId } = useParams();
    const [trail] = useGetOneTrail(trailId)

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

                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2>Продължителност</h2>
                        <p className="text-3xl tracking-tight text-gray-900 mb-5">{trail.length} {trail.length === 1 ? "час" : "часа"}</p>
                        <div className="mt-6 lg:row-span-3 lg:mt-0">
                            <h2>Трудност</h2>
                            <p className="text-3xl tracking-tight text-gray-900 mb-5">{trail.difficulty}/10</p>
                        </div>
                        <div className="mt-6 lg:row-span-3 lg:mt-0">
                            <h2>Харесвания</h2>
                            <p className="text-3xl tracking-tight text-gray-900 ">{trail.likes?.length} </p>
                        </div>
                    </div>
                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">

                        <div>
                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{trail.details}</p>
                            </div>

                            {trail.ownerID === id
                                ? <div className="mt-10 flex items-center gap-x-2">
                                                                    <Link
                                    to={`/edit/${trailId}`}
                                    className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Редактирай
                                </Link>
                                <Link to='#' className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Изтрий
                                </Link>
                                </div>
                                :
                                <div className="mt-10 flex items-center gap-x-2">

                                <Link to="#" className="rounded-md bg-rose-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-rose-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Харесай
                                </Link>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
