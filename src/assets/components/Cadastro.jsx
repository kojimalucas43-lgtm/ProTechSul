import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { salvarUsuario } from '../../auth.js'
import CampoSenha from './CampoSenha.jsx'

export default function Cadastro() {
  const navigate = useNavigate()
  const [f, setF] = useState({ nome: '', empresa: '', email: '', telefone: '', senha: '' })
  const mudar = (c) => (e) => setF({ ...f, [c]: e.target.value })

  function enviar(e) {
    e.preventDefault()
    salvarUsuario(f)
    navigate('/login')
  }

  return (
    <section className="pagina">
      <h1 className="titulo">Cadastro</h1>
      <form className="form" onSubmit={enviar} style={{ maxWidth: 352 }}>
        <label>Nome/sobrenome completo:</label>
        <input value={f.nome} onChange={mudar('nome')} placeholder="Digite seu nome/sobrenome completo" required />
        <label>Empresa:</label>
        <input value={f.empresa} onChange={mudar('empresa')} placeholder="Digite o nome da empresa" required />
        <label>E-mail:</label>
        <input type="email" value={f.email} onChange={mudar('email')} placeholder="Digite o endereço de e-mail" required />
        <label>Telefone:</label>
        <input value={f.telefone} onChange={mudar('telefone')} placeholder="Digite seu telefone com DDD" required />
        <label>Senha:</label>
        <CampoSenha value={f.senha} onChange={mudar('senha')} placeholder="Digite sua senha" required />
        <button type="submit" className="btn-amarelo">FINALIZAR CADASTRO</button>
      </form>
    </section>
  )
}
