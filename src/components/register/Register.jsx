import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useRegister } from "../../hooks/useAuth"
import { useState } from "react";

export default function Register() {

    const [error, setError] = useState('')
    const register = useRegister();
    const navigate = useNavigate();


    const { values, changeHandler, submitHandler } = useForm(
        { email: '', password: '', username: '', rePassword: '' },
        async ({ email, password, username, rePassword }) => {

            if (password !== rePassword) {
                setError('Passwords do not match')

                return
            }

            try {
                await register(email, password, username);
                navigate('/trails')

            } catch (err) {
                setError(err.message)
            }
        });

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Създай акаунт
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={submitHandler} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Имейл
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={values.email}
                                onChange={changeHandler}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                            Потребитлско име
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={values.username}
                                onChange={changeHandler}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Парола
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={values.password}
                                onChange={changeHandler}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="rePassword" className="block text-sm/6 font-medium text-gray-900">
                                Повтори парола
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="rePassword"
                                name="rePassword"
                                type="password"
                                required
                                value={values.rePassword}
                                onChange={changeHandler}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    {error && (
                        <p style={{ color: 'red' }}>
                            {error}
                        </p>
                    )

                    }

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Вече имаш акаунт?{' '}
                    <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Вписване
                    </Link>
                </p>
            </div>
        </div>
    )
}
