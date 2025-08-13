// Edición: Marcar textos con data-i18n (multi-idioma)
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

function Experience() {
    const [currentProject, setCurrentProject] = useState(0)

    const projects = [
        {
          title: "Cafe Glaciar",
          description: "Página demo sobre una cafeteria.",
          tech: ["HTML", "JavaScript", "Tailwind CSS"],
          image: "/cafeGlaciar.png",
          github: "https://github.com/sayan990/glaciarCafeDemo",
          demo: "https://glaciar-cafe-demo.vercel.app/",
        },
        {
          title: "Todo App React",
          description: "Aplicación de tareas con funcionalidades CRUD y almacenamiento local.",
          tech: ["React", "Typescript", "Tailwind CSS", "JavaScript"],
          image: "/todoApp.png",
          github: "https://github.com/sayan990/TodoApp.git",
          demo: "https://todo-app-xi-lemon-19.vercel.app/",
        },
        {
          title: "Portfolio Personal",
          description: "Sitio web personal responsive con diseño moderno.",
          tech: ["React", "Tailwind CSS", "JavaScript"],
          image: "/portfolio.png",
          github: "https://github.com/sayan990/mi-portfolio",
          demo: "https://maxi-portfolio-nu.vercel.app/",
        },
        {
          title: "Snaker Store",
          description: "Página demo de una tienda de productos.",
          tech: ["HTML", "JavaScript", "Tailwind CSS", "TypeScript"],
          image: "/snakerStore.png",
          github: "https://github.com/sayan990/snakerStore",
          demo: "https://zapasecommer.vercel.app",
        }
      ]

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length)
    }

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    }

    const goToProject = (index) => {
        setCurrentProject(index)
    }

    return (
        <section id="proyectos" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-i18n="projects.titulo">Mis Proyectos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          {/* Carrusel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Navegación por flechas */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-slate-800" />
            </button>
            
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-slate-800" />
            </button>

            {/* Proyecto actual */}
            <div className="relative">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={projects[currentProject].image || "/placeholder.svg"}
                    alt={projects[currentProject].title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <div className="flex space-x-2">
                      <a href={projects[currentProject].github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary">
                        <Github className="w-4 h-4 mr-1" />
                        <span data-i18n="projects.btn.codigo">Código</span>
                      </Button>
                      </a>
                      <a href={projects[currentProject].demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <span data-i18n="projects.btn.demo">Demo</span>
                      </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{projects[currentProject].title}</CardTitle>
                  <CardDescription>{projects[currentProject].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Indicadores de puntos */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Contador de proyectos */}
            <div className="text-center mt-4 text-sm text-gray-600">
              {currentProject + 1} de {projects.length}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Experience
  