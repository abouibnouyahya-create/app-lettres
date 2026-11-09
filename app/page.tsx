import Link from "next/link"
import { courses } from "@/data/lessons"
import Logo from "@/components/Logo"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-12 md:pb-20 fade-in">

      {/* Bannière de bienvenue */}
      <section className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden mb-12 text-center">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20 shadow-inner mb-6 animate-click cursor-pointer">
            <Logo className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Ton parcours de Littérature
          </h1>
          <p className="text-indigo-100 text-lg max-w-lg">
            Choisis un module pour commencer à réviser.
          </p>
        </div>
      </section>

      {/* Liste des modules */}
      <section className="relative mt-16 pb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-16 text-center">Les modules</h2>

        <div className="flex flex-col items-center gap-12 relative">

          {/* Ligne pointillée verticale */}
          <div className="absolute top-10 bottom-10 left-1/2 w-3 bg-gray-200 -translate-x-1/2 rounded-full z-0 hidden md:block"></div>

          {courses.map((course, index) => {
            const isEven = index % 2 === 0;
            const offsetClass = isEven ? "md:-translate-x-24" : "md:translate-x-24";

            return (
              <div key={course.id} className={`relative z-10 w-full flex justify-center ${offsetClass}`}>
                <Link
                  href={`/modules/${course.id}`} // Redirige vers la page du module
                  className="group flex flex-col items-center animate-click"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-indigo-500 shadow-[0_8px_0_0_#4338ca] hover:bg-indigo-400 hover:translate-y-[4px] hover:shadow-[0_4px_0_0_#4338ca] active:translate-y-[8px] active:shadow-none transition-all flex items-center justify-center mb-4 relative">
                    <span className="text-4xl md:text-5xl text-white drop-shadow-md">
                      {index === 0 ? "📖" : index === 1 ? "📚" : "🖋️"}
                    </span>
                    <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-yellow-400 text-white p-2 rounded-full shadow-sm border-2 border-white">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                  </div>

                  <div className="bg-white px-6 py-3 md:px-8 md:py-4 rounded-2xl shadow-[0_4px_0_0_#e5e7eb] border-2 border-gray-100 text-center w-64 md:w-72 group-hover:border-indigo-300 transition-all">
                    <span className={`inline-block text-[10px] md:text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2 ${course.level === "Seconde" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                      }`}>
                      {course.level}
                    </span>
                    <h3 className="text-base md:text-lg font-extrabold text-gray-900 group-hover:text-indigo-600 leading-tight">
                      {course.title}
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}

        </div>
      </section>
    </div>
  )
}