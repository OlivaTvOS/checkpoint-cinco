import { useContext } from 'react'
import { FiTrash2, FiTruck } from 'react-icons/fi'
import { LavagemContext } from '../context/LavagemContext'
import type { Lavagem } from '../types/types'

function Tiquete({ lavagem }: { lavagem: Lavagem }) {
  const { excluirLavagem } = useContext(LavagemContext)

  return (
    <article className="rounded-xl border border-zinc-700 bg-zinc-900 p-5">
      <div className="mb-4 flex items-center justify-between gap-3 border-b border-dashed border-zinc-700 pb-4">
        <FiTruck className="text-2xl text-blue-400" aria-hidden="true" />
        <span className="text-xs font-medium uppercase tracking-wide text-blue-300">Aguardando lavagem</span>
      </div>
      <h3 className="break-words text-xl font-semibold">{lavagem.modelo}</h3>
      <p className="mt-2 inline-block rounded bg-zinc-800 px-3 py-1 font-mono text-sm tracking-wider">{lavagem.placa}</p>
      <dl className="my-5 space-y-3 text-sm">
        <div><dt className="text-zinc-400">Cliente</dt><dd className="break-words">{lavagem.nome}</dd></div>
        <div><dt className="text-zinc-400">Serviço</dt><dd>{lavagem.lavagem}</dd></div>
      </dl>
      <button type="button" onClick={() => excluirLavagem(lavagem.id)} aria-label={`Excluir tíquete de ${lavagem.nome}, placa ${lavagem.placa}`} className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-600 px-3 py-2 text-sm text-zinc-300 hover:border-red-400 hover:text-red-300">
        <FiTrash2 aria-hidden="true" /> Excluir tíquete
      </button>
    </article>
  )
}

export default Tiquete
