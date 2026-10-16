import { Link } from 'react-router-dom'
import data from '../../data.json'

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
        <div key={index}>
          <img src={item.imagem} alt={item.texto} />
          <h2>{item.texto}</h2>
          <h3>{item.valor}</h3>
        </div>
      ))}
    </section>
  )
}