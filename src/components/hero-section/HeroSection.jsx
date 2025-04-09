
import { Link } from 'react-router-dom'


export default function HeroSecion() {

    return (
        <div className=" bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://www.cbisland.com/content/uploads/2020/05/everything-you-need-to-know-about-the-skyline-trail-1920x1006.jpg')" }}>
            <div className=" px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-neutral-50 sm:text-7xl">
                            Избери следващата си разходка
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-neutral-50 sm:text-xl/8">
                            Многообразие от различни пътеки и идеи за приключения сред природата в България и по света.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="trails"
                                className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Виж всички
                            </Link>
                            <Link to="/about" className="text-sm/6 font-semibold text-neutral-50">
                                Научи повече <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
