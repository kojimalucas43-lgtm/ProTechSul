import { Link, useNavigate, useParams } from 'react-router-dom'
import dados from '../../data.json'
import useFavoritos from '../../useFavoritos.js'
import { useCarrinho } from '../../CarrinhoContext.jsx'
import ProdutoCard from './ProdutoCard.jsx'
import { moeda } from '../../auth.js'

export default function Detalhes() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { ehFavorito, alternar } = useFavoritos()
  const { adicionar, quantidadeDe } = useCarrinho()
  const produto = dados.find((p) => String(p.id) === id)

  if (!produto) {
    return (
      <section className="pagina">
        <h1 className="titulo">Produto não encontrado</h1>
        <p style={{ textAlign: 'center' }}><Link to="/catalogo" className="btn-amarelo">Voltar ao catálogo</Link></p>
      </section>
    )
  }

  const noCarrinho = quantidadeDe(produto.id)
  const relacionados = dados.filter((p) => p.relacionado && p.id !== produto.id)

  function comprarAgora() {
    if (noCarrinho === 0) adicionar(produto.id)
    navigate('/orcamento')
  }

  return (
    <section className="pagina detalhes">
      <h1 className="titulo">Detalhes do produto</h1>

      <div className="detalhes-topo">
        <div className="detalhes-foto">
          <img src={produto.imagem} alt={produto.nome} />
        </div>
        <div className="detalhes-info">
          <p><strong>Conteúdo:</strong> {produto.conteudo}</p>
          <p><strong>Preço:</strong> {moeda(produto.preco)}.</p>
          <button className="btn-amarelo" onClick={comprarAgora}>Comprar agora</button>
          <button className="btn-amarelo btn-contorno" onClick={() => adicionar(produto.id)}>
            Adicionar ao carrinho
          </button>
          {noCarrinho > 0 && (
            <p className="aviso-carrinho">
              ✓ {noCarrinho} unidade(s) no carrinho — <Link to="/orcamento" style={{ textDecoration: 'underline' }}>ver orçamento</Link>
            </p>
          )}
        </div>
      </div>

      <div className="detalhes-desc">
        <p>{produto.descricao}</p>
        <br />
        <p><strong>Características:</strong></p>
        <ul>
          {produto.caracteristicas.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>

      <div className="relacionados">
        {relacionados.map((p) => (
          <div key={p.id} style={{ width: 150 }}>
            <ProdutoCard produto={p} favorito={ehFavorito(p.id)} onFavoritar={alternar} />
          </div>
        ))}
      </div>
    </section>
  )
}
