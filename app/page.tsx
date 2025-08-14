"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Palette, Users } from "lucide-react"

export default function LandingPage() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const skills = {
    Backend: ["PHP", "Laravel", "Symfony", ".NET", "Go"],
    Frontend: ["Flutter", "WordPress", "JavaScript", "CSS", "HTML"],
    Database: ["MySQL", "PostgreSQL"],
    Otros: ["Liderazgo", "Hardware", "Audio"],
  }

  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "Infoware",
      period: "Octubre 2024 - Actualidad",
      description:
        "Desarrollo de páginas web en PHP y WordPress, aplicaciones a medida con Laravel, Symfony y .NET. Adaptación constante a nuevas tecnologías y metodologías ágiles.",
      skills: ["PHP", "WordPress", "Laravel", "Symfony", ".NET"],
    },
    {
      title: "Desarrollador Full Stack",
      company: "Nayar (Prácticas TFG)",
      period: "3 meses",
      description:
        "Desarrollo de aplicación web en Flutter y Go, aprendizaje de metodologías empresariales y adaptación a nuevas tecnologías.",
      skills: ["Flutter", "Go", "Desarrollo Web"],
    },
    {
      title: "Técnico de Sonido",
      company: "Colegio Consolación / Grupo MT",
      period: "Varios años",
      description:
        "Técnico para la Escuela de Música, audiciones, conciertos y eventos. Trabajo con artistas como Galder Varas, Monaguillo, David Puerto y Miguel Lago.",
      skills: ["Audio", "Eventos", "Hardware"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-emerald-800">Izan Rivera</h1>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Compacto */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">Desarrollador Full Stack</h2>
            <p className="text-lg text-emerald-600 mb-6 max-w-2xl mx-auto">
              Ingeniero Informático especializado en desarrollo web y aplicaciones. Experiencia en frontend, backend y
              liderazgo de equipos.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-emerald-700">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Castellón de la Plana</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-700">
                <Mail className="w-4 h-4" />
                <span className="text-sm">izanriro@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-700">
                <Phone className="w-4 h-4" />
                <span className="text-sm">609936290</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Compacto */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-emerald-800 text-center mb-6">Tecnologías</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(skills).map(([category, techs]) => (
              <Card key={category} className="border-emerald-200 hover:border-emerald-300 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    {category === "Backend" && <Code className="w-5 h-5 text-emerald-600" />}
                    {category === "Frontend" && <Palette className="w-5 h-5 text-emerald-600" />}
                    {category === "Database" && <Database className="w-5 h-5 text-emerald-600" />}
                    {category === "Otros" && <Users className="w-5 h-5 text-emerald-600" />}
                    <h4 className="font-semibold text-emerald-800">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {techs.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Con Popups */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-emerald-800 text-center mb-6">Experiencia</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {experiences.map((exp, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="border-emerald-200 hover:border-emerald-300 hover:shadow-lg transition-all cursor-pointer group">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-emerald-800 group-hover:text-emerald-600 transition-colors">
                          {exp.title}
                        </h4>
                        <ExternalLink className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-sm text-emerald-600 mb-2">{exp.company}</p>
                      <p className="text-xs text-emerald-500">{exp.period}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-emerald-800">{exp.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-emerald-600">{exp.company}</p>
                      <p className="text-xs text-emerald-500">{exp.period}</p>
                    </div>
                    <p className="text-sm text-gray-700">{exp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Volunteer - Compacto */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-emerald-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-emerald-800 mb-3">Educación</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">Grado en Ingeniería Informática</p>
                    <p className="text-xs text-emerald-600">Universidad Jaume I</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Monitor y Director tiempo libre</p>
                    <p className="text-xs text-emerald-600">Curso MAT y DAT</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-emerald-800 mb-3">Voluntariado</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">Monitor de actividades</p>
                    <p className="text-xs text-emerald-600">Movimiento Consolación para el Mundo</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Técnico de sonido</p>
                    <p className="text-xs text-emerald-600">Eventos y festivales</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-emerald-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm">© 2024 Izan Rivera Romero - Desarrollador Full Stack</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}
