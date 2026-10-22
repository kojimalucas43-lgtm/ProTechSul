import { useState } from 'react'
import dados from '../../data.json'
import useFavoritos from '../../useFavoritos.js'
import ProdutoCard from './ProdutoCard.jsx'
import styles from './catalogo.module.css'

export default function Catalogo() {
  const [busca, setBusca] = useState('')
  const { ehFavorito, alternar } = useFavoritos()

  const produtos = dados
  .filter((p) => p.nome.toLowerCase().includes(busca.toLowerCase()))

  return (
    <section className="pagina">
      <h1 className="titulo">Catálogo</h1>

      <label className={styles.busca}>
        <img src="../public/lupa.png" alt="lupa" width="15px" height="auto"/>
        <input
          type="text"
          placeholder="Pesquisar"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </label>

      {produtos.length === 0 ? (
        <p className={styles.vazio}>Nenhum produto encontrado.</p>
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
