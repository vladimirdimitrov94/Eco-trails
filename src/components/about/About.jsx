
export default function About() {
    return (
        <section className="bg-white py-16 px-6 lg:px-32">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Нашата мисия</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-10">
                    Създадохме тази платформа с мисията да вдъхнови хората да излязат навън,
                    да преоткрият природата и да споделят любими маршрути и идеи за прекарване на
                    време сред планини, гори и пътеки. Вярваме, че връзката с природата прави живота
                    по-балансиран, а споделените изживявания — още по-смислени.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="bg-gray-100 p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Споделяй</h3>
                    <p className="text-gray-700 text-sm">
                        Добавяй свои пътеки и маршрути, които искаш други да открият и изживеят.
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Откривай</h3>
                    <p className="text-gray-700 text-sm">
                        Намери нови идеи за приключения, разходки, къмпинг или просто бягство от града.
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Свързвай се</h3>
                    <p className="text-gray-700 text-sm">
                        Бъди част от общност, която обича природата и цени устойчивия начин на живот.
                    </p>
                </div>
            </div>

            <div className="text-center mt-12">
                <a
                    href="/trails"
                    className="inline-block bg-lime-600 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-lime-500 transition"
                >
                    Разгледай пътеките
                </a>
            </div>
        </section>
    );
}