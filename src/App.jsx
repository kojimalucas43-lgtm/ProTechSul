import { Routes, Route } from 'react-router-dom'
import { Catalogo } from './assets/components/Catalogo'
import { Sobre } from './assets/components/Sobre'
import { Orcamento } from './assets/components/Orcamento'
import { Favoritos } from './assets/components/Favoritos'
import { Login } from './assets/components/Login'
import { Cadastro } from './assets/components/Cadastro'
import { Detalhes } from './assets/components/Detalhes'
import { Suporte } from './assets/components/Suporte'
import { Concluido } from './assets/components/Concluido'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/detalhes" element={<Detalhes />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/orcamento" element={<Orcamento />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/suporte" element={<Suporte />} />
      <Route path="/concluido" element={<Concluido />} />
    </Routes>
  )
}

export default App