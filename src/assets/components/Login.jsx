import { Link } from 'react-router-dom'

export const Login = () => {
    return(
        <section id="login">
            <header>
                <nav>
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/sobre">Sobre nós</Link>
                <Link to="/orcamento">Orçamento</Link>
                <Link to="/favoritos">Favoritos</Link>
                </nav>
            </header>

            <div>
                <p>E-mail:</p>
                <input type="text" placeholder="Digite o endereço de e-mail"/>
            </div>

            <div>
                <p>Senha:</p>
                <input type="text" placeholder="Digite sua senha"/>
            </div>

            
        </section>
    )
}
