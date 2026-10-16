import { Link } from 'react-router-dom'

export const Detalhes = () => {
    return(
        <section id="detalhes">
            <header>
                <nav>
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/sobre">Sobre nós</Link>
                <Link to="/orcamento">Orçamento</Link>
                <Link to="/favoritos">Favoritos</Link>
                </nav>
            </header>

            <p>DETALHES DO PRODUTO</p>

            {data.map((item, index) => (
                    <div key={index}>
                    <img src={item.image} alt={item.texto} />
                    <h2>{item.texto}</h2>
                    <h3>{item.valor}</h3>
                    </div>
                ))}

        </section>
    )
}
