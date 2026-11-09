"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Lesson, TableRow } from "@/data/lessons"
import Quiz from "./Quiz"
import WritingExercise from "./WritingExercise"

export default function LessonPlayer({ lesson, courseId }: { lesson: Lesson, courseId: string }) {
    const [currentStep, setCurrentStep] = useState(0)
    const [isFinished, setIsFinished] = useState(false)

    const section = lesson.content[currentStep]
    const progress = ((currentStep) / lesson.content.length) * 100

    const nextStep = () => {
        if (currentStep < lesson.content.length - 1) {
            setCurrentStep((prev) => prev + 1)
        } else {
            setIsFinished(true)
        }
    }

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1)
        }
    }

    // FONCTION POUR L'AVANCEMENT AUTOMATIQUE
    const handleAnswer = () => {
        // On attend 1,5 seconde pour laisser le temps de lire l'explication, puis on avance
        setTimeout(() => {
            nextStep()
        }, 1500)
    }

    if (isFinished) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center mb-8 animate-bounce border-4 border-yellow-300">
                    <span className="text-6xl">🏆</span>
                </div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Leçon terminée !</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-md">
                    Félicitations, tu as terminé "{lesson.title}". Tu peux maintenant passer à la suite.
                </p>
                <div className="flex gap-4">
                    <Link
                        href={`/modules/${courseId}`}
                        className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-extrabold text-lg rounded-2xl shadow-[0_4px_0_0_#e5e7eb] hover:bg-gray-50 btn-3d uppercase tracking-wide"
                    >
                        Retour au module
                    </Link>
                    <Link
                        href="/"
                        className="px-8 py-4 bg-indigo-600 text-white font-extrabold text-lg rounded-2xl shadow-[0_4px_0_0_#3730a3] hover:bg-indigo-500 btn-3d uppercase tracking-wide"
                    >
                        Tableau de bord
                    </Link>
                </div>
            </div>
        )
    }

    // On cache le bouton "Continuer" si on est sur un quiz ou un atelier
    const isQuizOrWriting = section.type === "quiz" || section.type === "writing"

    return (
        <div className="flex flex-col h-full min-h-[70vh]">
            {/* Barre de progression style Duolingo */}
            <div className="mb-10 flex items-center gap-4">
                <Link href={`/modules/${courseId}`} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </Link>
                <div className="flex-1 bg-gray-200 rounded-full h-5 overflow-hidden shadow-inner">
                    <div
                        className="bg-[#58cc02] h-full rounded-full transition-all duration-700 ease-out relative"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="absolute top-1 left-2 right-2 h-1.5 bg-white/40 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Contenu de l'étape (animé) */}
            <div key={currentStep} className="flex-1 animate-step pb-12">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8">{section.heading}</h2>

                {section.type === "text" && (
                    <p className="text-xl leading-loose text-gray-700">{section.body}</p>
                )}

                {section.type === "table" && (
                    <div className="overflow-x-auto rounded-2xl border-2 border-gray-200 shadow-sm">
                        <table className="w-full text-left text-gray-700">
                            <thead className="bg-gray-100 text-gray-900 font-extrabold uppercase text-sm tracking-wider">
                                <tr>
                                    <th className="p-4 border-b-2 border-gray-200">Élément</th>
                                    <th className="p-4 border-b-2 border-gray-200">Explication</th>
                                    <th className="p-4 border-b-2 border-gray-200">Exemple</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {(section.body as TableRow[]).map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="p-4 font-bold text-gray-900">{row.col1}</td>
                                        <td className="p-4">{row.col2}</td>
                                        <td className="p-4 text-indigo-600 font-bold">{row.col3 ?? ""}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {section.type === "synthesis" && (
                    <div className="bg-[#ddf4ff] border-2 border-[#84d8ff] p-8 rounded-2xl shadow-sm">
                        <p className="text-xl text-[#1899d6] font-bold leading-relaxed">{section.body}</p>
                    </div>
                )}

                {section.type === "quiz" && (
                    <Quiz
                        key={currentStep}
                        question={section.body.question}
                        options={section.body.options}
                        answer={section.body.answer}
                        explanation={section.body.explanation}
                        onAnswer={handleAnswer} // <-- Déclenche l'avancée automatique
                    />
                )}

                {section.type === "writing" && (
                    <WritingExercise
                        key={`writing-${currentStep}`}
                        prompt={section.body.prompt}
                        options={section.body.options}
                        answer={section.body.answer}
                        explanation={section.body.explanation}
                        onAnswer={handleAnswer} // <-- Déclenche l'avancée automatique
                    />
                )}
            </div>

            {/* Pied de page avec boutons de navigation */}
            <div className="mt-auto pt-6 border-t-2 border-gray-200 flex justify-between items-center bg-white sticky bottom-0">

                {/* Bouton Précédent (toujours visible sauf à l'étape 0) */}
                <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className={`px-6 py-3 font-extrabold text-lg rounded-2xl transition-all uppercase tracking-wide border-2 ${currentStep === 0
                            ? "opacity-0 pointer-events-none"
                            : "bg-white border-gray-200 text-gray-500 shadow-[0_4px_0_0_#e5e7eb] hover:bg-gray-50 btn-3d"
                        }`}
                >
                    Précédent
                </button>

                {/* Bouton Continuer (caché s'il s'agit d'un quiz/atelier) */}
                <div className="w-48 flex justify-end">
                    {!isQuizOrWriting && (
                        <button
                            onClick={nextStep}
                            className="w-full px-8 py-3.5 bg-[#58cc02] text-white font-extrabold text-lg rounded-2xl shadow-[0_5px_0_0_#46a302] hover:bg-[#46a302] btn-3d uppercase tracking-wide"
                        >
                            {currentStep === lesson.content.length - 1 ? "Terminer" : "Continuer"}
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
}