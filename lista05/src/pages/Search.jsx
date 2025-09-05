import { useEffect, useMemo, useState } from 'react'
import { searchMovies } from '../api/omdb'
import { useFavorites } from '../hooks/useFavorites'
import MovieCard from '../components/MovieCard'

export default function SearchPage() {
  const [term, setTerm] = useState('')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { favorites, toggle, isFavorite } = useFavorites()

  // Número de páginas (OMDb retorna totalResults)
  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / 10)), [total])

  // Quando "query" ou "page" mudarem, busca na API
  useEffect(() => {
    if (!query) {
      setResults([])
      setTotal(0)
      return
    }
    let cancelled = false
    setLoading(true)
    setError('')
    searchMovies(query, page)
      .then(({ list, total }) => {
        if (cancelled) return
        setResults(list)
        setTotal(total)
      })
      .catch((err) => {
        if (cancelled) return
        setError(err.message || 'Erro inesperado')
        setResults([])
        setTotal(0)
      })
      .finally(() => !cancelled && setLoading(false))

    return () => { cancelled = true }
  }, [query, page])

  function onSubmit(e) {
    e.preventDefault()
    // Dispara nova busca e volta à página 1
    setQuery(term.trim())
    setPage(1)
  }

  function goto(p) {
    if (p < 1 || p > totalPages) return
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Cria um pequeno range de botões de página (ex.: atual +/- 2)
  const pager = useMemo(() => {
    const span = 2
    const start = Math.max(1, page - span)
    const end = Math.min(totalPages, page + span)
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }, [page, totalPages])

  return (
    <div className="search-section">
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          className="input"
          placeholder="Busque por título (ex.: Batman)"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Buscar</button>
      </form>

      {loading && (
        <p className="mt-4 text-sm text-gray-500">Carregando resultados...</p>
      )}

      {error && (
        <p className="mt-4 text-sm text-red-600">Erro: {error}</p>
      )}

      {!loading && !error && results.length === 0 && query && (
        <p className="mt-4 text-sm text-gray-500">Nenhum resultado para “{query}”.</p>
      )}

      <div className="grid-results">
        {results.map((m) => (
          <MovieCard
            key={m.imdbID}
            movie={m}
            onToggleFavorite={toggle}
            isFavorite={isFavorite(m.imdbID)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => goto(page - 1)} disabled={page === 1}>Anterior</button>
          {pager.map(p => (
            <button
              key={p}
              onClick={() => goto(p)}
              className={p === page ? 'active' : ''}
            >
              {p}
            </button>
          ))}
          <button onClick={() => goto(page + 1)} disabled={page === totalPages}>Próxima</button>
        </div>
      )}
    </div>
  )
}