function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8" id="work">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center gap-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold mb-2">Contacto</h3>
          <ul className="text-sm space-y-1">
            <li>Email: <a href="mailto:maximilianocaceres1601@gmail.com" className="underline hover:text-pink-400">maximilianocaceres1601@gmail.com</a></li>
            <li>Teléfono: <a href="tel:+542616182372" className="underline hover:text-pink-400">+54 261-6182372</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Redes</h3>
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="https://www.linkedin.com/in/maximiliano-caceres-dev/" className="hover:text-pink-400 flex items-center gap-2">
                <img src="/LI-logo.jpg" className="w-6 h-6" alt="LinkedIn" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/sayan990" className="hover:text-pink-400 flex items-center gap-2">
                <img src="/GH-logo.png" className="w-10 h-6" alt="GitHub" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
