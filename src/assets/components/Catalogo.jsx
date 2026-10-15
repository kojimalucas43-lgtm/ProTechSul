export const Catalogo = () => {
    return(
        <section id="catalogo">
            <header>
                <nav>
                    <a href="../Catalogo">Catálogo</a>
                    <a href="../Sobre">Sobre nós</a>
                    <a href="../Orcamento">Orçamento</a>
                    <a href="../Favoritos">Favoritos</a>
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
