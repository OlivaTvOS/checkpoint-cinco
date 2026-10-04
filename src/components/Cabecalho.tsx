function Cabecalho() {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-4 z-50">
      <div className="bg-white rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-2">
          <a href="/">
            <span className="text-blue-600 font-extrabold text-2xl tracking-tight">
              Lava Lento
            </span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium text-sm">
          <a href="/agendamentos" className="hover:text-blue-400 flex items-center gap-1">
            Agendamentos
          </a>
          <a href="/sobre" className="hover:text-blue-400 flex items-center gap-1">
            Sobre
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;
