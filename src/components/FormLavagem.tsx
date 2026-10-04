import { useContext, useState } from 'react'
import type { FormEvent } from 'react'
import { LavagemContext } from '../context/LavagemContext'

function FormLavagem() {
  const { adicionarLavagem } = useContext(LavagemContext)
  const [nome, setNome] = useState('')
  const [modelo, setModelo] = useState('')
  const [placa, setPlaca] = useState('')
  const [lavagem, setLavagem] = useState('')
  const [mensagem, setMensagem] = useState('')

  function agendar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!nome.trim() || !modelo.trim() || !placa.trim() || !lavagem) {
      setMensagem('Preencha todos os campos para entrar na fila.')
      return
    }
    adicionarLavagem({ id: Date.now(), nome: nome.trim(), modelo: modelo.trim(), placa: placa.trim().toUpperCase(), lavagem })
    setNome('')
    setModelo('')
    setPlaca('')
    setLavagem('')
    setMensagem('Agendamento criado! Seu carro já está na fila.')
  }

  return (
    <form onSubmit={agendar} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold">Vamos cuidar do seu carro?</h2>
      <p className="mb-7 mt-2 text-sm text-zinc-400">Preencha os dados para criar seu tíquete.</p>
      <div className="space-y-5">
        <div>
          <label htmlFor="nome" className="mb-2 block text-sm">Nome do cliente</label>
          <input id="nome" required maxLength={80} value={nome} onChange={event => setNome(event.target.value)} placeholder="Seu nome completo" className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-blue-400 placeholder:text-zinc-500" />
        </div>
        <div>
          <label htmlFor="modelo" className="mb-2 block text-sm">Modelo do carro</label>
          <input id="modelo" required maxLength={60} value={modelo} onChange={event => setModelo(event.target.value)} placeholder="Ex.: Volkswagen Polo" className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-blue-400 placeholder:text-zinc-500" />
        </div>
        <div>
          <label htmlFor="placa" className="mb-2 block text-sm">Placa</label>
          <input id="placa" required maxLength={8} value={placa} onChange={event => setPlaca(event.target.value)} placeholder="Ex.: ABC1D23" className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 uppercase outline-blue-400 placeholder:normal-case placeholder:text-zinc-500" />
        </div>
        <div>
          <label htmlFor="lavagem" className="mb-2 block text-sm">Tipo de lavagem</label>
          <select id="lavagem" required value={lavagem} onChange={event => setLavagem(event.target.value)} className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-blue-400">
            <option value="">Selecione uma opção</option>
            <option value="Lavagem simples">Lavagem simples</option>
            <option value="Lavagem completa">Lavagem completa</option>
            <option value="Lavagem com cera">Lavagem com cera</option>
          </select>
        </div>
        <button type="submit" className="w-full cursor-pointer rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700">Criar agendamento →</button>
        <p role="status" className="text-sm text-blue-300">{mensagem}</p>
      </div>
    </form>
  )
}

export default FormLavagem