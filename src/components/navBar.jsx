
function NavBar() {
  return (
    <>
      <header>
          {/* Navigation */}
          <nav className="fixed top-0 w-full bg-blue-500/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-300 cursor-pointer">{"<Dev />"}</div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-slate-800 hover:text-blue-600 hover:scale-105 transition-all duration-300 font-medium relative group">
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#sobre-mi" className="text-slate-800 hover:text-blue-600 hover:scale-105 transition-all duration-300 font-medium relative group">
                Sobre mí
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#habilidades" className="text-slate-800 hover:text-blue-600 hover:scale-105 transition-all duration-300 font-medium relative group">
                Habilidades
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#proyectos" className="text-slate-800 hover:text-blue-600 hover:scale-105 transition-all duration-300 font-medium relative group">
                Proyectos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contacto" className="text-slate-800 hover:text-blue-600 hover:scale-105 transition-all duration-300 font-medium relative group">
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
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
