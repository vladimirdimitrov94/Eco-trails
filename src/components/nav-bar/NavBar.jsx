import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Начало', href: '/', current: false },
    { name: 'Разходки', href: '/trails', current: false },
    { name: 'Моите разходки', href: '#', current: false },
    { name: 'Добави', href: '/add', current: false },
    { name: 'Вписване', href: '/login', current: false },
    { name: 'Регистрация', href: '/register', current: false },
    { name: 'Изход', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    return (
        <div as="nav" className="bg-gray-800">

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className='text-white' >
                                Здравей, user!
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block ustify-end">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
