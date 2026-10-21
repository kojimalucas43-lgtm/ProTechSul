import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { entrar, lerUsuario } from '../../auth.js'
import CampoSenha from './CampoSenha.jsx'

export default function Login() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  function enviar(e) {
    e.preventDefault()
    const u = lerUsuario()
    if (!u || u.email !== email || u.senha !== senha) {
      setErro('E-mail ou senha inválidos. Se ainda não tem login, faça o cadastro.')
      return
    }
    entrar()
    navigate(state?.voltar || '/catalogo')
  }

  return (
    <section className="pagina">
      <h1 className="titulo">Login</h1>
      <form className="form" onSubmit={enviar} style={{ maxWidth: 430 }}>
        <label>E-mail:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" required />
        <label style={{ marginTop: 34 }}>Senha:</label>
        <CampoSenha value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" required />
        <button type="submit" className="btn-amarelo">Entrar</button>
        {erro && <p className="erro">{erro}</p>}
      </form>
      <p className="link-texto" style={{ marginTop: 40 }}>
        Não tem login ainda? Clique <Link to="/cadastro">AQUI</Link> e faça o seu cadastro.
      </p>
    </section>
  )
}
