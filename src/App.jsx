import { Routes, Route } from 'react-router-dom'
import Navbar from './assets/components/Navbar.jsx'
import Catalogo from './assets/components/Catalogo.jsx'
import Detalhes from './assets/components/Detalhes.jsx'
import Sobre from './assets/components/Sobre.jsx'
import Orcamento from './assets/components/Orcamento.jsx'
import Favoritos from './assets/components/Favoritos.jsx'
import Login from './assets/components/Login.jsx'
import Cadastro from './assets/components/Cadastro.jsx'
import Suporte from './assets/components/Suporte.jsx'
import Concluido from './assets/components/Concluido.jsx'
import './index.css'
import './App.css'

export default function App() {
  return (
    <>
      {/* Navbar fica fora das <Routes>, então permanece fixa em todas as páginas */}
      <Navbar />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/produto/:id" element={<Detalhes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/orcamento" element={<Orcamento />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/concluido" element={<Concluido />} />
          <Route path="*" element={<Catalogo />} />
        </Routes>
      </main>
    </>
  )
}
