import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Github, ExternalLink } from "lucide-react"

function Experience() {

    const projects = [
        {
          title: "E-commerce Landing Page",
          description: "Página de aterrizaje responsive para tienda online con carrito de compras básico.",
          tech: ["HTML", "JavaScript", "Tailwind CSS"],
          image: "/placeholder.svg?height=200&width=300",
          github: "#",
          demo: "#",
        },
        {
          title: "Todo App React",
          description: "Aplicación de tareas con funcionalidades CRUD y almacenamiento local.",
          tech: ["React", "Typescript", "Tailwind CSS"],
          image: "/todoApp.png",
          github: "https://github.com/sayan990/TodoApp.git",
          demo: "https://todo-app-xi-lemon-19.vercel.app/",
        },
        {
          title: "Portfolio Personal",
          description: "Sitio web personal responsive con diseño moderno y animaciones.",
          tech: ["React", "Tailwind CSS", "JavaScript"],
          image: "/placeholder.svg?height=200&width=300",
          github: "#",
          demo: "#",
        },
      ]
    return (
        <section id="proyectos" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Mis Proyectos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <div className="flex space-x-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary">
                        <Github className="w-4 h-4 mr-1" />
                        Código
                      </Button>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
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
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Experience
  