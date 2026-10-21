import { Link } from 'react-router-dom'
import styles from './catalogo.module.css'
import { moeda } from '../../auth.js'

export default function ProdutoCard({ produto, favorito, onFavoritar }) {
  return (
    <div className={styles.item}>
      <img src={produto.imagem} alt={produto.nome} className={styles.foto} />
      <div className={styles.card}>
        <button
          className={`${styles.estrela} ${favorito ? styles.ativa : ''}`}
          onClick={() => onFavoritar(produto.id)}
          aria-label={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          ★
        </button>
        <p className={styles.nome}>{produto.nome}</p>
        <p className={styles.preco}>{moeda(produto.preco)}</p>
        <Link to={`/produto/${produto.id}`} className="btn-amarelo">Detalhes</Link>
      </div>
    </div>
  )
}
