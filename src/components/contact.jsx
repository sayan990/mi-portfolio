import { Button } from "./ui/button"
import { Mail, Linkedin } from "lucide-react"

function Contact() {
    return (
<section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">¿Trabajamos juntos?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 mb-8">
            Estoy disponible para nuevas oportunidades y proyectos interesantes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Mail className="w-5 h-5 mr-2" />
              Enviar mensaje
            </Button>
            <Button size="lg" variant="outline">
              <Linkedin className="w-5 h-5 mr-2" />
              Conectar en LinkedIn
            </Button>
          </div>
        </div>
      </section>
    )
  }
  
  export default Contact
  