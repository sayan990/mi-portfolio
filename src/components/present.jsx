import { Github, Linkedin,} from "lucide-react"
import { Button } from "./ui/button"

function Present() {

  return (
    <>
      {/* About Section */}
      <section id="sobre-mi" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Sobre mí</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="../public/profile.png"
                alt="Foto de perfil"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Desarrollador Frontend apasionado por la tecnología
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Soy un desarrollador junior con sólidos conocimientos en tecnologías frontend modernas. Me especializo
                en crear interfaces de usuario intuitivas y responsivas utilizando HTML5, JavaScript, React y Tailwind
                CSS.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Mi objetivo es seguir creciendo profesionalmente mientras contribuyo a proyectos innovadores que generen
                un impacto positivo. Me encanta aprender nuevas tecnologías y enfrentar desafíos que me permitan mejorar
                mis habilidades.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/sayan990" target="_blank">
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                </a>
                <a href="https://www.linkedin.com/in/maximiliano-caceres-dev/" target="_blank">
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Present
