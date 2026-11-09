import { Suspense } from "react"
import { notFound } from "next/navigation"
import { courses } from "@/data/lessons"
import EvaluationPlayer from "@/components/EvaluationPlayer"

async function EvaluationContent({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const course = courses.find((c) => c.id === id)

    if (!course || !course.finalQuiz) notFound()

    return (
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-12 w-full">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-gray-100">
                <div className="text-center mb-10 border-b-2 border-gray-100 pb-6">
                    <span className="bg-purple-100 text-purple-700 font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wide text-sm">
                        Évaluation notée
                    </span>
                    <h1 className="text-3xl font-extrabold text-gray-900 mt-4">{course.finalQuiz.title}</h1>
                    <p className="text-gray-500 mt-2">Barème : {course.finalQuiz.totalPoints} points</p>
                </div>

                <EvaluationPlayer quiz={course.finalQuiz} courseId={course.id} />
            </div>
        </div>
    )
}

export default function EvaluationPage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <main className="min-h-screen bg-gray-50">
            <Suspense fallback={<div className="text-center p-20 text-gray-500">Chargement de l'évaluation...</div>}>
                <EvaluationContent params={params} />
            </Suspense>
        </main>
    )
}