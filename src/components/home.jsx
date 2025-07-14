import NavBar from "./navBar"
import Present from "./present"
import Footer from "./footer"
import Experience from "./experience"

function Home() {
  // Handler para scroll suave
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow flex items-center justify-center py-12 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 max-w-lg">
        <p className="text-lg mb-2">¡hola!</p>
        <h1 className="text-4xl font-bold mb-2">Maximiliano</h1>
        <h2 className="text-xl mb-6">Desarrollador Web</h2>
        <p className="text-gray-700 mb-8">
          Soy un apasionado autónomo especializado en desarrollo web, diseño UI/UX y SEO. Colaboremos y demos vida a tu visión digital.
        </p>
        <div className="flex space-x-4">
          <button
            className="bg-pink-500 text-white py-2 px-6 rounded shadow hover:bg-pink-600 transition duration-300"
            onClick={() => handleScroll('about')}
          >
            Sobre Mí
          </button>
          <button
            className="bg-gray-200 text-gray-800 py-2 px-6 rounded shadow hover:bg-gray-300 transition duration-300"
            onClick={() => handleScroll('work')}
          >
            Mi Trabajo
          </button>
        </div>
      </div>
      <div className="flex-1 max-w-md">
        <img
          src="/img_home.png"
          alt="Person coding on a laptop"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>
      </main>
      <Present />
      <Experience />
      <Footer />
       
  </div>
    </>
  )
}

export default Home
