import { Link, useLocation } from 'react-router-dom'

export default function Concluido() {
  const { state } = useLocation()
  const titulo = state?.titulo || 'Mensagem enviada com sucesso!'
  const texto = state?.texto || 'Obrigado pela sugestão, em breve enviaremos uma resposta'

  return (
    <section className="pagina concluido">
      <h1>{titulo}</h1>
      <p>{texto}</p>
      <span className="check">✓</span>
      <p style={{ marginTop: 30 }}>
        <Link to="/catalogo" className="btn-amarelo">Voltar ao catálogo</Link>
      </p>
    </section>
  )
}
