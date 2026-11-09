"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

type Question = { question: string, options: string[], answer: string }
type Quiz = { title: string, totalPoints: number, questions: Question[] }

export default function EvaluationPlayer({ quiz, courseId }: { quiz: Quiz, courseId: string }) {
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [score, setScore] = useState(0)
    const [isFinished, setIsFinished] = useState(false)

    // MÉLANGE ALÉATOIRE AU CHARGEMENT
    useEffect(() => {
        // On copie le tableau et on le mélange
        const shuffled = [...quiz.questions].sort(() => Math.random() - 0.5)
        // On garde toutes les questions (ou on peut limiter à 10 si on en a plus)
        setQuestions(shuffled)
    }, [quiz.questions])

    if (questions.length === 0) return <div className="text-center py-10">Préparation du test...</div>

    const question = questions[currentIndex]
    const pointsPerQuestion = quiz.totalPoints / questions.length

    const handleSelect = (opt: string) => {
        if (selected !== null) return
        setSelected(opt)
        if (opt === question.answer) {
            setScore(prev => prev + pointsPerQuestion)
        }
    }

    const nextQuestion = () => {
        setSelected(null)
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1)
        } else {
            setIsFinished(true)
        }
    }

    if (isFinished) {
        return (
            <div className="text-center py-12">
                <div className="text-7xl mb-6">🎓</div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Évaluation terminée !</h2>
                <p className="text-xl text-gray-600 mb-8">
                    Tu as obtenu <strong className="text-indigo-600 text-3xl">{score} / {quiz.totalPoints}</strong>.
                </p>

                <div className="flex justify-center gap-4">
                    <Link href={`/modules/${courseId}`} className="px-6 py-3.5 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all uppercase">
                        Retour au module
                    </Link>
                    <Link href="/" className="px-6 py-3.5 bg-indigo-600 text-white font-bold rounded-2xl shadow-[0_5px_0_0_#4338ca] hover:bg-indigo-500 transition-all uppercase">
                        Tableau de bord
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="flex justify-between text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                <span>Question {currentIndex + 1} / {questions.length}</span>
                <span>{pointsPerQuestion} pts par question</span>
            </div>

            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 whitespace-pre-line">{question.question}</h2>

            <div className="space-y-3">
                {question.options.map((opt) => {
                    const isSelected = selected === opt
                    const isCorrect = opt === question.answer

                    let btnClass = "border-gray-200 bg-white hover:bg-gray-50 text-gray-800 shadow-[0_4px_0_0_#e5e7eb]"

                    if (selected !== null) {
                        if (isCorrect) {
                            btnClass = "border-[#58cc02] bg-[#d7ffb8] text-[#58a700] shadow-[0_4px_0_0_#58cc02]"
                        } else if (isSelected && !isCorrect) {
                            btnClass = "border-[#ea2b2b] bg-[#ffdfe0] text-[#ea2b2b] shadow-[0_4px_0_0_#ea2b2b]"
                        } else {
                            btnClass = "border-gray-200 bg-gray-50 text-gray-400 opacity-60"
                        }
                    }

                    return (
                        <button
                            key={opt}
                            onClick={() => handleSelect(opt)}
                            disabled={selected !== null}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-bold ${btnClass}`}
                        >
                            {opt}
                        </button>
                    )
                })}
            </div>

            {selected !== null && (
                <button
                    onClick={nextQuestion}
                    className="mt-8 w-full py-4 bg-indigo-600 text-white font-extrabold text-lg rounded-2xl shadow-[0_5px_0_0_#4338ca] hover:bg-indigo-500 hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all uppercase"
                >
                    {currentIndex === questions.length - 1 ? "Voir mon score" : "Question suivante"}
                </button>
            )}
        </div>
    )
}