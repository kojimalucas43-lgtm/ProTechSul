import { createContext, useContext, useEffect, useState } from 'react'
import dados from './data.json'

const KEY = 'protecsul:carrinho'
const ler = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] }
}

const CarrinhoContext = createContext(null)

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState(ler) // [{ id, quantidade }]

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(itens))
  }, [itens])

  const adicionar = (id, qtd = 1) =>
    setItens((lista) =>
      lista.some((i) => i.id === id)
        ? lista.map((i) => (i.id === id ? { ...i, quantidade: i.quantidade + qtd } : i))
        : [...lista, { id, quantidade: qtd }]
    )

  const remover = (id) => setItens((lista) => lista.filter((i) => i.id !== id))

  const alterarQuantidade = (id, quantidade) =>
    setItens((lista) =>
      lista.map((i) => (i.id === id ? { ...i, quantidade: Math.max(1, quantidade) } : i))
    )

  const limpar = () => setItens([])

  // junta os dados do produto (data.json) com a quantidade escolhida
  const produtos = itens
    .map((i) => ({ ...dados.find((p) => p.id === i.id), quantidade: i.quantidade }))
    .filter((p) => p.id)

  const total = produtos.reduce((soma, p) => soma + p.preco * p.quantidade, 0)
  const quantidadeTotal = produtos.reduce((soma, p) => soma + p.quantidade, 0)
  const quantidadeDe = (id) => itens.find((i) => i.id === id)?.quantidade || 0

  return (
    <CarrinhoContext.Provider
      value={{ produtos, total, quantidadeTotal, quantidadeDe, adicionar, remover, alterarQuantidade, limpar }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}

export const useCarrinho = () => useContext(CarrinhoContext)
