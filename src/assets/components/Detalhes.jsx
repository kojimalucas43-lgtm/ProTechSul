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
        </section>
    )
}
