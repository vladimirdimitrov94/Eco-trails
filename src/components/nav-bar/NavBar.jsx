import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';

const userNavigation = [
    { name: 'Начало', href: '/', current: false },
    { name: 'Разходки', href: '/trails', current: false },
    { name: 'Моите разходки', href: '/mytrails', current: false },
    { name: 'Добави', href: '/trails/add', current: false },
    { name: 'Изход', href: '/logout', current: false },
]

const guestNavigation = [
    { name: 'Начало', href: '/', current: false },
    { name: 'Разходки', href: '/trails', current: false },
    { name: 'Вписване', href: '/login', current: false },
    { name: 'Регистрация', href: '/register', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {

    const { isAuthenticated, username } = useAuthContext()

    const location = useLocation();
    return (
        <div as="nav" className="bg-gray-800">

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {isAuthenticated && <div className='text-white' >
                                <p className='bg-gray-900 text-white border border-solid border-gray-400 rounded-md px-3 py-2 text-sm font-medium'>Здравей, <Link to="/profile">{username}</Link>!</p>
                            </div>
                            }
                        </div>

                        {isAuthenticated

                            ? <div className="hidden sm:ml-6 sm:block ustify-end">
                                <div className="flex space-x-4">
                                    {userNavigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={classNames(
                                                location.pathname === item.href ? 'bg-gray-900 text-white border border-solid border-gray-400' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            :
                            <div className="hidden sm:ml-6 sm:block ustify-end">
                                <div className="flex space-x-4">
                                    {guestNavigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={classNames(
                                                location.pathname === item.href ? 'bg-gray-900 text-white border border-solid border-gray-400' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
