import { Suspense } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { courses } from "@/data/lessons"

// On crée une palette de couleurs pour égayer les leçons
const themes = [
    { bg: "bg-blue-100", text: "text-blue-600", hoverBorder: "hover:border-blue-400", hoverShadow: "hover:shadow-[0_8px_0_0_#60a5fa]" },
    { bg: "bg-green-100", text: "text-green-600", hoverBorder: "hover:border-green-400", hoverShadow: "hover:shadow-[0_8px_0_0_#4ade80]" },
    { bg: "bg-amber-100", text: "text-amber-600", hoverBorder: "hover:border-amber-400", hoverShadow: "hover:shadow-[0_8px_0_0_#fbbf24]" },
    { bg: "bg-purple-100", text: "text-purple-600", hoverBorder: "hover:border-purple-400", hoverShadow: "hover:shadow-[0_8px_0_0_#a78bfa]" }
]

async function ModuleContent({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const course = courses.find((c) => c.id === id)

    if (!course) notFound()

    return (
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-12 fade-in w-full">
            {/* En-tête du module */}
            <div className="text-center mb-16">
                <Link href="/" className="text-indigo-600 font-bold hover:underline mb-4 inline-block">
                    ← Retour au tableau de bord
                </Link>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{course.title}</h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">{course.description}</p>
            </div>

            {/* Grille des leçons avec couleurs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.lessons.map((lesson, index) => {
                    // On pioche une couleur en fonction de l'index (0, 1, 2, 3...)
                    const theme = themes[index % themes.length];

                    return (
                        <Link
                            key={lesson.id}
                            href={`/lecons/${course.id}/${lesson.id}`}
                            className={`group bg-white p-6 rounded-3xl shadow-sm border-2 border-gray-100 ${theme.hoverBorder} ${theme.hoverShadow} hover:-translate-y-1 transition-all duration-200 flex items-center justify-between animate-click`}
                        >
                            <div className="flex items-center gap-4">
                                {/* Pastille avec la couleur du thème */}
                                <div className={`w-14 h-14 rounded-full ${theme.bg} ${theme.text} flex items-center justify-center font-extrabold text-2xl shadow-inner`}>
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-gray-700 transition-colors">
                                        {lesson.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1 font-medium">Clique pour commencer</p>
                                </div>
                            </div>

                            {/* Flèche colorée */}
                            <div className={`${theme.text} opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all`}>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </Link>
                    )
                })}
            </div>

            {/* Bouton d'évaluation finale (si le module en a une) */}
            {course.finalQuiz && (
                <div className="mt-12 bg-indigo-50 border-2 border-indigo-100 p-8 rounded-3xl text-center shadow-sm">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-2xl font-extrabold text-indigo-900 mb-2">Prêt pour le test final ?</h3>
                    <p className="text-indigo-700 mb-6 max-w-md mx-auto">
                        Prouve que tu as tout compris sur ce module et obtiens ta note sur {course.finalQuiz.totalPoints}.
                    </p>

                    <Link
                        href={`/modules/${course.id}/evaluation`}
                        className="inline-block px-10 py-4 bg-indigo-600 text-white font-extrabold text-lg rounded-2xl shadow-[0_5px_0_0_#3730a3] hover:bg-indigo-500 hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#3730a3] active:translate-y-[5px] active:shadow-none transition-all uppercase tracking-wide animate-click"
                    >
                        Commencer l'évaluation
                    </Link>
                </div>
            )}
        </div>
    )
}

export default function ModulePage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <main className="min-h-screen bg-gray-50">
            <Suspense fallback={<div className="text-center p-20 text-gray-500 font-medium">Chargement du module...</div>}>
                <ModuleContent params={params} />
            </Suspense>
        </main>
    )
}