import { useContext } from 'react'
import { FiTruck } from 'react-icons/fi'
import FormLavagem from '../components/FormLavagem'
import Tiquete from '../components/Tiquete'
import { LavagemContext } from '../context/LavagemContext'

function Agendamentos() {
  const { lavagens } = useContext(LavagemContext)

  return (
    <div className="mx-auto max-w-7xl px-5 py-14">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">Um cuidado de cada vez</p>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Agendamentos</h1>
      <p className="mb-10 mt-4 max-w-xl text-zinc-400">Seu próximo banho começa aqui. Cadastre o carro e acompanhe os tíquetes da fila.</p>
      <div className="grid items-start gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2"><FormLavagem /></div>
        <section className="lg:col-span-3" aria-labelledby="titulo-fila">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h2 id="titulo-fila" className="text-2xl font-semibold">Na fila</h2>
            <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">{lavagens.length} {lavagens.length === 1 ? 'carro' : 'carros'}</span>
          </div>
          {lavagens.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-zinc-700 px-6 py-16 text-center">
              <FiTruck className="mx-auto mb-4 text-4xl text-blue-400" aria-hidden="true" />
              <h3 className="text-lg font-medium">A fila está livre por aqui.</h3>
              <p className="mt-2 text-sm text-zinc-400">Crie um agendamento para aparecer o primeiro tíquete.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">{lavagens.map(lavagem => <Tiquete key={lavagem.id} lavagem={lavagem} />)}</div>
          )}
          <p className="mt-5 text-xs leading-5 text-zinc-500">Ao terminar a lavagem, exclua o tíquete. Os agendamentos ficam disponíveis enquanto esta página estiver aberta, mesmo navegando pelo menu. Recarregar limpa a fila.</p>
        </section>
      </div>
    </div>
  )
}

export default Agendamentos
