import { Link } from 'react-router-dom'

export const Favoritos = () => {
    return(
        <section id="favoritos">
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
