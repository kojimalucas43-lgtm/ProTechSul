import { Link } from 'react-router-dom'

export const Cadastro = () => {
    return(
        <section id="cadastro">
            <header>
                <nav>
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/sobre">Sobre nós</Link>
                <Link to="/orcamento">Orçamento</Link>
                <Link to="/favoritos">Favoritos</Link>
                </nav>
            </header>

            <div>
                <p>Nome/sobrenome completo:</p>
                <input type="text" placeholder="Digite seu nome/sobrenome completo"/>
            </div>
            
            <div>
                <p>Empresa:</p>
                <input type="text" placeholder="Digite o nome da empresa"/>
            </div>

            <div>
                <p>CPF:</p>
                <input type="text" placeholder="Digite seu CPF"/>
            </div>

            <div>
                <p>CNPJ:</p>
                <input type="text" placeholder="Digite seu CNPJ"/>
            </div>

            <div>
                <p>E-mail:</p>
                <input type="text" placeholder="Digite o endereço de e-mail"/>
            </div>

            <div>
                <p>Senha:</p>
                <input type="text" placeholder="Digite sua senha"/>
            </div>

            <div>
                <p>Telefone:</p>
                <input type="text" placeholder="Digite ser telefone com DDD"/>
            </div>

            <div>
                <button type="button" />
            </div>

        </section>
    )
}
