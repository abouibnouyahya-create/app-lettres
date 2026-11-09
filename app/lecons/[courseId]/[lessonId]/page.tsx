import { Suspense } from "react"
import { notFound } from "next/navigation"
import { courses } from "@/data/lessons"
import LessonPlayer from "@/components/LessonPlayer"

async function LessonContent({ params }: { params: Promise<{ courseId: string, lessonId: string }> }) {
    const { courseId, lessonId } = await params

    const course = courses.find((c) => c.id === courseId)
    if (!course) notFound()

    const lesson = course.lessons.find((l) => l.id === lessonId)
    if (!lesson) notFound()

    return (
        <div className="max-w-3xl mx-auto p-6 md:p-10 bg-white shadow-xl rounded-3xl border-2 border-gray-100 mt-32 mb-8 flex flex-col min-h-[80vh]">
            <LessonPlayer lesson={lesson} courseId={courseId} />
        </div>
    )
}

export default function LessonPage({ params }: { params: Promise<{ courseId: string, lessonId: string }> }) {
    return (
        <main className="min-h-screen bg-gray-50">
            <Suspense fallback={<div className="text-center p-10 text-gray-500">Chargement de la leçon...</div>}>
                <LessonContent params={params} />
            </Suspense>
        </main>
    )
}