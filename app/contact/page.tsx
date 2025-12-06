"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
        alert("¡Gracias por tu mensaje! Te responderé pronto.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="pt-24">
            <section className="section-padding">
                <div className="container-custom max-w-4xl">
                    <div className="mb-16">
                        <h1 className="mb-6">Contacto</h1>
                        <p className="text-xl text-muted-foreground">
                            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Envíame un mensaje y hablemos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl mb-6">Envíame un mensaje</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Asunto
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                                >
                                    Enviar mensaje
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl mb-6">Información de contacto</h2>

                            <div className="space-y-6">
                                <div className="p-6 rounded-lg bg-card border border-border">
                                    <h3 className="font-semibold mb-2">Email</h3>
                                    <a
                                        href="mailto:leonardo@example.com"
                                        className="text-primary hover:underline"
                                    >
                                        leonardo@example.com
                                    </a>
                                </div>

                                <div className="p-6 rounded-lg bg-card border border-border">
                                    <h3 className="font-semibold mb-2">Ubicación</h3>
                                    <p className="text-muted-foreground">Colombia</p>
                                </div>

                                <div className="p-6 rounded-lg bg-card border border-border">
                                    <h3 className="font-semibold mb-4">Redes Sociales</h3>
                                    <div className="space-y-3">
                                        <a
                                            href="https://github.com/leomz-dev"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <span>GitHub</span>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/leonardo-meza"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <span>LinkedIn</span>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://twitter.com/leonardo_meza"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <span>Twitter</span>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 rounded-lg bg-accent">
                                    <h3 className="font-semibold mb-2">Disponibilidad</h3>
                                    <p className="text-muted-foreground">
                                        Actualmente disponible para proyectos freelance y oportunidades de colaboración.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
