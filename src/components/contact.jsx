// Edición: Marcar textos con data-i18n (multi-idioma)
import { Button } from "./ui/button"
import { Mail} from "lucide-react"



function Contact() {
    return (
<section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-i18n="contact.titulo">¿Trabajamos juntos?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 mb-8" data-i18n="contact.desc">
            Estoy disponible para nuevas oportunidades y proyectos interesantes
          </p>
          {/* Formulario de contacto */}
          <form
              action={import.meta.env.VITE_FORMSPREE_ENDPOINT}
            method="POST"
            className="max-w-xl mx-auto text-left bg-white p-8 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label className="block text-slate-700 mb-2" htmlFor="name" data-i18n="contact.label.nombre">Nombre</label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-slate-700 mb-2" htmlFor="email" data-i18n="contact.label.email">Email</label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-slate-700 mb-2" htmlFor="message" data-i18n="contact.label.mensaje">Mensaje</label>
              <textarea
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span data-i18n="contact.btn.enviar">Enviar mensaje</span>
            </Button>
          </form>
        </div>
      </section>
    )
  }
  
  export default Contact
  