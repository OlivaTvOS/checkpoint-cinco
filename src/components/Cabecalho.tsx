import { useContext } from 'react'
import { Link } from 'react-router'
import { FiDroplet } from 'react-icons/fi'
import { LavagemContext } from '../context/LavagemContext'

function Cabecalho() {
  const { lavagens } = useContext(LavagemContext)

  return (
    <header className="mx-auto w-full max-w-7xl px-5 pt-6">
      <div className="flex flex-wrap items-center justify-between gap-5 rounded-3xl bg-white px-6 py-4 text-zinc-800 md:rounded-full">
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-blue-700">
          <FiDroplet aria-hidden="true" /> Lava Lento
        </Link>
        <nav aria-label="Menu principal" className="flex flex-wrap items-center gap-5 text-sm font-medium">
          <Link to="/" className="hover:text-blue-700">Home</Link>
          <Link to="/agendamentos" className="hover:text-blue-700">Agendamentos</Link>
          <Link to="/sobre" className="hover:text-blue-700">Sobre</Link>
        </nav>
        <p aria-live="polite" className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-800">
          <strong>{lavagens.length}</strong> {lavagens.length === 1 ? 'carro na fila' : 'carros na fila'}
        </p>
      </div>
    </header>
  )
}

export default Cabecalho