export default function Footer() {

    return (
        <footer className="fixed bottom-0 right-0 w-full bg-white border-t border-gray-200">
            <div className="border-t border-gray-100 py-1 text-center text-xs text-gray-400">
                <div className="space-x-4 text-sm text-gray-600 pb-1">
                    <a href="/about" className="hover:text-lime-600 transition">За нас</a>
                    <a href="/trails" className="hover:text-lime-600 transition">Пътеки</a>
                </div>
                © {new Date().getFullYear()} Eco Trails. Всички права запазени.
            </div>
        </footer>
    );
}