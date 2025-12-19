import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    return (
        <section className="mb-20 animate-slide-up px-6" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
                Educación y Certificaciones
            </h2>
            <p className="text-lg text-gray-600 dark:text-text-secondary-dark leading-relaxed">
                Constantemente actualizo mis conocimientos a través de cursos, certificaciones y participación activa en la comunidad de desarrolladores.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:bg-gray-50 dark:hover:bg-white/5 dark:hover:border-white/5 transition-all">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Ingeniería de Software</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-500">Universidad Tecnológica</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:bg-gray-50 dark:hover:bg-white/5 dark:hover:border-white/5 transition-all">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300">
                        <Award className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Full Stack Web Development</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-500">Certificación Profesional</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
