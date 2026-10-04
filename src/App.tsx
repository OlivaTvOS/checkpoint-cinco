import { Outlet } from 'react-router'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import { LavagemContextProvider } from './context/LavagemContext'

function App() {
  return (
    <LavagemContextProvider>
      <div className="flex min-h-screen flex-col bg-zinc-950 font-sans text-white">
        <Cabecalho />
        <main className="flex-1"><Outlet /></main>
        <Rodape />
      </div>
    </LavagemContextProvider>
  )
}

export default App
