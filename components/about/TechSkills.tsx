import { Monitor, Server, Database, Shield, Layout, Settings } from "lucide-react";

export default function TechSkills() {
    return (
        <section className="mb-20 animate-slide-up px-6" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
                Habilidades Técnicas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {/* Frontend */}
                <div className="group p-6 rounded-2xl bg-white dark:bg-card-dark/40 backdrop-blur-sm border border-gray-200 dark:border-white/5 hover:border-gray-400 dark:hover:border-zinc-700 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <Monitor className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frontend</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3"></span>
                            React & Next.js
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></span>
                            TypeScript
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-3"></span>
                            Tailwind CSS
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-3"></span>
                            Responsive Design
                        </li>
                    </ul>
                </div>

                {/* Backend */}
                <div className="group p-6 rounded-2xl bg-white dark:bg-card-dark/40 backdrop-blur-sm border border-gray-200 dark:border-white/5 hover:border-gray-400 dark:hover:border-zinc-700 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <Server className="w-8 h-8 text-green-600 dark:text-green-400" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backend</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3"></span>
                            Node.js & Express
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></span>
                            PostgreSQL & MongoDB
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-3"></span>
                            RESTful APIs
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3"></span>
                            Authentication & Security
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
