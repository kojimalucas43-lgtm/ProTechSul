import { useState, useEffect } from 'react'

const KEY = 'protecsul:favoritos'
const ler = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] }
}

export default function useFavoritos() {
  const [favoritos, setFavoritos] = useState(ler)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favoritos))
  }, [favoritos])

  const alternar = (id) =>
    setFavoritos((f) => (f.includes(id) ? f.filter((i) => i !== id) : [...f, id]))

  return { favoritos, alternar, ehFavorito: (id) => favoritos.includes(id) }
}
