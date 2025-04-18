import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useGetOneTrail } from "../../hooks/useTrails";
import trailsData from "../../servives/trailsDataService";

const initialValues = {
    name: '',
    imageUrl: '',
    location: '',
    length: '',
    difficulty: '',
    details: ''
}

export default function EditTrail() {

    const { trailId } = useParams();
    const [trail] = useGetOneTrail(trailId)
    const navigate = useNavigate();

    const { changeHandler, submitHandler, values } = useForm(Object.assign(initialValues, trail), (values) => {
        trailsData.editTrail(trailId, values);

        navigate(`/trails/details/${trailId}`)
    });

    return (
        <form onSubmit={submitHandler} className='pt-10 pb-10 pl-150 pr-150'>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 ">

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                Име
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input
                                        value={values.name}
                                        onChange={changeHandler}
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="col-span-full">
                            <label htmlFor="imageUrl" className="block text-sm/6 font-medium text-gray-900">
                                Снимка
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input
                                        value={values.imageUrl}
                                        onChange={changeHandler}
                                        id="imageUrl"
                                        name="imageUrl"
                                        type="text"
                                        placeholder="Image URL"
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 ">

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">
                                Локацаия
                            </label>
                            <div className="mt-2">
                                <input
                                    value={values.location}
                                    onChange={changeHandler}
                                    id="location"
                                    name="location"
                                    type="text"
                                    autoComplete="Location"
                                    placeholder='Къде се намира?'
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="length" className="block text-sm/6 font-medium text-gray-900">
                                Продължителност
                            </label>
                            <div className="mt-2">
                                <input
                                    value={values.length}
                                    onChange={changeHandler}
                                    id="length"
                                    name="length"
                                    type="number"
                                    autoComplete="length"
                                    placeholder='Колко часа отнема?'
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="difficulty" className="block text-sm/6 font-medium text-gray-900">
                                Трудност
                            </label>
                            <div className="mt-2">
                                <input
                                    value={values.difficulty}
                                    onChange={changeHandler}
                                    id="difficulty"
                                    name="difficulty"
                                    type="number"
                                    autoComplete="difficulty"
                                    placeholder='Колко е трудно от 1-10?'
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>


                        <div className="col-span-full">
                            <label htmlFor="details" className="block text-sm/6 font-medium text-gray-900">
                                Детайли
                            </label>
                            <div className="mt-2">
                                <textarea
                                    value={values.details}
                                    onChange={changeHandler}
                                    name='details'
                                    placeholder='Разкажи повече подробности'
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >

                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button className="text-sm/6 font-semibold text-gray-900">
                    Откажи
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Запази
                </button>
            </div>
        </form>
    )
}
