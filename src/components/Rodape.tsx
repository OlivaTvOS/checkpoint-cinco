import { Link } from 'react-router'

function Rodape() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-sm text-zinc-400 sm:flex-row">
        <div><p className="mb-1 font-bold text-white">Lava Lento</p><p>Sem pressa. Com cuidado.</p></div>
        <p>Projeto acadêmico • Front-end • 2026</p>
        <Link to="/sobre" className="text-zinc-200 hover:text-blue-400">Conheça o grupo →</Link>
      </div>
    </footer>
  )
}

export default Rodape
