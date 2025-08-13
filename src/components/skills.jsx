// Edición: Marcar textos con data-i18n (multi-idioma)
import {Card, CardHeader, CardTitle, CardContent} from './ui/card';
import { Palette, Globe, Code } from "lucide-react"

function Skills() {

  const skills = [
    { name: "HTML5", level: 85, icon: Globe },
    { name: "JavaScript", level: 80, icon: Code },
    { name: "React", level: 75, icon: Code },
    { name: "Tailwind CSS", level: 90, icon: Palette },
  ]

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
      tech: ["React", "JavaScript", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
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
      <>
       <section id="habilidades" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-i18n="skills.titulo">Habilidades Técnicas</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-slate-600"><span>{skill.level}</span><span data-i18n="skills.level_suffix">% de dominio</span></p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      </>
    )
  }
  
  export default Skills