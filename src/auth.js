const USUARIO = 'protecsul:usuario'
const SESSAO = 'protecsul:sessao'

export const salvarUsuario = (u) => localStorage.setItem(USUARIO, JSON.stringify(u))
export const lerUsuario = () => {
  try { return JSON.parse(localStorage.getItem(USUARIO)) } catch { return null }
}
export const entrar = () => localStorage.setItem(SESSAO, '1')
export const estaLogado = () => localStorage.getItem(SESSAO) === '1'
export const moeda = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
