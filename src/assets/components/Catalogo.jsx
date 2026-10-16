import { Link } from 'react-router-dom'

export const Catalogo = () => {
    return(
        <section id="catalogo">
            <header>
                <nav>
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/sobre">Sobre nós</Link>
                <Link to="/orcamento">Orçamento</Link>
                <Link to="/favoritos">Favoritos</Link>
                </nav>
            </header>

            <div>
                <h1>Catálogo</h1>
            </div>

            <div>
                <input type="text" placeholder="Pesquisar"/>
            </div>
            
            <div>
                <img>{data.imagem}</img>
                <h2>{data.texto}</h2>
                <h3>{data.valor}</h3>
            </div>


        </section>
    )
}
