function Header() {
  return (
    <header className="bg-[#8b9374] text-[#f2f2e9] py-4 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-serif font-normal">Café Barrio</div>
          <ul className="flex gap-8 list-none m-0 p-0">
            <li><a href="#inicio" className="text-[#f2f2e9] hover:opacity-80 transition">Inicio</a></li>
            <li><a href="#menu" className="text-[#f2f2e9] hover:opacity-80 transition">Menú</a></li>
            <li><a href="#nosotros" className="text-[#f2f2e9] hover:opacity-80 transition">Nosotros</a></li>
            <li><a href="#contacto" className="text-[#f2f2e9] hover:opacity-80 transition">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header