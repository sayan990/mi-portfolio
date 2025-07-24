
function NavBar() {
  return (
    <>
      <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
          {/* Navigation */}
          <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800">{"<Dev />"}</div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-slate-600 hover:text-slate-900 transition-colors">
                Inicio
              </a>
              <a href="#sobre-mi" className="text-slate-600 hover:text-slate-900 transition-colors">
                Sobre mí
              </a>
              <a href="#habilidades" className="text-slate-600 hover:text-slate-900 transition-colors">
                Habilidades
              </a>
              <a href="#proyectos" className="text-slate-600 hover:text-slate-900 transition-colors">
                Proyectos
              </a>
              <a href="#contacto" className="text-slate-600 hover:text-slate-900 transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
  </header>
    </>
  )
}

export default NavBar
