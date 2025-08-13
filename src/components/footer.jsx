// Edición: Marcar textos con data-i18n (multi-idioma)
function Footer() {
  return (
<footer className="bg-slate-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400" data-i18n="footer.texto">
            © 2024 Maxi Desarrollador. Diseñado y desarrollado con ❤️ usando React y Tailwind CSS
          </p>
        </div>
      </footer>
  )
}

export default Footer
