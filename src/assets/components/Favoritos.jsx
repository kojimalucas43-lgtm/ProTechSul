import { Link } from 'react-router-dom'
import dados from '../../data.json'
import useFavoritos from '../../useFavoritos.js'
import ProdutoCard from './ProdutoCard.jsx'
import styles from './catalogo.module.css'

export default function Favoritos() {
  const { favoritos, ehFavorito, alternar } = useFavoritos()
  const produtos = dados.filter((p) => favoritos.includes(p.id))

  return (
    <section className="pagina">
      <h1 className="titulo">Favoritos</h1>
      {produtos.length === 0 ? (
        <p className={styles.vazio}>
          Você ainda não favoritou nenhum produto. <Link to="/catalogo" style={{ textDecoration: 'underline' }}>Ver catálogo</Link>
        </p>
      ) : (
        <div className={styles.grade}>
          {produtos.map((p) => (
            <ProdutoCard key={p.id} produto={p} favorito={ehFavorito(p.id)} onFavoritar={alternar} />
          ))}
        </div>
      )}
    </section>
  )
}
