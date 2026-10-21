import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ModalInfos from './ModalInfos.jsx'
import { useCarrinho } from '../../CarrinhoContext.jsx'
import { estaLogado, lerUsuario, moeda } from '../../auth.js'

export default function Orcamento() {
  const navigate = useNavigate()
  const { produtos, total, quantidadeTotal, alterarQuantidade, remover, limpar } = useCarrinho()
  const usuario = lerUsuario()

  const [form, setForm] = useState({
    nome: usuario?.nome || '',
    empresa: usuario?.empresa || '',
    email: usuario?.email || '',
    telefone: usuario?.telefone || '',
    mensagem: '',
  })
  const [erro, setErro] = useState('')
  const [modal, setModal] = useState(false)

  const mudar = (campo) => (e) => setForm({ ...form, [campo]: e.target.value })

  const previsao = new Date()
  previsao.setDate(previsao.getDate() + 7)

  function finalizar(e) {
    e.preventDefault()
    if (produtos.length === 0) {
      setErro('Adicione pelo menos um produto ao carrinho.')
      return
    }
    if (!form.nome || !form.empresa || !form.email || !form.telefone) {
      setErro('Preencha nome, empresa, e-mail e telefone.')
      return
    }
    setErro('')
    if (!estaLogado()) {
      setModal(true)
      return
    }
    limpar()
    navigate('/concluido', {
      state: {
        titulo: 'Orçamento enviado com sucesso!',
        texto: 'Obrigado pelo interesse, em breve enviaremos o seu orçamento.',
      },
    })
  }

  return (
    <section className="pagina">
      <h1 className="titulo">Orçamento</h1>

      <form onSubmit={finalizar}>
        <div className="orcamento">
          <div className="form">
            <label>Nome/sobrenome completo:</label>
            <input value={form.nome} onChange={mudar('nome')} placeholder="Digite seu nome/sobrenome completo" />
            <label>Empresa:</label>
            <input value={form.empresa} onChange={mudar('empresa')} placeholder="Digite o nome da empresa" />
            <label>E-mail:</label>
            <input type="email" value={form.email} onChange={mudar('email')} placeholder="Digite o endereço de e-mail" />
            <label>Telefone:</label>
            <input value={form.telefone} onChange={mudar('telefone')} placeholder="Digite seu telefone com DDD" />
            <label>Mensagem:</label>
            <input value={form.mensagem} onChange={mudar('mensagem')} placeholder="Digite uma mensagem que desejar" />
          </div>

          <aside className="carrinho">
            <h3>Produtos selecionados</h3>

            {produtos.length === 0 ? (
              <div className="carrinho-vazio">
                <div className="cubo">?</div>
                <p>Nenhum produto selecionado.</p>
                <Link to="/catalogo" className="btn-amarelo">Ver catálogo</Link>
              </div>
            ) : (
              <>
                <div className="carrinho-lista">
                  {produtos.map((p) => (
                    <div className="carrinho-item" key={p.id}>
                      <img src={p.imagem} alt={p.nome} />
                      <div className="info">
                        <p className="nome-item">{p.nome}</p>
                        <p>{moeda(p.preco)} un.</p>
                        <p className="sub"><strong>{moeda(p.preco * p.quantidade)}</strong></p>
                      </div>
                      <div className="qtd">
                        <button type="button" onClick={() => alterarQuantidade(p.id, p.quantidade - 1)} aria-label="Diminuir">−</button>
                        <span>{p.quantidade}</span>
                        <button type="button" onClick={() => alterarQuantidade(p.id, p.quantidade + 1)} aria-label="Aumentar">+</button>
                      </div>
                      <button type="button" className="remover" onClick={() => remover(p.id)} aria-label="Remover produto" title="Remover">✕</button>
                    </div>
                  ))}
                </div>

                <div className="carrinho-resumo">
                  <p><strong>Quantidade:</strong> {quantidadeTotal} item(ns)</p>
                  <p className="total"><strong>Valor total:</strong> {moeda(total)}</p>
                  <p><strong>Previsão de entrega:</strong> {previsao.toLocaleDateString('pt-BR')}</p>
                  <button type="button" className="limpar" onClick={limpar}>Esvaziar carrinho</button>
                </div>
              </>
            )}
          </aside>
        </div>

        {erro && <p className="erro">{erro}</p>}

        <div className="acoes-orcamento" style={{ marginTop: 24 }}>
          <button type="submit" className="btn-amarelo btn-grande">Finalizar</button>
          <Link to="/suporte" className="btn-amarelo pequeno">Suporte</Link>
        </div>
      </form>

      <ModalInfos
        aberto={modal}
        titulo="Faça login para continuar"
        texto="Para finalizar o orçamento você precisa estar logado."
        onFechar={() => setModal(false)}
        rotuloAcao="Ir para login"
        onAcao={() => navigate('/login', { state: { voltar: '/orcamento' } })}
      />
    </section>
  )
}
