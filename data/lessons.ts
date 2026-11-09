export type LessonLevel = "Seconde" | "Terminale"

export type TableRow = { col1: string; col2: string; col3?: string }

export type LessonSection =
    | { heading: string; type: "text"; body: string }
    | { heading: string; type: "table"; body: TableRow[] }
    | { heading: string; type: "synthesis"; body: string }
    | { heading: string; type: "quiz"; body: { question: string; options: string[]; answer: string; explanation?: string } }
    | { heading: string; type: "writing"; body: { prompt: string; options: string[]; answer: string; explanation?: string } }

export type Lesson = {
    id: string
    title: string
    level: LessonLevel
    content: LessonSection[]
}

export type Course = {
    id: string
    title: string
    level: LessonLevel
    description: string
    lessons: Lesson[]
    finalQuiz?: {
        title: string
        totalPoints: number
        questions: {
            question: string
            options: string[]
            answer: string
        }[]
    }
}

export const courses: Course[] = [
    {
        id: "generalites-litterature",
        title: "Généralités sur la littérature",
        level: "Seconde",
        description: "Les bases fondamentales pour comprendre la littérature.",
        lessons: [
            {
                id: "definition",
                title: "Définition",
                level: "Seconde",
                content: [
                    {
                        heading: "Qu'est-ce que la littérature ?",
                        type: "text",
                        body: "La littérature est l'ensemble des œuvres — écrites et orales — qui utilisent la langue de manière travaillée, soignée, pour exprimer des idées, des émotions, des rêves, des critiques ou des savoirs. Elle ne se limite donc pas aux textes imprimés."
                    },
                    {
                        heading: "Les œuvres orales",
                        type: "text",
                        body: "La littérature englobe aussi les récits transmis de bouche à oreille, les épopées chantées, les contes, les mythes, les proverbes, les chants, les devinettes, les généalogies et les poèmes récités par les griots et les conteurs. Ces œuvres orales sont conservées par la mémoire collective et transmises par la voix, souvent accompagnées de musique, de rythme et de gestes."
                    },
                    {
                        heading: "Ce qui distingue la littérature",
                        type: "text",
                        body: "Ce qui distingue une œuvre littéraire — orale ou écrite — d'un simple message, c'est la recherche esthétique (le soin apporté à la langue, aux images, au rythme) et sa portée : elle parle de l'humain et de l'universel, et elle traverse les époques."
                    },
                    {
                        heading: "Quiz 1 : La base",
                        type: "quiz",
                        body: {
                            question: "Quel élément distingue une œuvre littéraire d'un simple message écrit ?",
                            options: ["Sa longueur", "La recherche esthétique", "Son prix de vente"],
                            answer: "La recherche esthétique",
                            explanation: "La littérature travaille la langue (images, rythme) pour toucher à l'universel."
                        }
                    },
                    {
                        heading: "Quiz 2 : Un peu plus difficile",
                        type: "quiz",
                        body: {
                            question: "Un proverbe africain transmis uniquement à l'oral peut-il être considéré comme de la littérature ?",
                            options: ["Non, la littérature doit être écrite.", "Oui, il utilise la langue de manière imagée.", "Oui, mais seulement s'il est long."],
                            answer: "Oui, il utilise la langue de manière imagée.",
                            explanation: "Le proverbe est un travail sur la langue (métaphores) qui a une portée universelle, c'est de la littérature orale."
                        }
                    },
                    {
                        heading: "Réflexion 1",
                        type: "quiz",
                        body: {
                            question: "Pourquoi peut-on dire que la littérature orale africaine est aussi importante que la littérature écrite ?",
                            options: [
                                "Parce qu'elle a été écrite plus tard.",
                                "Parce qu'elle conserve la mémoire et la sagesse des peuples à travers les siècles.",
                                "Parce qu'elle est plus facile à lire."
                            ],
                            answer: "Parce qu'elle conserve la mémoire et la sagesse des peuples à travers les siècles.",
                            explanation: "L'oralité est le socle de la culture africaine. Les griots ont préservé l'histoire et la philosophie des peuples sans avoir besoin de papier."
                        }
                    },
                    {
                        heading: "Réflexion 2",
                        type: "quiz",
                        body: {
                            question: "Un SMS envoyé à un ami raconte une petite blague. Est-ce de la littérature ?",
                            options: [
                                "Oui, car c'est un message écrit.",
                                "Non, car il n'y a pas de recherche esthétique ni de portée universelle.",
                                "Oui, si le message est très long."
                            ],
                            answer: "Non, car il n'y a pas de recherche esthétique ni de portée universelle.",
                            explanation: "Un SMS est un message utilitaire. Même s'il est drôle, il ne cherche pas à travailler la langue pour exprimer une vision de l'humain."
                        }
                    },
                    {
                        heading: "Atelier : Reconnaître une œuvre",
                        type: "writing",
                        body: {
                            prompt: "Parmi ces propositions, laquelle est une œuvre de littérature ORALE ?",
                            options: [
                                "Le roman 'L'Enfant noir' de Camara Laye",
                                "Un proverbe bambara transmis par les anciens",
                                "Un article de journal sur le football"
                            ],
                            answer: "Un proverbe bambara transmis par les anciens",
                            explanation: "Le proverbe est transmis de bouche à oreille, sans être écrit. C'est de la littérature orale."
                        }
                    }
                ]
            },
            {
                id: "fonctions",
                title: "Fonctions de la littérature",
                level: "Seconde",
                content: [
                    {
                        heading: "À quoi sert la littérature ?",
                        type: "text",
                        body: "La littérature n'est pas seulement un divertissement. Elle remplit plusieurs fonctions essentielles : divertir, instruire, faire réfléchir et critiquer."
                    },
                    {
                        heading: "Tableau des fonctions",
                        type: "table",
                        body: [
                            { col1: "Divertir", col2: "Procure du plaisir, fait rêver", col3: "Contes, romans d'aventure" },
                            { col1: "Instruire", col2: "Transmet des connaissances ou une morale", col3: "Fables, essais" },
                            { col1: "Faire réfléchir", col2: "Pousse à s'interroger sur soi et le monde", col3: "Poésie, roman psychologique" },
                            { col1: "Critiquer", col2: "Dénonce les injustices et les abus", col3: "Roman engagé, théâtre satirique" }
                        ]
                    },
                    {
                        heading: "Quiz 1 : La fonction principale",
                        type: "quiz",
                        body: {
                            question: "Quelle est la fonction principale d'une fable ?",
                            options: ["Divertir uniquement", "Instruire en donnant une morale", "Critiquer le gouvernement"],
                            answer: "Instruire en donnant une morale",
                            explanation: "La fable raconte une histoire pour faire passer un enseignement."
                        }
                    },
                    {
                        heading: "Quiz 2 : Analyse",
                        type: "quiz",
                        body: {
                            question: "Un auteur écrit un roman pour dénoncer le travail des enfants. Quelle est la fonction ?",
                            options: ["Divertir", "Critiquer / Dénoncer", "Instruire"],
                            answer: "Critiquer / Dénoncer",
                            explanation: "L'auteur utilise la littérature pour faire réagir le lecteur face à une injustice. C'est la fonction critique."
                        }
                    },
                    {
                        heading: "Réflexion 1",
                        type: "quiz",
                        body: {
                            question: "Dans un conte, un enfant apprend à ne pas s'aventurer seul dans la forêt. Quelle est la fonction de ce conte ?",
                            options: [
                                "Critiquer la forêt.",
                                "Instruire (transmettre une règle de prudence).",
                                "Faire peur pour le plaisir."
                            ],
                            answer: "Instruire (transmettre une règle de prudence).",
                            explanation: "Le conte a souvent une fonction didactique cachée : il apprend aux enfants les règles de vie et de prudence."
                        }
                    },
                    {
                        heading: "Réflexion 2",
                        type: "quiz",
                        body: {
                            question: "Une même œuvre littéraire peut-elle remplir plusieurs fonctions à la fois ?",
                            options: [
                                "Non, une œuvre n'a qu'une seule fonction.",
                                "Oui, un roman peut divertir tout en faisant réfléchir et en dénonçant.",
                                "Oui, mais seulement pour les poèmes."
                            ],
                            answer: "Oui, un roman peut divertir tout en faisant réfléchir et en dénonçant.",
                            explanation: "Une œuvre littéraire est complexe : elle peut être passionnante (divertir), faire réfléchir sur la société (critiquer) et transmettre une vision du monde."
                        }
                    },
                    {
                        heading: "Atelier : Associer une œuvre",
                        type: "writing",
                        body: {
                            prompt: "Une chanson qui raconte l'histoire des rois du Mali. Quelle est sa fonction principale ?",
                            options: ["Instruire (transmettre l'histoire)", "Critiquer", "Faire peur"],
                            answer: "Instruire (transmettre l'histoire)",
                            explanation: "Les griots transmettaient la mémoire des peuples par le chant."
                        }
                    }
                ]
            },
            {
                id: "genres",
                title: "Genres littéraires",
                level: "Seconde",
                content: [
                    {
                        heading: "Les grands genres",
                        type: "text",
                        body: "On distingue plusieurs genres littéraires à savoir le roman, la poésie, le conte, le théâtre, l'essai, les proverbes, l'épopée... Dans ce cours, nous allons nous concentrer sur cinq genres majeurs : le roman, le théâtre, la fable, la poésie et l'essai."
                    },
                    {
                        heading: "Tableau des genres et exemples",
                        type: "table",
                        body: [
                            { col1: "Le roman", col2: "Récit long en prose qui raconte une histoire fictive.", col3: "Les Misérables (Victor Hugo), Sous l'orage (Seydou Badian)" },
                            { col1: "Le théâtre", col2: "Texte écrit pour être joué sur scène.", col3: "Le Cid (Corneille), La Mort de Chaka (Seydou Badian)" },
                            { col1: "La fable", col2: "Court récit qui se termine par une morale.", col3: "Le Corbeau et le Renard (La Fontaine)" },
                            { col1: "La poésie", col2: "Joue sur les sons, les rythmes et les images.", col3: "Les Fleurs du mal (Baudelaire), Chants d'ombre (Senghor)" },
                            { col1: "L'essai", col2: "Texte qui défend une opinion ou critique la société.", col3: "Discours sur le colonialisme (Aimé Césaire)" }
                        ]
                    },
                    {
                        heading: "Quiz 1 : Reconnaître le genre",
                        type: "quiz",
                        body: {
                            question: "À quel genre appartient 'Le Cid' de Corneille ?",
                            options: ["Le roman", "Le théâtre", "L'essai"],
                            answer: "Le théâtre",
                            explanation: "'Le Cid' est une pièce destinée à être jouée sur scène."
                        }
                    },
                    {
                        heading: "Quiz 2 : Les caractéristiques",
                        type: "quiz",
                        body: {
                            question: "Un texte est écrit en vers, avec des rimes. À quel genre appartient-il ?",
                            options: ["Le roman", "La poésie", "Le théâtre"],
                            answer: "La poésie",
                            explanation: "Les vers et les rimes sont les caractéristiques principales de la poésie."
                        }
                    },
                    {
                        heading: "Réflexion 1",
                        type: "quiz",
                        body: {
                            question: "Quelle est la différence principale entre une fable et un roman ?",
                            options: [
                                "La fable est toujours écrite en vers.",
                                "La fable est courte et a une morale, le roman est long et raconte une histoire complexe.",
                                "Le roman est uniquement pour les enfants."
                            ],
                            answer: "La fable est courte et a une morale, le roman est long et raconte une histoire complexe.",
                            explanation: "La fable va à l'essentiel pour donner une leçon. Le roman développe des personnages et des intrigues sur plusieurs pages."
                        }
                    },
                    {
                        heading: "Réflexion 2",
                        type: "quiz",
                        body: {
                            question: "Pourquoi dit-on que le théâtre est un texte 'à jouer' et non 'à lire' ?",
                            options: [
                                "Parce que les acteurs doivent lire le texte.",
                                "Parce qu'il est écrit pour être incarné physiquement sur une scène par des acteurs.",
                                "Parce qu'il n'a pas de dialogue."
                            ],
                            answer: "Parce qu'il est écrit pour être incarné physiquement sur une scène par des acteurs.",
                            explanation: "Le théâtre est vivant. Il est écrit avec des didascalies (indications de jeu) pour prendre vie face à un public."
                        }
                    },
                    {
                        heading: "Atelier : Associer une œuvre",
                        type: "writing",
                        body: {
                            prompt: "'Discours sur le colonialisme' d'Aimé Césaire est un texte qui défend des idées. À quel genre appartient-il ?",
                            options: ["Le roman", "L'essai", "La poésie"],
                            answer: "L'essai",
                            explanation: "C'est un essai car l'auteur y analyse et critique le système colonial de manière argumentée."
                        }
                    }
                ]
            },
            {
                id: "mouvements",
                title: "Mouvements littéraires",
                level: "Terminale",
                content: [
                    {
                        heading: "Les époques littéraires",
                        type: "text",
                        body: "Un mouvement littéraire est un ensemble d'écrivains qui partagent une même vision du monde et une même manière d'écrire à une époque donnée. Voici les principaux mouvements à connaître, du XVIe au XXe siècle."
                    },
                    {
                        heading: "Tableau détaillé des mouvements",
                        type: "table",
                        body: [
                            { col1: "L'Humanisme (XVIe s.)", col2: "Confiance en l'homme et en son savoir. Retour aux textes antiques.", col3: "Rabelais, Montaigne" },
                            { col1: "Le Classicisme (XVIIe s.)", col2: "Ordre, raison, respect des règles strictes (théâtre).", col3: "Molière, Racine, Corneille" },
                            { col1: "Les Lumières (XVIIIe s.)", col2: "Combat pour la liberté, la justice, la tolérance et le progrès.", col3: "Voltaire, Rousseau, Diderot" },
                            { col1: "Le Romantisme (XIXe s.)", col2: "Expression des sentiments, du 'moi', de la nature et de la mélancolie.", col3: "Victor Hugo, Lamartine" },
                            { col1: "Le Réalisme (XIXe s.)", col2: "Description fidèle et objective de la société réelle et des classes sociales.", col3: "Balzac, Flaubert, Maupassant" },
                            { col1: "Le Parnasse (XIXe s.)", col2: "Culte de la beauté, de l'art pour l'art. Refus des sentiments.", col3: "Leconte de Lisle, Théophile Gautier" },
                            { col1: "Le Symbolisme (Fin XIXe s.)", col2: "Importance des sensations, des images et de la musicalité.", col3: "Baudelaire, Rimbaud, Verlaine" },
                            { col1: "La Négritude (XXe s.)", col2: "Affirmation des valeurs culturelles noires et de l'identité africaine.", col3: "Senghor, Césaire, Damas" }
                        ]
                    },
                    {
                        heading: "Quiz 1 : Associer un auteur",
                        type: "quiz",
                        body: {
                            question: "À quel mouvement appartient Victor Hugo ?",
                            options: ["Le Classicisme", "Le Romantisme", "Le Réalisme"],
                            answer: "Le Romantisme",
                            explanation: "Victor Hugo est le chef de file du Romantisme."
                        }
                    },
                    {
                        heading: "Quiz 2 : Associer une idée",
                        type: "quiz",
                        body: {
                            question: "Quel mouvement du XXe siècle défend l'identité africaine ?",
                            options: ["Le romantisme", "Le réalisme", "La Négritude"],
                            answer: "La Négritude",
                            explanation: "La Négritude est un mouvement né au XXe siècle pour valoriser la culture noire."
                        }
                    },
                    {
                        heading: "Quiz 3 : Un peu plus difficile",
                        type: "quiz",
                        body: {
                            question: "Quel mouvement prône 'l'art pour l'art' et le culte de la beauté formelle, en rejetant les sentiments ?",
                            options: ["Le Romantisme", "Le Parnasse", "Les Lumières"],
                            answer: "Le Parnasse",
                            explanation: "Les parnassiens refusaient les épanchements romantiques. Ils voulaient une poésie objective et parfaite dans sa forme."
                        }
                    },
                    {
                        heading: "Réflexion 1",
                        type: "quiz",
                        body: {
                            question: "Pourquoi le mouvement des Lumières a-t-il eu un impact politique majeur au XVIIIe siècle ?",
                            options: [
                                "Parce qu'ils écrivaient des romans d'amour.",
                                "Parce qu'ils ont remis en cause l'absolutisme et les privilèges au nom de la raison.",
                                "Parce qu'ils ont inventé l'électricité."
                            ],
                            answer: "Parce qu'ils ont remis en cause l'absolutisme et les privilèges au nom de la raison.",
                            explanation: "Voltaire, Rousseau et Diderot ont utilisé la littérature pour critiquer la monarchie absolue et préparer la Révolution française."
                        }
                    },
                    {
                        heading: "Réflexion 2",
                        type: "quiz",
                        body: {
                            question: "Quelle est la grande différence entre le Romantisme et le Réalisme ?",
                            options: [
                                "Le Romantisme parle de sentiments personnels, le Réalisme décrit la société telle qu'elle est.",
                                "Le Romantisme est du XIXe siècle, le Réalisme du XVIIIe.",
                                "Les romantiques écrivent en vers, les réalistes en prose."
                            ],
                            answer: "Le Romantisme parle de sentiments personnels, le Réalisme décrit la société telle qu'elle est.",
                            explanation: "Victor Hugo (Romantisme) laisse parler son cœur, tandis que Balzac (Réalisme) observe la société comme un scientifique pour en décrire les moindres détails."
                        }
                    },
                    {
                        heading: "Atelier : Associer un auteur",
                        type: "writing",
                        body: {
                            prompt: "Léopold Sédar Senghor a célébré la beauté de l'Afrique. À quel mouvement appartient-il ?",
                            options: ["Le classicisme", "Le Parnasse", "La Négritude"],
                            answer: "La Négritude",
                            explanation: "Senghor est l'un des pères fondateurs de la Négritude."
                        }
                    }
                ]
            }
        ],
        // --- BANQUE DE 20 QUESTIONS POUR L'ÉVALUATION FINALE ---
        finalQuiz: {
            title: "Évaluation finale : Généralités sur la littérature",
            totalPoints: 20,
            questions: [
                // 1
                {
                    question: "Qu'est-ce que la littérature ?",
                    options: [
                        "Uniquement des livres imprimés",
                        "L'ensemble des œuvres écrites et orales utilisant la langue de manière travaillée",
                        "Un ensemble de règles de grammaire"
                    ],
                    answer: "L'ensemble des œuvres écrites et orales utilisant la langue de manière travaillée"
                },
                // 2
                {
                    question: "Un proverbe africain transmis uniquement à l'oral peut-il être considéré comme de la littérature ?",
                    options: ["Non, la littérature doit être écrite.", "Oui, il utilise la langue de manière imagée.", "Oui, mais seulement s'il est long."],
                    answer: "Oui, il utilise la langue de manière imagée."
                },
                // 3
                {
                    question: "Pourquoi dit-on que la littérature orale est le 'socle' de la culture africaine ?",
                    options: [
                        "Parce qu'elle est plus ancienne et qu'elle a conservé l'histoire et la sagesse avant l'écriture.",
                        "Parce qu'elle est plus facile à apprendre à l'école.",
                        "Parce qu'elle est uniquement utilisée pour les cérémonies."
                    ],
                    answer: "Parce qu'elle est plus ancienne et qu'elle a conservé l'histoire et la sagesse avant l'écriture."
                },
                // 4
                {
                    question: "Lisez cet extrait : 'Les épopées africaines, transmises par les griots, sont des récits qui mêlent histoire et mythologie.'\n\nÀ quel genre littéraire appartient ce type de récit ?",
                    options: ["Un essai philosophique", "Une épopée (littérature orale)", "Une pièce de théâtre"],
                    answer: "Une épopée (littérature orale)"
                },
                // 5
                {
                    question: "Quelle est la fonction principale d'une fable ?",
                    options: ["Divertir uniquement", "Instruire en donnant une morale", "Faire peur aux enfants"],
                    answer: "Instruire en donnant une morale"
                },
                // 6
                {
                    question: "Lisez ce texte : 'L'auteur dépeint la misère des ouvriers pour réveiller la conscience du lecteur.'\n\nQuelle est la fonction de la littérature illustrée ici ?",
                    options: ["Divertir", "Critiquer / Dénoncer une injustice", "Instruire en donnant une leçon de morale"],
                    answer: "Critiquer / Dénoncer une injustice"
                },
                // 7
                {
                    question: "Une même œuvre littéraire peut-elle remplir plusieurs fonctions à la fois ?",
                    options: [
                        "Non, une œuvre n'a qu'une seule fonction.",
                        "Oui, un roman peut divertir tout en faisant réfléchir et en dénonçant.",
                        "Oui, mais seulement pour les poèmes."
                    ],
                    answer: "Oui, un roman peut divertir tout en faisant réfléchir et en dénonçant."
                },
                // 8
                {
                    question: "Le roman 'Sous l'orage' de Seydou Badian appartient à quel genre ?",
                    options: ["Le théâtre", "Le roman", "L'essai"],
                    answer: "Le roman"
                },
                // 9
                {
                    question: "Quelle différence majeure existe-t-il entre le théâtre et le roman ?",
                    options: [
                        "Le roman est écrit en vers, le théâtre en prose.",
                        "Le théâtre est écrit pour être joué sur scène, le roman pour être lu.",
                        "Le théâtre est plus court que le roman."
                    ],
                    answer: "Le théâtre est écrit pour être joué sur scène, le roman pour être lu."
                },
                // 10
                {
                    question: "Un texte dans lequel l'auteur défend son opinion sur la société sans raconter d'histoire fictive est :",
                    options: ["Une fable", "Un essai", "Une pièce de théâtre"],
                    answer: "Un essai"
                },
                // 11
                {
                    question: "Pourquoi une fable est-elle considérée comme une œuvre littéraire ?",
                    options: [
                        "Parce qu'elle est courte.",
                        "Parce qu'elle utilise un récit fictif et des animaux pour transmettre une morale, avec un travail sur la langue.",
                        "Parce qu'elle est toujours écrite en vers."
                    ],
                    answer: "Parce qu'elle utilise un récit fictif et des animaux pour transmettre une morale, avec un travail sur la langue."
                },
                // 12
                {
                    question: "Quel mouvement du XIXe siècle prône le culte de la beauté formelle et rejette l'expression des sentiments personnels ?",
                    options: ["Le Romantisme", "Le Parnasse", "Le Réalisme"],
                    answer: "Le Parnasse"
                },
                // 13
                {
                    question: "Quel est le point commun entre un griot et un poète de la Négritude ?",
                    options: [
                        "Ils écrivent tous les deux des romans policiers.",
                        "Ils célèbrent et transmettent les valeurs culturelles africaines.",
                        "Ils refusent l'utilisation de l'oralité."
                    ],
                    answer: "Ils célèbrent et transmettent les valeurs culturelles africaines."
                },
                // 14
                {
                    question: "À quel mouvement appartient Victor Hugo ?",
                    options: ["Le Classicisme", "Le Romantisme", "Le Réalisme"],
                    answer: "Le Romantisme"
                },
                // 15
                {
                    question: "Pourquoi le mouvement des Lumières a-t-il eu un impact politique majeur au XVIIIe siècle ?",
                    options: [
                        "Parce qu'ils écrivaient des romans d'amour.",
                        "Parce qu'ils ont remis en cause l'absolutisme et les privilèges au nom de la raison.",
                        "Parce qu'ils ont inventé l'électricité."
                    ],
                    answer: "Parce qu'ils ont remis en cause l'absolutisme et les privilèges au nom de la raison."
                },
                // 16
                {
                    question: "Quelle est la grande différence entre le Romantisme et le Réalisme ?",
                    options: [
                        "Le Romantisme parle de sentiments personnels, le Réalisme décrit la société telle qu'elle est.",
                        "Le Romantisme est du XIXe siècle, le Réalisme du XVIIIe.",
                        "Les romantiques écrivent en vers, les réalistes en prose."
                    ],
                    answer: "Le Romantisme parle de sentiments personnels, le Réalisme décrit la société telle qu'elle est."
                },
                // 17
                {
                    question: "Quel mouvement du XXe siècle défend l'identité et les cultures africaines ?",
                    options: ["Le romantisme", "La négritude", "Le classicisme"],
                    answer: "La négritude"
                },
                // 18
                {
                    question: "Quel poète est un célèbre représentant de la Négritude ?",
                    options: ["Victor Hugo", "Léopold Sédar Senghor", "Molière"],
                    answer: "Léopold Sédar Senghor"
                },
                // 19
                {
                    question: "Dans la phrase 'Le poète chante la beauté de l'Afrique', le mot 'chante' est utilisé au sens :",
                    options: ["Propre", "Figuré (pour dire qu'il célèbre)", "Péjoratif"],
                    answer: "Figuré (pour dire qu'il célèbre)"
                },
                // 20
                {
                    question: "Quel est le genre littéraire écrit spécifiquement pour être joué sur scène ?",
                    options: ["Le roman", "L'essai", "Le théâtre"],
                    answer: "Le théâtre"
                }
            ]
        }
    },
    {
        id: "generalites-poesie",
        title: "Généralités sur la poésie",
        level: "Seconde",
        description: "Découvrir l'art des mots et des rythmes.",
        lessons: [
            {
                id: "definition-poesie",
                title: "Qu'est-ce que la poésie ?",
                level: "Seconde",
                content: [
                    {
                        heading: "Un genre à part",
                        type: "text",
                        body: "La poésie est un genre littéraire très ancien qui se caractérise par un travail particulier sur la langue : le rythme, les sonorités et les images."
                    }
                ]
            }
        ]
    },
    {
        id: "poesie-negro-africaine",
        title: "La poésie négro-africaine",
        level: "Terminale",
        description: "La célébration de l'Afrique et de la négritude.",
        lessons: [
            {
                id: "negritude",
                title: "Le mouvement de la Négritude",
                level: "Terminale",
                content: [
                    {
                        heading: "Définition",
                        type: "text",
                        body: "La poésie négro-africaine puise ses racines dans la tradition orale. Au XXe siècle, des poètes comme Senghor ont chanté la beauté de l'Afrique."
                    }
                ]
            }
        ]
    }
]