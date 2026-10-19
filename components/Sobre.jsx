import { Link } from 'react-router-dom'
import s from './sobre.module.css'

export const Sobre = () => {
    return(
        <section  id="sobre">
        <header>
                <nav>
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/sobre">Sobre nós</Link>
                <Link to="/orcamento">Orçamento</Link>
                <Link to="/favoritos">Favoritos</Link>
                </nav>
            </header>
            
            <h2>ProtecSul EPI's — Proteção, Segurança e Confiança</h2>
            <div className={s.card}>
                <p>A ProtecSul EPI's nasceu com o propósito de oferecer soluções em Equipamentos de Proteção Individual (EPIs), contribuindo para a segurança, o bem-estar e a qualidade de vida dos profissionais nos mais diversos ambientes de trabalho.</p>
                <p>Ao longo de sua trajetória, a empresa vem construindo sua atuação com base em princípios como qualidade, responsabilidade, comprometimento e confiança, buscando entender as necessidades de cada cliente e oferecer produtos adequados às diferentes atividades e níveis de proteção exigidos.</p>
            </div>
            <div className={s.card}>
                <p>Nossa missão vai além da comercialização de equipamentos. A ProtecSul EPI's acredita que a segurança deve fazer parte da rotina de todas as empresas e profissionais. Por isso, trabalhamos para disponibilizar produtos que auxiliem na prevenção de acidentes e na proteção dos trabalhadores, sempre prezando pela qualidade e pela confiabilidade.</p>
                <p>Contamos com um portfólio desenvolvido para atender diferentes segmentos e necessidades, oferecendo soluções em proteção individual para empresas, indústrias, comércios, profissionais autônomos e demais clientes que valorizam a segurança no ambiente de trabalho.</p>
            </div>

            <h2>Nosso compromisso</h2>
            <div className={s.card}>
                <p>Na ProtecSul EPI's, cada cliente é tratado como um parceiro. Nosso compromisso é oferecer atendimento próximo, produtos de qualidade e soluções eficientes, ajudando empresas e profissionais a encontrarem os equipamentos mais adequados para suas atividades.</p>
                <p>Buscamos constantemente aprimorar nossos produtos, serviços e atendimento, acompanhando as necessidades do mercado e mantendo o foco naquilo que realmente importa: proteger pessoas e contribuir para ambientes de trabalho mais seguros.</p>
            </div>

            <h2>Nossa visão</h2>
            <div className={s.card}>
                <p>Ser reconhecida como uma empresa de referência em soluções de proteção individual, destacando-se pela qualidade dos produtos, excelência no atendimento e compromisso com a segurança de seus clientes.</p>
            </div>
            
            <div className={s.card}>
                <h2>Nossos valores</h2>
                <li>Segurança: colocamos a proteção das pessoas em primeiro lugar.</li>
                <li>Qualidade: buscamos oferecer produtos confiáveis e adequados às necessidades de nossos clientes.</li>
                <li>Compromisso: trabalhamos com responsabilidade e dedicação em cada atendimento.</li>
                <li>Confiança: construímos relacionamentos duradouros e transparentes com nossos clientes e parceiros.</li>
                <li>Responsabilidade: acreditamos na importância de contribuir para ambientes de trabalho cada vez mais seguros.</li>
            </div>

            <h2>ProtecSul EPI's. Segurança para quem faz acontecer.</h2>
        </section>
    )
}