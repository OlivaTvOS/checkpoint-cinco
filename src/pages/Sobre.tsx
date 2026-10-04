import { FiUser } from 'react-icons/fi'

const integrantes = [
  { nome: 'Artur da Silva de Oliveira', rm: '569870', foto: '' },
]

function Sobre() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">Por trás do projeto</p>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Sobre o projeto</h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-zinc-400">O Lava Lento é um projeto de Front-end Design Engineering do curso de Análise e Desenvolvimento de Sistemas. A proposta é organizar uma fila de lavagens com uma navegação simples e fácil de usar.</p>
      <h2 className="mb-6 mt-12 text-2xl font-semibold">Integrante</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {integrantes.map(integrante => (
          <article key={integrante.nome} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
            {integrante.foto ? <img src={integrante.foto} alt={`Foto de ${integrante.nome}`} className="mb-5 h-32 w-32 rounded-full object-cover" /> : <div className="mb-5 flex h-32 w-32 items-center justify-center rounded-full bg-zinc-800"><FiUser className="text-5xl text-zinc-500" aria-label="Foto do integrante pendente" /></div>}
            <h3 className="text-xl font-semibold">{integrante.nome}</h3>
            <p className="mt-2 text-blue-300">RM: {integrante.rm}</p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm text-zinc-400">A foto do integrante será adicionada antes da entrega.</p>
    </div>
  )
}

export default Sobre
