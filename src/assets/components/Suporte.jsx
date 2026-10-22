import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Suporte() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function enviar(e) {
    e.preventDefault()
    navigate('/concluido')
  }

  return (
    <section className="pagina">
      <h1 className="titulo">Suporte</h1>
      <form className="form" onSubmit={enviar} style={{ maxWidth: 430, marginTop: 50 }}>
        <label>E-mail:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" required />
        <label style={{ marginTop: 34 }}>Mensagem:</label>
        <input value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Digite sua mensagem" required />
        <button type="submit" className="btn-amarelo">ENVIAR MENSAGEM</button>
      </form>
    </section>
  )
}
