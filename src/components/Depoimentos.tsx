const depoimentos = [
  { nome: 'Lucas', carro: 'Mustang', foto: '/imagens/carro-preto.jpg', opiniao: 'O carro voltou brilhando. Gostei do cuidado com as rodas e com o acabamento.' },
  { nome: 'Marina', carro: 'Porsche', foto: '/imagens/carro-prata.jpg', opiniao: 'Escolhi a lavagem completa e valeu a pena. Ficou limpo por dentro e por fora.' },
]

function Depoimentos() {
  return (
    <section className="bg-zinc-100 text-zinc-900">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">Quem passa por aqui</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Carro limpo. Cliente feliz.</h2>
        <p className="mt-3 text-zinc-600">O cuidado aparece nos detalhes.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {depoimentos.map(depoimento => (
            <article key={depoimento.nome} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              <img src={depoimento.foto} alt={`${depoimento.carro} com a carroceria limpa`} loading="lazy" className="h-56 w-full object-cover" />
              <div className="p-6">
                <p className="mb-3 tracking-widest text-blue-700" aria-label="5 de 5 estrelas">★★★★★</p>
                <blockquote className="leading-relaxed">“{depoimento.opiniao}”</blockquote>
                <p className="mt-5 font-semibold">{depoimento.nome} <span className="font-normal text-zinc-500">• {depoimento.carro}</span></p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs text-zinc-500">Checkpoint 5.</p>
      </div>
    </section>
  )
}

export default Depoimentos