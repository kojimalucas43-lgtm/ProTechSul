import { Link } from 'react-router-dom'

export const Suporte = () => {

    return(
        <section id="suporte">
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
                <input type="text" placeholder="Digite seu e-mail"/>
            </div>

            <div>
                <p>Mensagem:</p>
                <input type="text" placeholder="Digite sua mensagem"/>
            </div>

             <button type="button">ENVIAR MENSAGEM</button>



        </section>


        
    )
}
