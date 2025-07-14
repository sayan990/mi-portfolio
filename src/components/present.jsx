function Present() {

  return (
    <>
     <div className="flex items-center p-8 min-h-screen" id="about">
  <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
    <div className="md:w-1/3 p-4 flex justify-center items-center">
      <div className="border-2 border-yellow-100 rounded-lg overflow-hidden">
        <img
          src="https://picsum.photos/300/400"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
    <div className="md:w-2/3 p-6 flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-1">Maximiliano</h1>
      <p className="text-pink-500 text-lg mb-2">
        Freelance web Developer | Javascript | ReactJS | NodeJS
      </p>
      <p className="text-gray-700 mb-4">
        Soy un apasionado autónomo dedicado a crear soluciones innovadoras. Con experiencia en diseño y desarrollo, transformo ideas en realidad. Colaboremos y demos vida a tu visión, creando juntos experiencias impactantes.
      </p>
      <table className="text-gray-700 text-sm w-auto">
        <tbody>
          <tr><td className="font-semibold pr-4">Nacimiento</td><td>2003/01/16</td></tr>
          <tr><td className="font-semibold pr-4">Edad</td><td>22</td></tr>
          <tr><td className="font-semibold pr-4">País</td><td>Argentina</td></tr>
          <tr><td className="font-semibold pr-4">E-mail</td><td>maximilianocaceres1601@gmail.com</td></tr>
          <tr><td className="font-semibold pr-4">Phone</td><td>+54 261-6182372</td></tr>
          <tr><td className="font-semibold pr-4">Freelance</td><td>Yes</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    </>
  )
}

export default Present
