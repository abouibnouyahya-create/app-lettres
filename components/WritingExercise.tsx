"use client"

import { useState } from "react"

type WritingExerciseProps = {
    prompt: string
    options: string[]
    answer: string
    explanation?: string
    onAnswer?: () => void
}

export default function WritingExercise({ prompt, options, answer, explanation, onAnswer }: WritingExerciseProps) {
    const [selected, setSelected] = useState<string | null>(null)

    const handleSelect = (opt: string) => {
        if (selected !== null) return
        setSelected(opt)
        if (onAnswer) onAnswer() // Débloque le bouton Continuer
    }

    return (
        <div className="bg-[#fff5d4] border-2 border-[#ffc800] p-6 md:p-8 rounded-2xl my-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
                <span className="bg-[#ffc800] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">
                    Atelier
                </span>
                <h3 className="font-extrabold text-xl text-gray-800">À toi de choisir !</h3>
            </div>

            <p className="text-gray-800 font-bold text-lg mb-6">{prompt}</p>

            <div className="space-y-3">
                {options.map((opt) => {
                    const isSelected = selected === opt
                    const isCorrect = opt === answer

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
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-bold ${btnClass} ${selected === null ? "btn-3d" : ""
                                }`}
                        >
                            {opt}
                        </button>
                    )
                })}
            </div>

            {selected !== null && (
                <div className={`p-5 rounded-xl mt-6 border-2 animate-step ${selected === answer
                        ? "bg-[#d7ffb8] border-[#58cc02]"
                        : "bg-[#ffdfe0] border-[#ea2b2b]"
                    }`}>
                    <p className={`font-extrabold mb-1 ${selected === answer ? "text-[#58a700]" : "text-[#ea2b2b]"}`}>
                        {selected === answer ? "Parfait !" : "Ce n'est pas la meilleure réponse."}
                    </p>
                    <p className="text-gray-700 text-sm font-medium">{explanation}</p>
                </div>
            )}
        </div>
    )
}