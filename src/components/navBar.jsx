
function NavBar() {
  return (
    <>
      <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
    <div className="text-lg font-semibold">Home</div>
    <nav>
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:underline">About Me</a></li>
        <li><a href="#" className="hover:underline">Contact Me</a></li>
      </ul>
    </nav>
  </header>
    </>
  )
}

export default NavBar
