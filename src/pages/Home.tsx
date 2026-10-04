import React, { useState } from 'react';
import Cabecalho from '../components/Cabecalho';
import type { Depoimento } from '../types/depoimento';

function Home() {
  // Inicializa o estado com a estrutura vazia, mas tipada como Depoimento
  const [depForm, setDepForm] = useState<Depoimento>({
    nome: '',
    modelo: '',
    placa: '',
    lavagem: ''
  });

  // Define que este estado é uma Lista/Array de Depoimentos
  const [listaDep, setListaDep] = useState<Depoimento[]>([]);

  // Função para atualizar os campos do formulário dinamicamente
  const handleChange = (campo: keyof Depoimento, valor: string) => {
    setDepForm((prev) => ({
      ...prev,
      [campo]: valor
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden flex flex-col">
      {/* Cabeçalho e Links */}
      <Cabecalho />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center relative z-10 py-12 gap-8">
        
        {/* Texto principal */}
        <section className="lg:col-span-5 space-y-6 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Seu lava lento preferido.
          </h1>
          <p className="text-lg text-gray-300 max-w-md">
            De que adianta ser rápido se ainda estiver sujo.
          </p>
        </section>
        
        <div className="hidden lg:block lg:col-span-3"></div>

        {/* Forms */}
        <form className="lg:col-span-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Seu nome completo"
              value={depForm.nome}
              onChange={(e) => handleChange('nome', e.target.value)}
              className="w-80 bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white-600 transition"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Modelo"
              value={depForm.modelo}
              onChange={(e) => handleChange('modelo', e.target.value)}
              className="w-80 bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white-600 transition"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Placa"
              value={depForm.placa}
              onChange={(e) => handleChange('placa', e.target.value)}
              className="w-80 bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white-600 transition"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Tipo de Lavagem"
              value={depForm.lavagem}
              onChange={(e) => handleChange('lavagem', e.target.value)}
              className="w-80 bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white-600 transition"
            />
          </div>
        </form>
      </main>
    </div>
  );
}

export default Home;
