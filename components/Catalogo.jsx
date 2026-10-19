import { Link } from 'react-router-dom'
import data from '../../data.json'
import s from './catalogo.module.css'

export const Catalogo = () => {
  return (
    <section id="catalogo">
      <header>
        <nav>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/orcamento">Orçamento</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/detalhes">Detalhes</Link>  

        </nav>
      </header>

      <h1>Catálogo</h1>
      <input type="text" placeholder="Pesquisar" />

      {data.map((item, index) => (
        <div key={index} className={s.card}>
          <img src={item.imagem} alt={item.texto} />
          <h2>{item.texto}</h2>
          <h3>{item.valor}</h3>
        </div>
      ))}
    </section>
  )
}