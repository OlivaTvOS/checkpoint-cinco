import { createContext, createElement, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lavagem } from '../types/types'

type LavagemContextValue = {
  lavagens: Lavagem[];
  adicionarLavagem: (lavagem: Lavagem) => void;
  excluirLavagem: (id: number) => void;
}

export const LavagemContext = createContext<LavagemContextValue>({
  lavagens: [],
  adicionarLavagem: () => {},
  excluirLavagem: () => {},
})

export function LavagemContextProvider({ children }: { children: ReactNode }) {
  const [lavagens, setLavagens] = useState<Lavagem[]>([])

  const adicionarLavagem = (lavagem: Lavagem) => {
    setLavagens([...lavagens, lavagem])
  }

  const excluirLavagem = (id: number) => {
    setLavagens(lavagens.filter(lavagem => lavagem.id !== id))
  }

  return createElement(
    LavagemContext.Provider,
    { value: { lavagens, adicionarLavagem, excluirLavagem } },
    children,
  )
}
