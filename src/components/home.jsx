import NavBar from "./navBar"
import Present from "./present"
import Footer from "./footer"
import Skills from "./skills"
import { Button } from "./ui/button"
import { Code} from "lucide-react"
import Contact from "./contact"
import Experience from "./experience"

function Home() {

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <NavBar />
      <main className="flex-grow flex items-center justify-center py-12 px-6">
    {/* Hero Section */}
    <section id="inicio" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Code className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Hola, soy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Maxi Desarrollador
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Desarrollador Frontend Junior especializado en crear experiencias web modernas y responsivas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Ver mis proyectos
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Present />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
       
  </div>
    </>
  )
}

export default Home
