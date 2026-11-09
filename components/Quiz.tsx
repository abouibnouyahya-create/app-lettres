"use client"

import { useState } from "react"

type QuizProps = {
    question: string
    options: string[]
    answer: string
    explanation?: string
    onAnswer?: () => void
}

export default function Quiz({ question, options, answer, explanation, onAnswer }: QuizProps) {
    const [selected, setSelected] = useState<string | null>(null)

    const handleSelect = (opt: string) => {
        if (selected !== null) return
        setSelected(opt)
        if (onAnswer) onAnswer() // Débloque le bouton Continuer
    }

    return (
        <div className="my-4">
            <h3 className="font-extrabold text-2xl text-gray-800 mb-8">{question}</h3>

            <div className="space-y-4">
                {options.map((opt) => {
                    const isSelected = selected === opt
                    const isCorrect = opt === answer

                    // Style par défaut (blanc avec effet 3D)
                    let btnClass = "border-gray-200 bg-white hover:bg-gray-50 text-gray-800 shadow-[0_4px_0_0_#e5e7eb]"

                    if (selected !== null) {
                        if (isCorrect) {
                            // Bonne réponse : Vert
                            btnClass = "border-[#58cc02] bg-[#d7ffb8] text-[#58a700] shadow-[0_4px_0_0_#58cc02]"
                        } else if (isSelected && !isCorrect) {
                            // Mauvaise réponse : Rouge
                            btnClass = "border-[#ea2b2b] bg-[#ffdfe0] text-[#ea2b2b] shadow-[0_4px_0_0_#ea2b2b]"
                        } else {
                            // Autres réponses : Grisées
                            btnClass = "border-gray-200 bg-gray-50 text-gray-400 opacity-60"
                        }
                    }

                    return (
                        <button
                            key={opt}
                            onClick={() => handleSelect(opt)}
                            disabled={selected !== null}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 font-bold text-lg ${btnClass} ${selected === null ? "btn-3d" : ""
                                }`}
                        >
                            {opt}
                        </button>
                    )
                })}
            </div>

            {selected !== null && (
                <div className={`p-6 rounded-2xl mt-8 border-2 animate-step ${selected === answer
                        ? "bg-[#d7ffb8] border-[#58cc02]"
                        : "bg-[#ffdfe0] border-[#ea2b2b]"
                    }`}>
                    <p className={`font-extrabold text-xl mb-2 ${selected === answer ? "text-[#58a700]" : "text-[#ea2b2b]"}`}>
                        {selected === answer ? "Excellent !" : "Oups, ce n'est pas ça."}
                    </p>
                    <p className="text-gray-700 font-medium">{explanation}</p>
                </div>
            )}
        </div>
    )
}