import mascaraSemifacial from '../assets/mascara1.png';
import luvas from '../assets/luva2.png';
// import { tenis } from '../assets/tenis3.png';
// import { protetorAuricular } from '../assets/fone4.png';
// import { protetorSolar } from '../assets/p.solar5.png';
// import { protetorFacial } from '../assets/p.facial.png';

const listaCatalogo =  [
    {
        id:1,
        imagem:{mascaraSemifacial},
        alt: "semifacial",
        texto: "Kit Máscara SemiFacial de Uso Geral com Filtro 7003 + Retentor - ProtecFace | CA 48816 R$297,26"
    },
    {
        id:2,
        imagem:{luvas},
        alt: "luvas",
        texto: "Luvas banhadas com látex natural azul EPI Zeus - Soft Grip - CA 51256 R$9,90"
    },

];

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
        </section>
    )
}
