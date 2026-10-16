import { Link } from 'react-router-dom'

export const Orcamento = () => {
    return(
        <section id="orcamento">
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
