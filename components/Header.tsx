import Link from "next/link"
import Logo from "./Logo"

export default function Header() {
    return (
        <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-50">
            <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-[0_4px_0_0_#3730a3]">
                        <Logo className="w-6 h-6" />
                    </div>
                    <span className="font-extrabold text-2xl text-gray-900 tracking-tight">app-lettres</span>
                </Link>

                <nav className="flex gap-6 items-center">
                    <Link href="/" className="text-sm font-extrabold text-gray-500 hover:text-indigo-600 transition-colors uppercase tracking-wide">
                        Tableau de bord
                    </Link>
                    <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-extrabold border-2 border-indigo-200 shadow-sm cursor-pointer hover:bg-indigo-200 transition-colors">
                        E
                    </div>
                </nav>
            </div>
        </header>
    )
}