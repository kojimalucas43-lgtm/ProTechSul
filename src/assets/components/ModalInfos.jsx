export default function ModalInfos({ aberto, titulo, texto, onFechar, rotuloAcao, onAcao }) {
  if (!aberto) return null
  return (
    <div className="modal-fundo" onClick={onFechar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <div className="botoes">
          <button className="btn-cinza" onClick={onFechar}>Fechar</button>
          {onAcao && <button className="btn-amarelo" onClick={onAcao}>{rotuloAcao}</button>}
        </div>
      </div>
    </div>
  )
}
