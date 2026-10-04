import { Link } from 'react-router'
import { FiDroplet, FiCheckCircle, FiSun } from 'react-icons/fi'
import Depoimentos from '../components/Depoimentos'

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:py-20 lg:grid-cols-2">
        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-blue-400">Seu carro merece esse cuidado</p>
          <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">Seu lava lento <span className="text-blue-400">preferido.</span></h1>
          <p className="mt-6 max-w-md text-xl leading-relaxed text-zinc-300">De que adianta ser rápido se ainda estiver sujo?</p>
          <p className="mt-4 max-w-md leading-relaxed text-zinc-400">Aqui a gente cuida de cada detalhe, da primeira espuma ao último pano. Você escolhe a lavagem e nós cuidamos do resto.</p>
          <Link to="/agendamentos" className="mt-8 inline-block rounded-lg bg-blue-600 px-7 py-4 font-semibold hover:bg-blue-700">Agendar minha lavagem →</Link>
          <p className="mt-5 flex items-center gap-2 text-sm text-zinc-400"><FiCheckCircle className="text-blue-400" aria-hidden="true" /> Simples de agendar. Caprichado de verdade.</p>
        </div>
        <figure className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
          <img src="/imagens/lavagem.jpg" alt="Lavagem de um carro branco com jato de água" className="h-80 w-full object-cover md:h-96" />
          <figcaption className="flex items-center justify-between gap-4 px-6 py-5"><span className="text-lg font-medium">Sem pressa. Com cuidado.</span><FiDroplet className="shrink-0 text-3xl text-blue-400" aria-hidden="true" /></figcaption>
        </figure>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16" aria-labelledby="servicos">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3"><h2 id="servicos" className="text-2xl font-semibold">Um banho para cada necessidade.</h2><span className="text-sm text-zinc-400">Você escolhe o cuidado.</span></div>
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-zinc-800 p-6"><FiDroplet className="mb-4 text-2xl text-blue-400" aria-hidden="true" /><h3 className="text-xl font-semibold">Simples</h3><p className="mt-3 leading-relaxed text-zinc-400">Lavagem externa para tirar a sujeira do dia a dia e renovar o visual.</p></article>
          <article className="rounded-xl border border-blue-800 bg-blue-950 p-6"><FiCheckCircle className="mb-4 text-2xl text-blue-300" aria-hidden="true" /><h3 className="text-xl font-semibold">Completa</h3><p className="mt-3 leading-relaxed text-blue-100">Limpeza por dentro e por fora, com atenção aos cantinhos que fazem diferença.</p></article>
          <article className="rounded-xl border border-zinc-800 p-6"><FiSun className="mb-4 text-2xl text-blue-400" aria-hidden="true" /><h3 className="text-xl font-semibold">Com cera</h3><p className="mt-3 leading-relaxed text-zinc-400">Lavagem e aplicação de cera para deixar a pintura com aquele brilho a mais.</p></article>
        </div>
      </section>
      <Depoimentos />
    </>
  )
}

export default Home
