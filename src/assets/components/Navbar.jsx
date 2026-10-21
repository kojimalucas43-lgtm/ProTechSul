import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useCarrinho } from '../../CarrinhoContext.jsx'

export default function Navbar() {
  const [semLogo, setSemLogo] = useState(false)
  const { quantidadeTotal } = useCarrinho()
  const classe = ({ isActive }) => (isActive ? 'ativo' : '')

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        {semLogo ? (
          <span className="logo-texto">ProtecSul EPIs</span>
        ) : (
          <img src="/logo.png" alt="ProtecSul EPIs" onError={() => setSemLogo(true)} />
        )}
      </Link>
      <nav>
        <ul>
          <li><NavLink to="/catalogo" className={classe}>Catálogo</NavLink></li>
          <li><NavLink to="/sobre" className={classe}>Sobre nós</NavLink></li>
          <li>
            <NavLink to="/orcamento" className={classe}>
              Orçamento
              {quantidadeTotal > 0 && <span className="badge">{quantidadeTotal}</span>}
            </NavLink>
          </li>
          <li><NavLink to="/favoritos" className={classe}>Favoritos</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
