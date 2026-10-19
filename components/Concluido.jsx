import { Link } from 'react-router-dom'

export const Concluido = () => {
    return(
        <section id="concluido">
            <header>
                <nav>
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/sobre">Sobre nós</Link>
                <Link to="/orcamento">Orçamento</Link>
                <Link to="/favoritos">Favoritos</Link>
                </nav>
            </header>

            <div>
                <h1>Mensagem enviada com sucesso!</h1>
            </div>

            <div>
                <h2>Obrigado pela sugestão, em breve  enviaremos uma resposta</h2>
            </div>
        </section>
    )
}
